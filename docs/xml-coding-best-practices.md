# XML coding best practices

> **Source:** Archived from [Adobe HelpX](https://helpx.adobe.com/extension-manager/kb/xml-coding.html)

XML files have strict syntax requirements. When you create or edit an extension installation file, make sure that you use correct XML syntax.

- Enclose every attribute value in a single pair of double quotation marks. For example, version = "1.0.0".
- A tag with no contents must end with />. Do not include any spaces between the slash and the closing angle bracket.
- Precede each attribute name by a space (or other form of white space). If you use more than one attribute in a tag, put a space between each attribute’s value and the next attribute’s name.
- XML uses the ampersand (&) as an escape character. To include an ampersand within a tag, use the code &amp;. Similarly, use &lt; and &gt; for < the > characters.
- It is recommended that you encode MXI with UTF-8 and explicitly declare the encoding.
  - In both Mac OS and Windows, include the UTF-8 encoding declaration at the head of the MXI file: <?xml version="1.0" encoding="UTF-8"?>
  - In Windows, also include the BOM at the head of the MXI file. The easiest way is to open the MXI file with Notepad and select File > Save As, then set Encoding as UTF-8.
