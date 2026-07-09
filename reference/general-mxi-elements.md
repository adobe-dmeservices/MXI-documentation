# General MXI elements

> **Source:** Archived from [Adobe HelpX](https://helpx.adobe.com/extension-manager/kb/general-mxi-elements.html)

# author

Required. Name of the author of the extension.

**Attributes**: `name, [author_resid]`

`name`

> Required. The author’s name, a VARCHAR data type with a limit of 255 characters.

`author_resid`

> Optional. A localized-string identifier for the author’s name to display in Extension Manager. Used only when the extension is configured to be multilingual. The identified string must be defined in localization files.

# dependency

Optional. A container for one or more extension elements that describe the extensions that this extension depends on.

**extension**

Required. A tag that describes the extension that this extension depends on. It is contained in a `dependency` element.

Attributes: `name`

`name`

> Required. The name of the extension that this extension depends on.

## Example

``` xml
<dependency>
    <extension name="Sample1" />
    <extension name="Sample2" />
    <extension name="Sample3" />
    <extension name="Sample4" />
</dependency>
```

# description

Required. A container that contains or points to HTML text that describes what the extension does or is used for. The text appears in the Extension Manager when the extension is selected. Extension Manager displays the description text in CDATA contents. If a URL or a path to a local web page is provided, it will be shown as clickable link at the top of description. If the link is clicked, Extension Manager will open the web page in the default browser.

The contents of the element must contain a CDATA section, which you can format with HTML tags. If text colors are not specified, the background is gray (62 62 62) and the text is black.

To display double-byte characters, include "charset=UTF-8". Example:

``` xml
<description>
    <![CDATA[<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"><br>
    This is a sample Exchange item.<br>
    It is a sample library containing a single button.]]>
</description>
```

Attributes: `[href, resid, source, href-resid, source_resid]`

`href`

> Optional. A URL for the description to display in Extension Manager. The value must start with either “http://” or “https://”.

`source`

> The path to an HTML file on the local computer, relative to the Extension Manager variable `$ExtensionSpecificEMStore`. See [Location specification](location-specification.md).

`resid`

> Optional. A localized-string identifier for the description to display in Extension Manager. Used only when the extension is configured to be multilingual. The identified string must be defined in localization files.

`href_resid`

> Optional. A localized-string identifier for the href to display in Extension Manager. Used only when the extension is configured to be multilingual. The identified string must be defined in localization files.

`source_resid`

> Optional. A localized-string identifier for the source to display in Extension Manager. Used only when the extension is configured to be multilingual. The identified string must be defined in localization files.

# files

Optional. A container for one or more file elements that describe specific files to be installed as part of the extension.

To create an extension as part of a bundle or framework in Mac OS, use a format like the following, without wild cards:

``` xml
<files>
    <file source="sourceFolder" destination="$photoshop/" />
</files>
```

or

``` xml
<files>
    <file source="sourceFolder/" destination="$photoshop/" />
</files>
```

Attributes: `[xml:lang, products, default-file-type]`

`xml:lang`

Optional. The language for this group of files.

Its value is locale id ( such as “en\_US”, …). Extension Manager installs these files only when this is the current language. If Extension Manager cannot determine the current language, it ignores this value and installs the files.

`products`

Optional. The products for which these files should be installed. If not specified, the files are installed for all products. A comma-separated list of products; see product. If an extension supports multiple products and product-specific path token is used in destination attribute, then products attribute must be specified.

`default-file-type`

Optional. The default type of the contained files. One of:

- `csxs`: A CS extension package.
- `plugin`: A native plug-in.
- `ordinary`: Ordinary files receive no special processing by Extension Manager.

This value is overridden by the file-type attribute of a contained file.

**file**

A tag contained in the `files` element that describes a specific file to be installed as part of this extension.

Attributes (child element): `source, destination, [products, platform, shared, systemfile, win-extension, isresourcefile, file-type, addToTrustFile, minVersion, maxVersion]`

`source`

Required. The file name, and the path in which it is found relative to the installation file. Files can be in different folders. See [Location specification](location-specification.md).

If all files in a folder have to be installed to the same destination folder, you don't have to add all files individually. Put a slash at the end of folder name when specifying source attribute, then all files in that folder will be packaged into the extension. For example, if the folder name is "Resources", the following line will cause all files in this folder copied to the destination folder:

``` xml
<file source="Resources/" destination="$dreamweaver/configuration/Resources"/>
```

`destination`

Required. The name of the destination folder, in which to place the file during installation. If this folder does not exist, Extension Manager creates it during installation. This does not include the file name, which is specified by the source attribute. Generally, destination folders should be inside the application’s configuration folder. See [Location specification](location-specification.md).

`products`

Optional. The products for which this file should be installed. If not specified, the file is installed for all products. A comma-separated list of products; see product.

`platform`

Optional. The platform for which this file is intended, one of "mac" or "win". This allows you to supply different versions of a file for different platforms. If not supplied, the file is installed on both platforms.

`shared`

Optional. True if file is used by more than one extension. Default is false.

When you use the Extension Manager to remove an extension, a shared file associated with that extension is not deleted as long as other installed extensions refer to that file.

If you install a newer version of a shared file and another extension is using the old version of the file, the new shared file must be backward compatible with the other extension, or must have a new filename so that the other extension continues to work properly.

`systemfile`

Optional. True if the file is used by anything other than extensions. For example, some extensions provide new versions of DLLs or other system files, or files that are used by other applications.

When you use the Extension Manager to remove an extension, a file marked as a system file is not deleted, even if no other extensions use it, and regardless of the shared attribute value.

`win-extension`

Optional. A file-name extension to use when a file generated in Mac OS that does not include the Windows extension, such as .fla or .htm.

If you create a file on Windows that does include the extension, such as "mypage.htm”, and install it in Mac OS, this value is not needed.

If a platform attribute value is supplied, this attribute is ignored.

`isresourcefile`

Optional. True if this is a resource file containing language-specific text strings. Default is false.

Place resource files in a folder with the name installerPrefix.mxi\_Resources. When the MXI file is loaded, Extension Manager copies this folder into the top-level Extension Manager folder, where it then looks for text strings.

`file-type`

Optional. The file type. One of:

- `csxs` : A CS extension package.
- `plugin`: A native plug-in.
- `ordinary`: Ordinary files receive no special processing by Extension Manager.

Default is the value specified in the container files element.

`addToTrustFile`

Optional. If a SWF file or HTML file is specified as addToTrustFile="true", during extension installation Extension Manager will register this file as local trusted in the Flash Player Trust directory. When the extension is removed, Extension Manager will unregister this file. Default is false.

`minVersion, maxVersion`

Optional. The minimum and maximum versions of the product in which this file can be installed. For example, if minVersion is 9 and maxVersion is 10, the file is not installed in product version 8 or 11. Use the same format as for the version attribute of macromedia-extension, major[.minor][.build].

# file-tokens

Optional. A Container tag that indicates any custom tokens.

Contents
One or more token tags for defining custom tokens. For example,

``` xml
<file-tokens>
  <!-- token tags go here -->
</file-token>
```

**token**

Defines a custom token for an extension.Custom tokens let you specify the destination folder of one or more files from your extension during installation when pre-defined path tokens can't meet your requirement. For example, you might use a custom token if your extension contains items that must be installed in a specific directory.

Custom tokens are also useful to simplify the mxi file. You can easily change the destination directory of multiple files without having to manually change each destination path in the MXI file. In this case, you would use a custom token as you would use the `$Dreamweaver`, `$Flash`, `$fonts`, or `$system` token. For example, if your extension contains multiple files that must be installed in C:\program files\trailer, you can use a token tag to define a custom token called airstream; all of the files that use this token are installed in C:\program files\trailer.

If you want to change the destination folder of the files using the `$airstream` token, you have to make only one change in the token tag rather than change every instance of the path to the new destination in your MXI file.

Note:

You cannot redefine the `$Dreamweaver`, `$Flash`, `$fonts`, `$system` token or other pre-defined token with a custom token.

**Attributes**

**Name**

The name of your custom token. This must be a unique name. Do not include the dollar sign ($) in the name.

**Definition**

Defines the file path of the token. Since the absolute path is platform specific, you should use "platform" attribute of "product" or "file" tag to specify the file should be installed in only Windows or only Mac. In the example below, all files using the token $airstream are installed in C:\program files\trailer.

``` xml
<token name = "airstream" definition = "C:\program files\trailer"/>
```

# license-agreement

Optional. Allows a third-party developer to include a license agreement with an extension. If supplied, the contents of this element are displayed under the heading Third Party License, at the end of the Adobe new-extension installation license.

The contents must contain a CDATA section, which you can format with HTML tags. If text colors are not specified, the background is gray (58 58 58) and the text is off-white (E0 E0 E0).

Attributes: `[resid]`

`resid`

> Optional. A localized-string identifier for the license agreement to display in the Extension Manager. Used only when the extension is configured to be multilingual. The identified string must be defined in localization files.

Example:

``` xml
<license-agreement>
    <![CDATA[You are about to install an Extension from the Adobe Exchange.
    The Adobe Exchange is an area of the adobe.com website that allows third parties to submit extensions for posting to adobe.com.]]>
</license-agreement>
```

# macromedia-extension

The top-level container for an MXI file. The opening tag must be on the first line of the file. All other elements are children of this container. It must contain these elements:

> `products, product`

If you are installing files, it must contain these elements:

> `files, file`

Optional contained elements:

> `author, dependency, description, license-agreement, ui-access, update, file-tokens`

Attributes: `id, name, version, [icon, force-quit, ismultilingual, name_resid, type, plugin-manager-type]`

`id`

> Required. The unique identifier assigned by Adobe when you submit your extension. Do not modify.

`name`

> Required. The name of the extension, displayed in Extension Manager. A VARCHAR data type with a limit of 255 characters. You can localize the name using the `name_resid` attribute.

`version`

> Required. Contains the version number of the extension, in the format major[.minor[.build[.misc]]]. The major number, minor number, and build number are all positive integers. The misc part can contain only letters or numbers. For example, 2,2.1, or 2.1.2.test3.

`icon`

> Optional. The path to a customized icon for this extension, to display in Extension Manager. Can be relative to the Extension Manager variable `$ExtensionSpecificEMStore`. See [Location specification](location-specification.md).

> Icons are only shown in Extension Manager CS4 and later. For CS3 or earlier, use the type attribute. If not specified, a default icon is used.

> To display customized icon correctly, the icon file must be installed under `$ExtensionSpecificEMStore` folder, as follows:

> `<file source="myIcon.png" destination="$ExtensionSpecificEMStore" />`

`force-quit`

> Optional. When true, the target product must quit before the extension can be installed or modified. Extension Manager prompts the user to quit a running application before proceeding with the operation. Default is false.

> Introduced in Extension Manager CS5, supersedes `requires-restart`.

> **Note:** Extensions with this attribute specified cannot be installed via Adobe Exchange panel. This is because the Exchange panel runs within Creative Cloud applications.

`ismultilingual`

> Optional. When true, installs language-specific files and applies localized UI strings in the extension. When false (the default), all multilingual elements are ignored. Set this attribute to `true` only if the extension includes localization files.

`name_resid`

> Optional. A localized-string identifier for the extension name to display in Extension Manager. Used only when the extension is configured to be multilingual. The identified string must be defined in localization files.

`plugin-manager-type`

> Optional. InDesign/InCopy CS5 and higher only. The type of included plug-ins, one of:

> `all-users`: When any user installs the plug-in or extension, it is available to all users. If any user disables or removes it, it is still available to other users. The destination of plug-ins should reside in the `$indesign/Plug-Ins` folder.

> `current-user`: When a user installs the plug-in or extension, it is available only to that user. If that user disables or removes it, it is no longer available to any user. The destination of plug-ins should not reside in the `$indesign/Plug-Ins` folder.

Example:

``` xml
<macromedia-extension
    name = "My Command"
    version = "1.0.0"
    icon = "command.png">
    <!-- all configuration elements-->
</macromedia-extension>
```

# products

Required. A container for one or more product elements, each of which specifies an Adobe product in which this extension can be installed. The container has no attributes.

**product**

A tag contained in a `products` element that specifies a product in which this extension can be installed.

Attribures (child element): `name, [version, required, maxversion, familyname, platform, bit]`

`name`

> Required, except when familyname is supplied. The name of an Adobe product, a VARCHAR2 data type with a limit of 64 characters. One of:

> - Bridge
> - Audition
> - Dreamweaver
> - Flash
> - Illustrator (Illustrator on Mac)
> - Illustrator32 (32-bit Illustrator on Windows)
> - Illustrator64 (64-bit Illustrator on Windows)
> - InCopy (InCopy in Mac OS)
> - InCopy32 (32-bit InCopy in Windows)
> - InCopy64(64-bit InCopy in Windows)
> - InDesign (InDesign in Mac OS)
> - InDesign32 (32-bit InDesign in Windows)
> - InDesign64(64-bit InDesign in Windows)
> - LightroomClassic
> - Photoshop (Photoshop on Mac)
> - Photoshop32 (32-bit Photoshop on Windows)
> - Photoshop64 (64-bit Photoshop on Windows)
> - Prelude
> - Premiere
> - AfterEffects

`version`

> The minimum version number of the product in which this extension can be installed. Valid version numbers are as follows:

|  |  |
| --- | --- |
| Dreamweaver MX 2004, Fireworks MX 2004, Flash MX 2004 | 7 |
| Dreamweaver 8, Fireworks 8, Flash 8 | 8 |
| Dreamweaver CS3, Fireworks CS3, Flash Professional CS3 | 9 |
| Dreamweaver CS4, Fireworks CS4, Flash Professional CS4 | 10 |
| Dreamweaver CS5, Fireworks CS5, Flash Professional CS5 | 11 |
| Fireworks CS5.1 | 11.1 |
| Dreamweaver CS5.5, Flash Professional CS5.5 | 11.5 |
| Dreamweaver CS6, Fireworks CS6, Flash CS6 | 12 |
| Dreamweaver CC, Flash Professional CC | 13 |
| Dreamweaver CC 2014, Flash Professional CC 2014 | 14 |
|  |  |
| Illustrator CS4 | 14 |
| Illustrator CS5 | 15 |
| Illustrator CS5.1 | 15.1 |
| Illustrator CS6 | 16 |
| Illustrator CC | 17 |
| Illustrator CC 2014 | 18 |
|  |  |
| InDesign CS4, InCopy CS4 | 6 |
| InDesign CS5, InCopy CS5 | 7 |
| InDesign CS5.5, InCopy CS5.5 | 7.5 |
| InDesign CS6, InCopy CS6 | 8 |
| InDesign CC, InCopy CC | 9 |
| InDesign CC 2014, InCopy CC 2014 | 10 |
|  |  |
| LightroomClassic | 9 |
| LightroomClassic | 10 |
| LightroomClassic | 11 |
|  |  |
| Photoshop CS4 | 11 |
| Photoshop CS5 | 12 |
| Photoshop CS5.1 | 12.1 |
| Photoshop CS6 | 13 |
| Photoshop CC | 14 |
| Photoshop CC 2014 | 15 |
|  |  |
| Premiere Pro CS5 | 5 |
| Premiere Pro CS5.5 | 5.5 |
| Premiere Pro CS6 | 6 |
| Premiere Pro CC | 7 |
| Premiere Pro CC 2014 | 8 |
|  |  |
| Prelude CS6 | 1 |
| Prelude CC | 2 |
| Prelude CC 2014 | 3 |
|  |  |
| Bridge CC | 9 |


`required`

Optional. True if this product is required for the extension to function properly. If the extension can function without this product, this should be false (the default).

`maxversion`

Optional. The highest version of this product in which this extension can be installed.

`familyname`

Optional. When supplied, name is not required. A value of "Photoshop" allows the extension to be installed in both Photoshop and Photoshop 64-bit on Windows. A value of "Illustrator" allows the extension to be installed in both Illustrator and Illustrator (64 Bit) on Windows. The value of “Illustrator” is only valid in CS6 and later versions. A value of `InDesign` is valid only for CC and later versions, which allows the extension to be installed in both InDesign and InDesign (64-bit) in Windows. A value of "InCopy" is valid only for CC and later versions, which allows the extension to be installed in both InCopy and InCopy (64-bit) in Windows.

`platform`

Optional. The platform on which this extension can be installed, one of "mac" or "win". If not supplied, the extension is installed in this product on both platforms.

`bit`

Optional. The Win32 or Win64 version of this product for which this extension can be installed. One of "32" or "64". If not supplied, extension is installed in both the Win32 and Win64 versions of the product.

# ui-access

Contains or points to HTML text that describes the extension’s user interface. Together with the description element, identifies text that can appear in the Extension Manager window when the extension is selected. You should include information about where to find the item in the product’s user interface, as well as a brief description of the item’s use.

The contents must contain a CDATA section, which you can format with HTML tags. The description is limited to 512 characters.

Attribure: `[resid]`

`resid`

> Optional. A localized-string identifier for the UI description to display in Extension Manager. Used only when the extension is configured to be multilingual. The identified string must be defined in localization files.

Example:

``` xml
<ui-access>
    <![CDATA[You can run this extension by choosing<br>
        <b>Commands > Run My Extension.</b>]]>
</ui-access>
```

# update

Provides update information for this extension. If supplied, Extension Manager checks the given site for updates, and when an update is available, prompts the user to update the extension.

Attributes: `url,[method]`

`url`

> Required. A URL for an extension update information file. The value must start with either “http://” or “https://”. See details of this file format in [Make extensions updatable](/extension-manager/kb/make-extensions-updatable.html).

`method`

> Optional. Reserved for future use in identifying an update-checking method. The only currently supported value is the default, `directlink.`
