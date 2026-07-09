# MXI-documentation

Documentation for the almost forgotten and arcane MXI format, which is critical to distributing extensions via Adobe Exchange.

This repository preserves the original Adobe Extension Manager HelpX documentation as Markdown, supplements it with CEP Host ID cross-references, and includes an interactive **MXI Builder** for generating `.mxi` files.

## Live site

Once GitHub Pages is enabled (see below), the site is available at:

**https://adobe-dmeservices.github.io/MXI-documentation/**

- [Home / docs index](https://adobe-dmeservices.github.io/MXI-documentation/)
- [MXI Builder wizard](https://adobe-dmeservices.github.io/MXI-documentation/builder.html)

## MXI Builder

The builder walks you through creating an MXI file step by step:

1. **Extension info** — id, name, version, author, optional flags
2. **Products** — target applications with version ranges (dropdowns show CEP Host IDs)
3. **Description** — description, license, optional UI access text
4. **Files** — source paths, destinations, file types, platform filters
5. **Advanced** — dependencies and update URL
6. **Review** — live XML preview, copy, and download

Open locally: `docs/builder.html` in a browser, or use the GitHub Pages URL above.

## Documentation

| Topic | File |
| --- | --- |
| [Supported applications](docs/supported-applications.md) | MXI product IDs + CEP Host ID cross-reference |
| [MXI element summary](docs/mxi-element-summary.md) | Overview of all MXI elements |
| [General MXI elements](docs/general-mxi-elements.md) | Elements used in all target applications |
| [Product-specific MXI elements](docs/product-specific-mxi-elements.md) | Dreamweaver- and Flash-only elements |
| [Location specification](docs/location-specification.md) | How to specify install locations |
| [Path tokens](docs/path-tokens.md) | Path tokens for each Adobe application |
| [XML coding best practices](docs/xml-coding-best-practices.md) | XML authoring guidelines |
| [Configuration file reference](docs/configuration-file-reference.md) | Extension Manager configuration files |
| [Multilingual extension packages](docs/creating-multilingual-extension-packages.md) | Creating multilingual packages (v2.1+) |

## Examples

| File | Description |
| --- | --- |
| [examples/minimal.mxi](examples/minimal.mxi) | Minimal starter template |
| [examples/com.wedia.wxm.mxi](examples/com.wedia.wxm.mxi) | Real-world multi-product package from the original archive |

## Enable GitHub Pages

1. Go to **Settings → Pages** in the GitHub repository
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Select branch `main` and folder **`/docs`**
4. Save — the site will publish within a few minutes

The `docs/.nojekyll` file ensures GitHub Pages serves the static HTML builder correctly.

## Regenerating Markdown from HTML

If you have the original HTML archive (`MXI.zip`), you can regenerate the Markdown files:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r scripts/requirements.txt

unzip MXI.zip -d /tmp/mxi-extract
python scripts/convert_html_to_markdown.py /tmp/mxi-extract/MXI -o docs
```

## Sources

- Archived Adobe HelpX Extension Manager documentation
- [CEP 12 HTML Extension Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_12.x/Documentation/CEP%2012%20HTML%20Extension%20Cookbook.md) for Host ID / SAP codes

## License

See [LICENSE](LICENSE).
