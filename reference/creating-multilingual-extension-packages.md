# Create multilingual extension packages (version 2.1 and later)

> **Source:** Archived from [Adobe HelpX](https://helpx.adobe.com/extension-manager/kb/creating-multilingual-extension-packages.html)

Extension Manager (version 2.1 or later) supports multilingual extension packages, which let you combine extensions for multiple locales in one ZXP file. During installation, the appropriate language is determined by Extension Manager to launch the right locale. Language-specific files and text strings are then identified using attributes you’ve included in the MXI file.

By default, Extension Manager locale is same as those of your Operating System. If you want to launch Extension Manager CC with other locales, run the following command in Windows Command Line or Mac Terminal:

***(Windows)*** `$installPath\Adobe Extension Manager CC\Adobe Extension Manager CC.exe <$locale>`

***(Mac OS)*** `$InstallPath/Adobe\ Extension\ Manager\ CC/Adobe\ Extension\ Manager\ CC.app/Contents/MacOS/Adobe\ Extension\ Manager\ CC <$locale>`

Where, <$locale> is locale ID such as en\_US or de\_DE.

# Enable multilingual support in an MXI file

To enable multilingual support in an MXI file, reset the attribute `ismultilingual="true"` to load strings from external files. If you want to localize the name of the extension, you can specify a `name_resid` attribute in the `<macromedia-extension>`tag. If no corresponding language tag is found for the id - `name_ID`, Extension Manager falls back to the name in the name attribute.

``` xml
<macromedia-extension
  name="Extension Name"
  name_resid="name_ID"
  version="1.0.0"
  ismultilingual="true" >
<author name="FooBar" author_resid="author_ID"/>
<description resid="description_ID">
  <![CDATA[ Inline Description ]]>
</description>
```

# Set up the folder hierarchy for localized XML files

Create a folder with the exact name of your `.mxi` file at the same location as your `.mxi` file, and append `_Resources` to it. For example, if you have an `.mxi` file named `Calendar.mxi`, create a folder named `Calendar.mxi_Resources`. In this folder, add an XML file for each language you are localizing the extension into.

Each file should have a two-letter ISO language code followed with an underscore character, and then the two-letter ISO country code in uppercase. For example, for English you specify "en\_US.xml" and for French "fr\_FR.xml".

The folder hierarchy should look as follows:

`Calendar.mxi - MXI File`

`Calendar.mxi_Resources (folder)`

> `en_US.xml - XML File containing English strings`

> `fr_FR.xml - XML File containing French Strings`

# Format XML for language-specific strings

The Extension Manager looks up localized strings from XML files that you provide for each language. Each XML file should use Adobe's zstring format. Below is an example of the French xml file. The locale (in this case, "fr\_FR") should match the locale of the language. Extension Manager looks up the localized strings based on the name=""attribute and substitutes the localized strings in the <val>tags. In the following example, we use name\_ID for the localized Extension Name, "French Extension Name". And description\_ID are used for the Description displayed when you click the Extension in the Extension Manager.

``` xml
<?xml version="1.0" encoding="utf-8" stand-alone="no" ?>

<!DOCTYPE asf SYSTEM "//ns.adobe.com/asf/asf_1_0.dtd">

<asf locale="fr_FR" version="1.0" xmlns="//ns.adobe.com/asf">
  <set name="DefaultSet">
    <str name="name_ID">
      <val>French Extension Name</val>
    </str>
    <str name="description_ID">
      <val>French Extension Description</val>
    </str>
  </set>
</asf>
```

# Copy Resources folder

To enable multilingual support in an MXI file, reset the attribute `isresourcefile="true"` in file element to copy resource folder. For example,

``` xml
<files>
  <file source="Newsource.mxi_Resources" destination="$resourceroot" isresourcefile="true" />
<files>
```