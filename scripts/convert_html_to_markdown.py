#!/usr/bin/env python3
"""Convert archived Adobe HelpX MXI HTML documentation to Markdown."""

from __future__ import annotations

import argparse
import re
from pathlib import Path

from bs4 import BeautifulSoup
from markdownify import markdownify as md

# Inner HTML files (cleaner than Wayback-wrapped top-level saves).
SOURCE_FILES: dict[str, str] = {
    "configuration-file-reference.md": "Configuration File Reference for Extension Manager CC_files/configuration-file-reference.html",
    "creating-multilingual-extension-packages.md": "Create multilingual extension packages (version 2.1 and later)_files/creating-multilingual-extension-packages.html",
    "general-mxi-elements.md": "General MXI elements_files/general-mxi-elements.html",
    "location-specification.md": "Location specification_files/location-specification.html",
    "mxi-element-summary.md": "MXI element summary_files/mxi-element-summary.html",
    "path-tokens.md": "Path tokens_files/path-tokens-extension-manager.html",
    "product-specific-mxi-elements.md": "Product-specific MXI elements_files/product-specific-mxi-elements.html",
    "xml-coding-best-practices.md": "XML coding best practices_files/xml-coding.html",
}


LOCAL_LINKS: dict[str, str] = {
    "configuration-file-reference": "configuration-file-reference.md",
    "creating-multilingual-extension-packages": "creating-multilingual-extension-packages.md",
    "general-mxi-elements": "general-mxi-elements.md",
    "location-specification": "location-specification.md",
    "mxi-element-summary": "mxi-element-summary.md",
    "path-tokens-extension-manager": "path-tokens.md",
    "path-tokens": "path-tokens.md",
    "product-specific-mxi-elements": "product-specific-mxi-elements.md",
    "xml-coding": "xml-coding-best-practices.md",
    "xml-coding-best-practices": "xml-coding-best-practices.md",
}

DISPLAY_LINKS: list[tuple[str, str]] = [
    ("General MXI elements", "general-mxi-elements.md"),
    ("Product-specific MXI elements", "product-specific-mxi-elements.md"),
    ("Product-specific MXI Elements", "product-specific-mxi-elements.md"),
    ("Location specification", "location-specification.md"),
    ("Path tokens", "path-tokens.md"),
    ("Path Tokens | Extension Manager", "path-tokens.md"),
    ("XML coding best practices", "xml-coding-best-practices.md"),
    ("Configuration file reference", "configuration-file-reference.md"),
    ("Creating multilingual extension packages", "creating-multilingual-extension-packages.md"),
    ("Create multilingual extension packages", "creating-multilingual-extension-packages.md"),
    ("MXI element summary", "mxi-element-summary.md"),
]


def fix_links(text: str) -> str:
    for slug, target in LOCAL_LINKS.items():
        text = re.sub(
            rf"\]\(/extension-manager/kb/{re.escape(slug)}\.html\)",
            f"]({target})",
            text,
            flags=re.IGNORECASE,
        )

    for label, target in DISPLAY_LINKS:
        text = re.sub(rf"\[{re.escape(label)}\](?!\()", f"[{label}]({target})", text)

    return text


def clean_markdown(text: str) -> str:
    text = fix_links(text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = re.sub(r"[ \t]+\n", "\n", text)
    return text.strip() + "\n"


def extract_content(soup: BeautifulSoup):
    for tag in soup(["script", "style", "noscript"]):
        tag.decompose()

    title = soup.title.string.strip() if soup.title and soup.title.string else "Untitled"

    canonical = soup.select_one('link[rel="canonical"]')
    source_url = canonical["href"] if canonical and canonical.get("href") else ""

    content = soup.select_one("#root_content_flex_items_position")
    if content is None:
        content = soup.select_one(".helpxMain-article") or soup.body

    markdown = md(
        str(content),
        heading_style="ATX",
        bullets="-",
        strip=["img"],
    )

    header = f"# {title}\n\n"
    if source_url:
        header += f"> **Source:** Archived from [Adobe HelpX]({source_url})\n\n"

    return clean_markdown(header + markdown)


def convert_archive(source_dir: Path, output_dir: Path) -> list[Path]:
    output_dir.mkdir(parents=True, exist_ok=True)
    written: list[Path] = []

    for output_name, relative_html in SOURCE_FILES.items():
        html_path = source_dir / relative_html
        if not html_path.exists():
            raise FileNotFoundError(f"Missing source file: {html_path}")

        soup = BeautifulSoup(html_path.read_text(encoding="utf-8", errors="replace"), "lxml")
        markdown = extract_content(soup)

        out_path = output_dir / output_name
        out_path.write_text(markdown, encoding="utf-8")
        written.append(out_path)

    return written


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "source_dir",
        type=Path,
        help="Directory containing extracted MXI HTML (the MXI/ folder from the ZIP)",
    )
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=Path("reference"),
        help="Output directory for Markdown files (default: reference)",
    )
    args = parser.parse_args()

    written = convert_archive(args.source_dir, args.output)
    print(f"Wrote {len(written)} markdown files to {args.output.resolve()}")
    for path in written:
        print(f"  - {path.name}")


if __name__ == "__main__":
    main()
