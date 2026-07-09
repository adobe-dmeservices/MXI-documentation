# Supported applications and identifiers

> **Sources:** Archived [Adobe HelpX MXI documentation](general-mxi-elements.md) and the [CEP 12 HTML Extension Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_12.x/Documentation/CEP%2012%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep).

MXI and CEP use **different identifier systems** for the same Adobe applications. An Exchange ZXP typically contains both:

- **`CSXS/manifest.xml`** — uses CEP **Host IDs** (Enigma/SAP codes) for runtime panel loading
- **`.mxi` file** — uses **product names** for Extension Manager / Exchange installation targeting

## MXI product identifiers

Use these values in `<product name="...">` or `<product familyname="...">` inside `<products>`.

| Application | MXI `name` values | MXI `familyname` | Notes |
| --- | --- | --- | --- |
| Dreamweaver | `Dreamweaver` | — | |
| Flash / Animate | `Flash` | — | Legacy MXI name; Animate successors use CEP `FLPR` |
| Illustrator | `Illustrator`, `Illustrator32`, `Illustrator64` | `Illustrator` | `familyname` valid CS6+; targets Mac + Win 64-bit |
| InCopy | `InCopy`, `InCopy32`, `InCopy64` | `InCopy` | `familyname` valid CC+ |
| InDesign | `InDesign`, `InDesign32`, `InDesign64` | `InDesign` | `familyname` valid CC+ |
| Lightroom Classic | `LightroomClassic` | — | |
| Photoshop | `Photoshop`, `Photoshop32`, `Photoshop64` | `Photoshop` | `familyname` targets Mac + Win 64-bit |
| Premiere Pro | `Premiere` | — | |
| Prelude | `Prelude` | — | |

### Product attributes

| Attribute | Values | Description |
| --- | --- | --- |
| `name` | See table above | Required unless `familyname` is set |
| `familyname` | `Photoshop`, `Illustrator`, `InDesign`, `InCopy` | Installs to both Mac and Win 64-bit variants |
| `version` | Major version number | Minimum supported product version (see version table below) |
| `maxversion` | Major[.minor] | Maximum supported product version |
| `required` | `true` / `false` | Whether the product is required (default `false`) |
| `platform` | `mac` / `win` | Limit to one platform |
| `bit` | `32` / `64` | Windows bitness |

## CEP Host IDs (SAP / Enigma codes)

Use these in `CSXS/manifest.xml` inside `<Host Name="..." Version="..."/>`.

| Application | CEP Host ID | MXI equivalent |
| --- | --- | --- |
| Photoshop | `PHSP` (32-bit), `PHXS` (64-bit) | `Photoshop`, `Photoshop32`, `Photoshop64` |
| Illustrator | `ILST` | `Illustrator`, `Illustrator32`, `Illustrator64` |
| InDesign | `IDSN` | `InDesign`, `InDesign32`, `InDesign64` |
| InCopy | `AICY` | `InCopy`, `InCopy32`, `InCopy64` |
| Premiere Pro | `PPRO` | `Premiere` |
| Prelude | `PRLD` | `Prelude` |
| After Effects | `AEFT` | *(not documented in archived MXI docs)* |
| Animate (Flash Pro) | `FLPR` | `Flash` |
| Audition | `AUDT` | *(not documented in archived MXI docs)* |
| Dreamweaver | `DRWV` | `Dreamweaver` |
| Bridge | `KBRG` | *(not documented in archived MXI docs)* |
| Lightroom Classic | `LTRM` | `LightroomClassic` |
| Rush | `RUSH` | *(not documented in archived MXI docs)* |

> **Note:** After Effects, Audition, Bridge, and Rush appear in the [CEP 12 supported applications table](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_12.x/Documentation/CEP%2012%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep) but are **not listed** in the archived Adobe HelpX MXI product reference. CEP extensions for those hosts may still require an MXI for Exchange distribution — verify product targeting empirically.

## MXI version numbers

The `version` attribute on `<product>` uses the **internal major version**, not the marketing year. Examples:

| Marketing name | MXI `version` | CEP major (approx.) |
| --- | --- | --- |
| CC 2014 | 10 (InDesign), 14 (Photoshop), 18 (Illustrator) | varies |
| CC 2015 | 11 (InDesign), 16 (Illustrator) | — |
| CC 2017 | 12 (InDesign), 18 (Photoshop), 21 (Illustrator) | — |
| CC 2018 | 13 (Dreamweaver), 19 (Illustrator) | — |
| CC 2019 | 14 (InDesign), 20 (Photoshop), 23 (Illustrator) | CEP 9 |
| CC 2020 | 15 (InDesign), 21 (Photoshop), 24 (Illustrator) | CEP 9 |
| CC 2021 | 16 (InDesign), 22 (Photoshop), 25 (Illustrator) | CEP 10 |
| CC 2022 | 17 (InDesign), 23 (Photoshop), 26 (Illustrator) | CEP 11 |
| CC 2023 | 18 (InDesign) | CEP 11 |
| CC 2024 | 19 (InDesign), 25 (Photoshop), 28 (Illustrator) | CEP 12 |

See [General MXI elements](general-mxi-elements.md#products) for the complete historical version table.

## CEP 12 host version reference

From the CEP 12 cookbook (marketing version → CEP runtime):

| Application | Host ID | CC 2019 | CC 2020 | FY 2024 |
| --- | --- | --- | --- | --- |
| Photoshop | PHSP/PHXS | 20 | 21 | 25.12 |
| InDesign | IDSN | 14 | 15 | 20.4 |
| InCopy | AICY | 14 | 15 | TBD |
| Illustrator | ILST | 23 | 24 | 29.5.1 |
| Premiere Pro | PPRO | 13 | 14 | 25.0 |
| Prelude | PRLD | 8 | 9 | TBD |
| After Effects | AEFT | 16 | 17 | 25.0 |
| Animate | FLPR | 19 | 20 | TBD |
| Audition | AUDT | 12 | 13 | 25.0 |
| Dreamweaver | DRWV | 19 | 20 | TBD |
| Bridge | KBRG | 9 | 10 | TBD |
| Rush | RUSH | 1 | 1.2.1 | TBD |

## Example: targeting Photoshop and InDesign

**MXI** (Extension Manager install targeting):

```xml
<products>
    <product familyname="InDesign" version="17" maxversion="20.99"/>
    <product familyname="Photoshop" version="21" maxversion="26.99"/>
</products>
```

**CEP manifest** (runtime host targeting):

```xml
<ExecutionEnvironment>
    <HostList>
        <Host Name="IDSN" Version="[17.0,20.9]"/>
        <Host Name="PHXS" Version="[21.0,26.9]"/>
    </HostList>
    <RequiredRuntimeList>
        <RequiredRuntime Name="CSXS" Version="12.0"/>
    </RequiredRuntimeList>
</ExecutionEnvironment>
```

## Related documentation

- [General MXI elements](general-mxi-elements.md) — full element reference
- [Path tokens](path-tokens.md) — destination path variables per application
- [Example MXI](https://github.com/adobe-dmeservices/MXI-documentation/blob/main/examples/com.wedia.wxm.mxi) — real-world multi-product package
- [MXI Builder](https://adobe-dmeservices.github.io/MXI-documentation/) — interactive wizard to generate an MXI file
