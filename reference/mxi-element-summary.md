# MXI element summary

> **Source:** Archived from [Adobe HelpX](https://helpx.adobe.com/extension-manager/kb/mxi-element-summary.html)

# General elements

These elements are used in all target applications. Details are provided in [General MXI elements](general-mxi-elements.md), where the tags are described in alphabetical order of containers.

| Tag | Description |
| --- | --- |
| `author` | Name of the extension’s author. |
| `dependency` | Extension dependency information (CS6 and higher). |
| `description` | Describes what the extension does. |
| `files` | Container for tags describing the files an extension installs. |
| `license-agreement` | Allows a third-party developer to include a license agreement that is displayed at installation. |
| `macromedia-extension` | Main container tag for extension installation file. |
| `products` | Container for tags specifying an extension’s product compatibility. |
| `ui-access` | Text to appear in the Extension Manager window when the extension is selected. |
| `update` | Extension update information (CS5 and higher). |
| `file-tokens` | Container for tags defining custom path tokens. |

# Product-specific elements

These tags are used only by Dreamweaver or Flash, and are ignored when an extension is installed in any other target application.

Details are provided in [Product-specific MXI elements](product-specific-mxi-elements.md), where the tags are described in alphabetical order of containers.

## Dreamweaver-only elements

| Element | Description |
| --- | --- |
| `configuration-changes` | Container for elements that modify the application’s configuration. These include menus, shortcuts, server behaviors, and data sources. |
| `data-source-changes` | Container for all changes to menus in the `DataSources.xml` file in any of the `Dreamweaver CC Configuration/DataSources/document_type folders.` |
| `documenttype-changes`  `documenttype-insert` | Container for elements that describe changes made to the `MMdocumentTypes.xml` file. |
| `extensions-changes`  `extension-insert` | Container for elements that describe changes to the `Extensions.txt` file, such as adding extensions that you can open in Dreamweaver. |
| `ftp-extension-map-changes`  `ftp-extension-insert` | Container for elements that describe changes to the `FTPExtensionMap.txt` on Windows or `FTPExtensionMapMac.txt` on Mac. This defines whether the file is downloaded or uploaded as an ASCII or binary file from Dreamweaver to an FTP server. |
| `insertbar-changes`  `insertbar-insert`  `insertbar-item-insert` | Container for elements that describe changes to be made to the `insertbar.xml` file and add new toolbars files |
| `menu-insert`  `menu`  `menubar`  `menuitem`  `comment`  `separator` | Container for elements that describe a menu or submenu to be inserted into the application’s menu.xml during installation of an extension. |
| `server-behavior-changes` | Container for changes to menus in the `ServerBehaviors.xml` file in any of the `Dreamweaver CC /Configuration/ServerBehaviors/ document_type` folders. |
| `server-format-change``s`  `server-format-definition-changes` | Container for changes to menus in the ServerFormats.xml or Formats.xml file in any of the `DreamWeaver CC/ Configuration/ServerFormats/document_type` folders. |
| `shortcut-insert`  `shortcutlist`  `shortcut` | Container for elements that specify keyboard shortcuts to be added to the `menus.xml` file. |
| `toolbar-changes`  `toolbar-insert`  `toolbar-item-insert` | Container for elements that specify changes to the tool bar. |

Note:

Data-source-changes and Server-behavior-changes are deprecated features. Install `Deprecated_ServerBehaviorsPanel_Support.zxp` in `$Dreamweaverapp \configuration\DisabledFeatures\` before using these elements.

## Flash-only elements

|  |  |
| --- | --- |
| Element | Description |
| `toolpanel-changes`  `toolpanel-item-insert` | Container for elements that specify Flash tool-panel changes. |
