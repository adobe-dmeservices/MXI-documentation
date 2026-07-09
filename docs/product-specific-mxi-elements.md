# Product-specific MXI elements

> **Source:** Archived from [Adobe HelpX](https://helpx.adobe.com/extension-manager/kb/product-specific-mxi-elements.html)

These elements are used only by Dreamweaver or Flash where specified. They are ignored when an extension is installed in any other target application.

# Containment map

Elements that define changes to the menus, shortcuts, server behaviors or formats, or data sources for Dreamweaver are collected into various containers, depending on where the changes occur.

| Container | Can contain |
| --- | --- |
| configuration-changes    (Top-level container for changes to different parts of the Dreamweaver and Flash configuration.) | - data-source-changes - documenttype-changes - extensions-changes - ftp-extension-map-changes - insertbar-changes - menu-insert - server-behavior-changes - server-format-changes - server-format- - definition-changes - shortcut-insert - toolbar-changes - toolpanel-changes (Flash only) |
| data-source-changes | - menu-insert |
| documenttype-changes | - documenttype-insert |
| extensions-changes | - extension-insert |
| ftp-extension-map-changes | - ftp-extension-insert |
| insertbar-changes | - insertbar-insert - insertbar-item-insert |
| server-behavior-changes | - menu-insert |
| server-format-changes | - menu-insert |
| server-format-definition-changes | - menu-insert |
| toolbar-changes | - toolbar-insert - toolbar-item-insert |
| toolpanel-changes (Flash only) | - toolpanel-item-insert |

# configuration-changes

This is the top-level container for elements that define changes to the menus, shortcuts, server behaviors or formats, or data sources for Dreamweaver. The container element has no attributes.

The following elements can be children of this container:

data-source-changes

documenttype-changes

extensions-changes

ftp-extension-map-changes

insertbar-changes

menu-insertserver-behavior-changes

server-format-changes

server-format-definition-changes

shortcut-insert

toolbar-changes

toolpanel-changes (Flash only)

# data-source-changes

This is a deprecated feature. Install Deprecated\_ServerBehaviorsPanel\_Support.zxp in $Dreamweaverapp\configuration\DisabledFeatures\ folder before use the element.

Container for changes to menus in the DataSources.xml file in any of the Dreamweaver Configuration/DataSources/servermodel folders. Can contain any combination of menu-insert elements.

Attributes: servermodelfolder

servermodelfolder

Required. The name of the server-model folder in which the changes are to be made. Case sensitive.  Can be the name of any installed server model, such as "ASP.NET\_Csharp", ASP.NET\_VB", "ASP\_Js", "ASP\_Vbs", "ColdFusion", "UD4-ColdFusion", "PHP\_MySQL" or "JSP".

# documenttype-changes

Container for elements that describe changes to be made to the MMDocumentTypes.xml file.

- Can contain child elements documenttype-insert.
- Contained in the configuration-changes element.

**E****x****ample**

<documenttype-changes>

    <documenttype-insert>

        <documenttype>

            ...

        </documenttype>

    </documenttype-insert>

</documenttype-changes>

#### documenttype-insert

One or more entries to be added to the MMDocumentTypes.xml file. Appends each specified tag library at the end of the file.

- Must contain one or more documenttype elements that describe tag libraries.
- Contained in the documenttype-changes element.

**A****TT****RIBUTES****:** [xml:lang]

**xml:lang**

Optional. The language for this configuration value.

**Example**

<documenttype-insert>

    <documenttype>

        ...

    </documenttype>

</documenttype-insert>

**documenttype**

Describes a tag library to be added to the MMDocumentTypes.xml file.

- Contained in the documenttype-insert element.

For a complete description, see Dreamweaver help:

[http://help.adobe.com/en\_US/dreamweaver/cs/extend/index.html](https://help.adobe.com/en_US/dreamweaver/cs/extend/index.html)

# extensions-changes

Container for elements that describe changes to be made to the Extensions.txt file, which contains file-name extensions that Dreamweaver can correlate with specific file types.

- Can contain child elements extension-insert.
- Contained in the configuration-changes element.

**Example**

<extensions-changes>

    <extension-insert extension="JS" description="JavaScript Documents" >

    </extension-insert>

</extension-changes>

**e****x****t****e****n****sion-insert**

An entry to be added to the Extensions.txt file.

- Contained in the extensions-changes element.

**A****TT****RIBUTES****:** extension, description, [xml:lang]

**extension**

Required. The file-name extension to add, a string such as "GIF" for a .gif extension.

**description**

Required. A description of the file type.

**xml:lang**

Optional. The language for this configuration value.

# ftp-extension-map-changes

Container for elements that specify changes to the FTPExtensionMap.txt on Windows and FTPExtensionMapMac.txt on Mac in the Configuration folder.

- Can contain child elements ftp-extension-insert.
- Contained in the configuration-changes element.

**ftp-extension-insert**

An entry to be added to the FTPExtensionMap.txt on Windows and FTPExtensionMapMac.txt on Mac in the Configuration folder. Defines whether a file of a given type is uploaded as an ASCII or binary file from Dreamweaver to an FTP server.

- Contained in the ftp-extension-map-changes element.

**A****TT****RIBUTES****:** extension, type, mac-creator, mac-file-type

**extension**

Required. The file-name extension for this file type, such as GIF or PNG.

**type**

Required. The format to use to upload this type of file to the FTP server, one of "ASCII" and "Binary".

**mac-creator**

Required. The creator code for Mac OS. If you do not know the creator code, use “????”.

**mac-file-type**

Required. The file type for Mac OS. If you do not know the file type, use “????”.

**Example**

<ftp-extension-insert extension="JPG" type="ASCII" mac-creator ="MKBY" mac-file-type="JPEG" />

# insertbar-changes

Contains elements that describe changes to the Insertbar.xml file. This file is automatically updated when objects are installed into Dreamweaver, so explicit change in the MXI file are not required.

Can contain child elements insertbar-insert and insertbar-item-insert.

Contained in the configuration-changes element.

**E****x****ample**

<insertbar-changes>

    <insertbar-insert insertBefore|insertAfter="*category\_id*">

        <category ...>

            <*itemtype*.../>

        </category>

    </insertbar-insert>

<insertbar-item-insert

insertBefore|insertAfter|appendTo|prependTo="*category\_or\_item\_id*" category="*category\_id*">

        <*itemtype*.../>

    </insertbar-item-insert>

</insertbar-changes>

**insertbar-insert**

Inserts a new category, as defined in the contained category element, into the Insertbar.xml file, at a position relative to an existing category.

Must contain a category element.

Contained in the insertbar-changes element.

**A****TT****R****IBUTES****:** insertBefore|insertAfter, [xml:lang]

**insertBefore|insertAfter**

The unique identifier of an existing category that determines the placement of this new one. One of these is required; do not specify both.

**xml:lang**

Optional. The language for this configuration value.

**category**

Defines a new category to be inserted into the Insertbar.xml file.

Must contain an item-type element, such as a button. For a complete description, see Dreamweaver help: [http://help.adobe.com/en\_US/dreamweaver/cs/extend/index.html](https://help.adobe.com/en_US/dreamweaver/cs/extend/index.html)

Contained in the insertbar-insert element.

**A****TT****R****IBUTES****:** folder, id

**folder**

Required. A subfolder in which to place the resources for the new category, which is added to the Dreamweaver configuration locations. See Dreamweaver documentation for details.

**id**

Required. A unique identifier for the new category.

**E****x****ample**

<insertbar-changes>

    <insertbar-insert insertBefore|insertAfter="category\_id">

        <category folder="Cat" id="DW\_Insertbar\_Cat">

            <button file="cat/cat.htm" id="DW\_Insertbar\_Cat\_Cat1" image="cat cat.gif" />

        </category>

    </insertbar-insert>

</insertbar-changes>

insertbar-item-insert

Inserts an item into a specified position with respect to an existing item or category.

Must contain an item-type element, such as a button, that describes the item to insert. Extension Manager verifies only that the XML is valid.

Contained in the insertbar-changes element.

**A****TT****R****IBUTES****:** {appendTo|prependTo}|{insertBefore|insertAfter, category}, [xml:lang]

**appendTo|prependTo**

The unique identifier of an existing category that determines the placement of this item. Specify one of these, or the insertion and category attributes; do not use both placement methods.

**insertBefore|insertAfter**

The unique identifier of an existing item that determines the placement of this new one. Specify one of these with the category attribute, or one of the append/prepend attributes; do not use both placement methods.

**category**

The unique identifier of an existing category to which to append this item if the relative insertion item is not found.

**xml:lang**

Optional. The language for this configuration value.

# menu-insert

Inserts a new menu feature into Dreamweaver’s menu structure, at a position relative to an existing menu feature. The configuration file that it modifies is determined by the container.

Use this element to explicitly add your extension to menus, even if your extension is an object or a command; do not rely on Dreamweaver to automatically add objects or commands to its menus. To ensure that your extension is not automatically added to the menus, make an entry for your file in the menus.xml file, and add this line to the top of each of your extension’s HTML files:

<!-- MENU-LOCATION=NONE -->

- Contained in a configuration-changes, server-behavior-changes, server-format-changes, server-format-definition-changes, or data-source-changes element.
- In all containers except server-format-definition-changes, must contain one or more child elements menu, menubar, or menuitem. Can also contain child elements comment and separator.
  - When contained in server-format-definition-changes, must contain one or more format child elements.

The attributes of this element determine where contained menus and items are placed with respect to existing menus and menu items. All child elements are inserted as a block, in the order they appear in this element.

A single menu-insert element can contain any number of menus or menu features. Submenus and menu items, however cannot be nested in menu or menubar elements; they must be inserted separately. Use a separate menu-insert element for each level of nesting; that is, use one menu-insert element for the parent menu, followed by another menu-insert element for the submenus in that menu, and another for the items in the submenus.

**E****x****ample**Suppose you want to add this menu with submenus and items to the main menu bar:

**Get More Objects**

**Animals**

**D****o****g**

**Poodle**

**Cat**

Use the following XML:

<menu-insert insertAfter="DWMenu\_Insert\_GetMoreObjects">

    <menu name="Animals" id="DWMenu\_Insert\_Animals" />

</menu-insert>

<menu-insert appendTo="DWMenu\_Insert\_Animals">

    <menu name="Dog" id="DWMenu\_Insert\_Animals\_Dog" />

    <menuitem name="Cat" id="DWMenu\_Insert\_Animals\_Cat" />

</menu-insert>

<menu-insert appendTo="DWMenu\_Insert\_Animals\_Dog">

    <menuitem name="Poodle" id="DWMenu\_Insert\_Animals\_Dog\_Poodle" />

</menu-insert>

**A****TT****R****IBUTES****:** {insertAfter|insertBefore} | {appendTo, prependTo}, [skipSeparator, xml:lang]

**insertBefore|insertAfter**

The unique identifier of an existing item that determines the placement of this new one. Supply one of these, or one of the append/prepend attributes; do not use both placement methods.

Can identify an existing menu, menu bar, menu item, or format. No menu can appear to the right of the Help menu in Dreamweaver. If you insert a new menu after the Help menu, the application displays the new menu to the left of the Help menu.

**appendTo|prependTo**

The unique identifier of an existing menu or menubar that determines the placement of this item. Supply one of these, or one of the insertion attributes; do not use both placement methods.

Can identify an existing menu or menu bar. Cannot be a menu item or format.

**skipSeparator**

Optional. When true, and when the placement is insertAfter, inserts a separator in the parent menu before the new menu or item. Default is false. Ignored for other placement methods.

**xml:lang**

Optional. The language for this configuration value.

**m****e****nu**

Defines a menu or submenu to be inserted into the application's menu structure during installation of this extension.

- Contained in the menu-insert element.
- Does not contain any other elements, but must still be closed with the </menu> tag.

**A****TT****R****IBUTES****:** name, id, [platform]

**name**

Required. The display name of the menu. To set the menu’s access key or mnemonic in Windows, use the underscore character (\_) before the access letter; the underscore is automatically removed in Mac OS.

**id**

Required. A unique identifier for the new menu. Each ID must be unique; it should start with the Dreamweaver menu identifier for the parent menu.

**platform**

Optional. The platform in which this list appears, one of "mac" or "win". If not specified, the menu appears on both platforms.

**E****x****ample**

<menu name = "My \_Menu", id = "DWMenu\_myMenu", platform = "win">

</menu>

#### menubar

Defines a menu bar to be inserted into the application's menu structure during installation of this extension.

- Contained in the menu-insert element.
- Does not contain any other elements, but must still be closed with the </menubar> tag.

**A****TT****R****IBUTES****:** name, id, [platform]

**name**

Required. The display name of the menu. To set the menu’s access key or mnemonic in Windows, use the underscore character (\_) before the access letter; the underscore is automatically removed in Mac OS.

**id**

Required. A unique identifier for the new menu. Each ID must be unique; it should start with the Dreamweaver menu identifier for the parent menu.

**platform**

Optional. The platform in which this list appears, one of "mac" or "win". If not specified, the menu appears on both platforms.

**E****x****ample**

<menubar name = "My Menubar", id = "DWMenu\_myMenubar" >

</menubar>

**menuitem**

Defines a menu item to be inserted into the application's menu structure during installation of this extension.

- u  Contained in a menu-insert element that is *no**t* contained in a server-format-definition-changes element.

**A****TT****R****IBUTES****:** name, id, file|command, [enabled, checked, dynamic, key, platform, arguments, resid:name]

**name**

Required. The display name of the item. To set the menu’s access key or mnemonic in Windows, use the underscore character (\_) before the access letter; the underscore is automatically removed in Mac OS. If two items have the same access key, it only works for the first one.

To make an underscore appear in the item’s name, use percent (%) as an escape character; for example, "My%\_Menu".

**id**

Required. A unique identifier for the new item. Each ID must be unique; it should start with the identifier of the parent menu.

**key**

Optional. A shortcut key for this menu item. See syntax details in Dreamweaver documentation.

**platform**

Optional. The platform in which this item appears, one of "mac" or "win". If not specified, the item appears on both platforms.

**file**

Optional. An HTML or JavaScript file which contains JavaScript code that implements the behavior of the menu item. The path is relative to the Configuration folder. Case sensitive.

When supplied, overrides the command, enabled, and checked attributes. Either file or command must be supplied.

**command**

Optional. JavaScript code that implements the behavior of the menu item. When file is supplied, it overrides the command, enabled, and checked attributes. Either file or command must be supplied.

**enabled**

Optional. JavaScript code that Dreamweaver executes before displaying the menu, to determine whether the menu item is enabled. The code must return a value of true to enable the item, or false to disable and dim it.

**checked**

Optional. JavaScript code that Dreamweaver executes before displaying the menu, to determine whether the menu item is in the selected state (checked). The code must return a value of true to select the item, or false to deselect it.

**dynamic**

Optional. True if the item’s text and state are determined dynamically by the JavaScript in the associated file. Default is false. Ignored if no file is supplied.

**arguments**

Optional. Arguments to pass to the specified command file. Ignored if no file is supplied.

**resid:name**

Optional. A localized-string identifier for the item name to display. Used only when the extension is configured to be multilingual. The identified string must be defined in localization files.

**E****x****ample**

<menuitem name = "My Menu Item", id = "DWMenu\_myMenu\_myMenuItem" key = "Cmd+Alt+Shift+M" platform = "mac" file = "commands/common/myMenuItem.htm" dynamic = "false" />

#### separator

Inserts a separator into a menu at the location determined by the parent insertion element and sibling menu or menu-item elements.

- Contained in the menu-insert element.

**A****TT****RIBUTES****:** id, [platform]

**id**

Required. A unique identifier for the new item. Each ID must be unique; it should start with the Dreamweaver menu identifier for the parent menu.

**platform**

Optional. The platform in which this list appears, one of "mac" or "win". If not specified, the item appears on both platforms.

**comment**

Provides a comment about an item being inserted into the menu structure. Extension Manager inserts the contents as an XML comment element into the affected menus.xml file when it installs this extension.

- Contained in the menu-insert element.

**E****x****ample**

<comment>This command is part of the MyFeature extension.</comment>

# server-behavior-changes

Note:

This is a deprecated feature. Ensure that you install Deprecated\_ServerBehaviorsPanel\_Support.zxp in $Dreamweaverapp\configuration\DisabledFeatures\ folder beforehand.

Container for elements that describe changes to menus in the ServerBehaviors.xml file in any of the Dreamweaver Configuration/ServerFormats/*servermodel* folders.

- Can contain menu-insert elements.
- Contained in the configuration-changes element.

**A****TT****RIBUTES****:** servermodelfolder

**servermodelfolder**

Required. The name of the server-model folder in which the changes are to be made. Case sensitive. Can be the name of any installed server model, such as "ASP.NET\_Csharp", ASP.NET\_VB", "ASP\_Js", "ASP\_Vbs", "ColdFusion", "UD4-ColdFusion", "PHP\_MySQL" or "JSP".

# server-format-changes

Container for elements that describe changes to menus in the ServerFormats.xml file in any of the Dreamweaver Configuration/ServerFormats/*servermodel* folders.

- Can contain menu-insert elements.
- Contained in the configuration-changes element.

**A****TT****R****IBUTES****:** servermodelfolder

**servermodelfolder**

Required. The name of the server-model folder in which the changes are to be made. Case sensitive. Can be the name of any installed server model, such as "ASP.NET\_Csharp", ASP.NET\_VB", "ASP\_Js", "ASP\_Vbs", "ColdFusion", "UD4-ColdFusion", "PHP\_MySQL" or "JSP".

# server-format-definition-changes

Container for elements that describe changes to menus in the Formats.xml file in any of the Dreamweaver Configuration/ServerFormats/*servermodel* folders.

- Can contain menu-insert elements.
- Contained in the configuration-changes element.

**A****TT****R****IBUTES****:** servermodelfolder

**servermodelfolder**

Required. The name of the server-model folder in which the changes are to be made. Case sensitive. Can be the name of any installed server model, such as "ASP.NET\_Csharp", ASP.NET\_VB", "ASP\_Js", "ASP\_Vbs", "ColdFusion", "UD4-ColdFusion", "PHP\_MySQL" or "JSP".

# shortcut-insert

Container for elements that describe additions to the shortcuts in the menus.xml file.

- Must contain either a shortcutlist or a shortcut element.
- Contained in the configuration-changes element.

**A****TT****RIBUTES****:** list\_Id, [xml:lang]

**list\_Id**

The unique identifier of a shortcut list in which to add the contained shortcut element. Required for this case; do not use if this element contains a shortcutlist element.

**xml:lang**

Optional. The language for this configuration value.

#### shortcutlist

A shortcut list to add to the menus.xml file.

- Contained in the shortcut-insert element.

**A****TT****RIBUTES****:** id, [platform]

**id**

Required. The unique identifier of the shortcut list, which matches the Dreamweaver window containing the menubar with which the shortcuts are associated. One of DWMainWindow, DWMainSite, DWTimelineInspector, and DWHTMLInspector.

**platform**

Optional. The platform in which this list appears, one of "mac" or "win". If not specified, the list appears on both platforms.

#### shortcut

A keyboard shortcut to add to the menus.xml file. The JavaScript to execute when the shortcut is activated can be contained directly in the command attribute, or in a specified file. One of these must be supplied; if both are supplied, the file takes precedence.

- Contained in the shortcut-insert element.

**A****TT****RIBUTES****:** key, id, command|file, [platform]

**key**

Required. The key combination used to activate the associated command. Use the syntax specified for keyboard shortcuts in Dreamweaver documentation.

**id**

Required. A unique identifier for the new shortcut. Each ID must be unique; it should start with a company name or other unique namespace prefix. Do not use DW as a prefix; it is reserved by the Dreamweaver. A convention is to use a domain name with the elements reversed; for example, com.adobe.

**command**

Optional; if not supplied, file is required. JavaScript code to execute when the command is activated.

**file**

Optional; if not supplied, command is required. A file containing JavaScript code to execute when the command is activated.

**platform**

Optional. The platform in which this shortcut appears, one of "mac" or "win". If not specified, the shortcut appears on both platforms.

**E****x****ample**

<shortcut key = "Shift+F5" id = "ShortCutTest" command = "dw.newDocument()" />

# toolbar-changes

Container for elements that define changes to entries in toolbar configuration files.

- Contained in the configuration-changes element.
- Can contain any combination of toolbar-insert and toolbar-item-insert elements.

**A****TT****RIBUTES****:** [file]

**file**

Optional. The name of the toolbar configuration file to modify. Default is Toolbars.xml.

**E****x****ample**

<toolbar-changes [file="*file\_name*"]>

    <toolbar-insert>

        <toolbar ...>

        ...    

        </toolbar>

    </toolbar-insert>

    <toolbar-item-insert insertBefore|insertAfter|appendTo|prependTo="*toolbar\_or\_item\_id*" toolbar="*toolbar\_id*">

    <itemtype.../>

    </toolbar-item-insert>

</toolbar-changes>

#### toolbar-insert

Describes a toolbar entry to append to the toolbar configuration file.

- Contained in the toolbar-changes element.
- Must contain one or more toolbar elements.

**A****TT****R****IBUTES****:** [xml:lang]

**xml:lang**

Optional. The language for this configuration value.

#### toolbar

Defines a toolbar. Extension Manager verifies only that the XML structure is valid. For a complete description, see Dreamweaver help: [http://help.adobe.com/en\_US/dreamweaver/cs/extend/index.html](https://help.adobe.com/en_US/dreamweaver/cs/extend/index.html)

#### toolbar-item-insert

Describes an item to be added to a toolbar, at a position relative to an existing item.

- Contained in the toolbar-changes element.
- Must contain one or more itemtype elements.

**A****TT****RIBUTES****:** {insertAfter|insertBefore} | {appendTo, prependTo}, toolbar, [xml:lang]

**insertBefore|insertAfter**

The unique identifier of an existing item that determines the placement of this new one. Supply one of these, or one of the append/prepend attributes; do not use both placement methods.

If this item is not found in any existing toolbar, the new item is appended to the toolbar specified in the toolbar attribute.

**appendTo|prependTo**

The unique identifier of an existing toolbar that determines the placement of this item. Supply one of these, or one of the insertion attributes; do not use both placement methods.

**toolbar**

Required. The unique identifier of the toolbar to append to if the relative-placement item is not found.

**xml:lang**

Optional. The language for this configuration value.

#### itemtype

For a complete description, see Dreamweaver help:

[http://help.adobe.com/en\_US/dreamweaver/cs/extend/index.html](https://help.adobe.com/en_US/dreamweaver/cs/extend/index.html)

# toolpanel-changes

Flash-only. Container for elements that modify the Flash tool panel.

- Contained in the configuration-changes element.
- Must contain one or more toolpanel-item-insert elements.

#### toolpanel-item-insert

Flash only. Inserts a tool into the Flash tool panel.

- Contained in the toolpanel-changes element.

**A****TT****RIBUTES****:** name, [position, depth, xml:lang]

**name**

Required. The name of the tool to insert.

**position**

Optional. The 0-based index of the position at which to insert this tool, in the range [0..17]. If out of range or not supplied, the tool is inserted at the last position.

**depth**

Optional. The 0-based index of the depth in the menu at which to insert this tool. 0 is the top. If not supplied, or if the value is greater than the maximum depth, the tool is placed at the bottom of the menu.

**xml:lang**

Optional. The language for this configuration value.

**E****x****ample**

<toolpanel-changes>

    <toolpanel-item-insert name="polystar" position="7" />

</toolpanel-changes>
