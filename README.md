# MXI-documentation

Documentation for the almost forgotten and arcane MXI format, which is critical to distributing extensions via Adobe Exchange.

This repository preserves the original Adobe Extension Manager HelpX documentation as Markdown, supplements it with CEP Host ID cross-references, and includes an interactive **MXI Builder** published via GitHub Pages.

## MXI Builder (GitHub Pages)

**https://adobe-dmeservices.github.io/MXI-documentation/**

The published site is the builder only — a step-by-step wizard with live XML preview and download. Reference documentation lives in this repository under [`reference/`](reference/) and is browsable on GitHub.

## Reference documentation

| Topic | File |
| --- | --- |
| [Supported applications](reference/supported-applications.md) | MXI product IDs + CEP Host ID cross-reference |
| [MXI element summary](reference/mxi-element-summary.md) | Overview of all MXI elements |
| [General MXI elements](reference/general-mxi-elements.md) | Elements used in all target applications |
| [Product-specific MXI elements](reference/product-specific-mxi-elements.md) | Dreamweaver- and Flash-only elements |
| [Location specification](reference/location-specification.md) | How to specify install locations |
| [Path tokens](reference/path-tokens.md) | Path tokens for each Adobe application |
| [XML coding best practices](reference/xml-coding-best-practices.md) | XML authoring guidelines |
| [Configuration file reference](reference/configuration-file-reference.md) | Extension Manager configuration files |
| [Multilingual extension packages](reference/creating-multilingual-extension-packages.md) | Creating multilingual packages (v2.1+) |

## Examples

| File | Description |
| --- | --- |
| [examples/minimal.mxi](examples/minimal.mxi) | Minimal starter template |
| [examples/com.wedia.wxm.mxi](examples/com.wedia.wxm.mxi) | Real-world multi-product package from the original archive |

## GitHub Pages setup

The `docs/` folder contains only the static builder site. Markdown reference docs are in `reference/` so they are not published as raw files on GitHub Pages.

1. Go to **Settings → Pages** in the GitHub repository
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Select branch `main` and folder **`/docs`**
4. Save

## Regenerating Markdown from HTML

If you have the original HTML archive (`MXI.zip`), you can regenerate the Markdown files:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r scripts/requirements.txt

unzip MXI.zip -d /tmp/mxi-extract
python scripts/convert_html_to_markdown.py /tmp/mxi-extract/MXI -o reference
```

## Sources

- Archived Adobe HelpX Extension Manager documentation
- [CEP 12 HTML Extension Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_12.x/Documentation/CEP%2012%20HTML%20Extension%20Cookbook.md) for Host ID / SAP codes

## License

See [LICENSE](LICENSE).
