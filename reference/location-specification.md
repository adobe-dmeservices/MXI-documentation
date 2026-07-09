# Location specification

> **Source:** Archived from [Adobe HelpX](https://helpx.adobe.com/extension-manager/kb/location-specification.html)

# Location specification

All file names and location specifications must conform to the following standards.

- All file and folder names must be valid for all supported platforms.
- You can use slash (/) as a separator between path elements.
- Because some operating systems are case sensitive, make sure the capitalization you use in configuration attributes exactly matches the file-system names.
- File names can have a maximum of 30 characters.
- Avoid replacing files of existing extensions by making the full path of the extension unique.

# Path tokens

When specifying paths, you can use path tokens such as the following globally available ones:

|  |  |
| --- | --- |
| `$System` | System folder |
| `$System64` | System folder for 64-bit operating system (Windows only) |
| `$Fonts` | Font folder on the computer’s hard disk |
| `$ExtensionSpecificEMStore` | Folder that stores extension-specific files |

Extension Manager chooses the appropriate system and font folder on the user’s disk, based on the user’s platform and operating system.

- On 32-bit Windows operating system, token `$System` and `$System64` typically both stand for “C:\Windows\system32\”.
- On 64-bit Windows operating system, token `$System` stands for “C:\Windows\SysWOW64\” while token `$System64` stands for “C:\Windows\system32\”. Token $System64 isn't effective on 64-bit Windows in current Extension Manager CC. It is reserved.
- On Mac platform, token `$System` stands for “/System”.

Many other application-specific path tokens are available as well, that allow you to specify locations relative to the target product’s installation location, script or plug-in locations, and so on. For a detailed list of defined tokens, see [Appendix A: Path Tokens].
