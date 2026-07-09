# Path tokens

> **Source:** Archived from [Adobe HelpX](https://helpx.adobe.com/extension-manager/kb/path-tokens-extension-manager.html)

When specifying locations, you can use path tokens. Different tokens are defined in different application environments. The following tables show the tokens and the locations that they resolve to in a default installation in Mac OS and Windows 7 (64 bit).

# Shared tokens

|  |  |  |
| --- | --- | --- |
| **Token** | **Path in Mac OS** | **Path in Windows 7 or Windows 8 (64 bit)** |
| $system | /System | - ***(64-bit)*** C:\Windows\SysWOW64 - ***(32-bit)*** C:\Windows\System32 |
| $system64 | N/A | ***(32-bit)*** C:\Windows\system32 |
| $fonts | /Library/Fonts | C:\Windows\Fonts |
| $userhomefolder | /Users/<UserName> | C:\Users\<UserName> |
| $userdatafolder | /Users/<UserName>/Library/ Application Support | C:\Users\<UserName>\AppData\Roaming |
| $shareddatafolder | /Library/Application Support | C:\ProgramData |
| $sharedribsdatafolder | /Library/Application Support | C:\ProgramData |
| $userlibraryfolder | /Users/<UserName>/Library | C:\Users\<UserName>\AppData\Roaming |
| $userroamingfolder | /Users/<UserName>/Library/Application Support | C:\Users\<UserName>\AppData\Roaming |
| $sharedcommondatafolder | /Library/Application Support | C:\ProgramData |
| $applicationsupport | /Library/Application Support | - ***(64-bit)*** C:\Program Files - ***(32-bit)*** C:\Program Files (x86) |
| $adobecommon | /Library/Application Support/Adobe | C:\Program Files (x86)\Common Files\Adobe |
| $resourceroot | /Library/Application Support/ Adobe/Extension Manager CC | C:\ProgramData\Adobe\Extension Manager CC |
| $startupscripts | /Library/Application Support/ Adobe/Startup Scripts CC | - ***(64-bit)*** C:\Program Files (x86)\Common    Files\Adobe\Startup Scripts CC - ***(32-bit)*** C:\Program Files\Common    Files\Adobe\Startup Scripts CC |
| $mediacoreplug-ins | /Library/Application Support/Adobe/Common/Plug-ins/7.0/ MediaCore | ***(32-bit)*** C:\Program  Files\Adobe\Common\ Plugins\  7.0\MediaCore  N/A for 64-bit |
| $userdocumentfolder | /Users/<User Name>/Documents | C:\Users\<User Name>\Documents |
| $userdesktopfolder | /Users/<User Name>/Desktop | C:\Users\<User Name>\Desktop |
| $usersharedfolder | /Users/Shared | C:\Users\Public |
| $installfolder - The folder where a specific product is installed. These examples show default installation locations; a product can be installed elsewhere. | /Applications/<ProductName> | ***(32-bit)*** C:\Program Files\Adobe\<ProductName>  ***(64-bit)***C:\Program Files\Adobe\<ProductName> |
| $ExtensionSpecificEMStore - Used for restore resource file, application-dependent |  |  |
| $locale - The installed language of application, application dependent |  |  |

# Adobe Dreamweaver CC 2014 and Dreamweaver CC tokens

These additional tokens are defined when this product is installed.

|  |  |  |
| --- | --- | --- |
| Dreamweaver token | Path in Mac OS | Path in Windows 7 or Windows 8 (64 bit) |
| $dreamweaver - The folder where the product is installed. These examples show default installation locations; the product can be installed elsewhere. | - /Applications/Adobe Dreamweaver CC 2014 - /Applications/Adobe Dreamweaver CC | - C:\Program Files (x86)\ Adobe\AdobeDreamweaver CC 2014 - C:\Program Files\Adobe\Adobe Dreamweaver CC |
| $dreamweaver/Configuration | - /Users/***<user\_name>***/Library/ApplicationSupport/Adobe/ DreamweaverCC 2014/$LOCALE/ Configuration - /Users/***<user\_name>***/Library/Application Support/Adobe/ Dreamweaver CC/$LOCALE/ Configuration | - C:\Users\<user\_name>\AppData\Roaming\Adobe\DreamweaverCC 2014\$LOCALE\Configuration - C:\Users\<UserName>\AppData\ Roaming\Adobe\Dreamweaver CC\$LOCALE\Configuration |
| $sharedextensionfolder | - /Library/Application Support/Adobe/Dreamweaver CC 2014/$LOCALE/Configuration/Extensions (for CC 2014) - /Library/Application Support/    Adobe/Dreamweaver CC/$LOCALE/    Configuration/Extensions | - C:\ProgramData\Adobe\DreamweaverCC 2014\$LOCALE\Configuration\Extensions - C:\ProgramData\Adobe\Dreamweaver    CC\$LOCALE\Configuration\    Extensions |
| $UserBinfolder | - ***(For Dreamweaver CC 2014)*** /Users/***<user\_name>***/Library/Application Support/Adobe/Dreamweaver CC 2014/$LOCALE - /Users/***<user\_name>***/Library/    Application Support/Adobe/    Dreamweaver CC/$LOCALE | - ***(For Dreamweaver CC 2014)*** C:\Users\***<user\_name>***\AppData\Roaming\Adobe\Dreamweaver CC 2014\$LOCALE - C:\Users\***<user\_name>***\AppData\    Roaming\Adobe\Dreamweaver CC\    $LOCALE |

# Adobe Flash Professional CC 2014 and Flash Professional CC tokens

|  |  |  |
| --- | --- | --- |
| Flash token | Path in Mac OS | Path in Windows 7 or Windows 8 (64 bit) |
|  |  |  |
| $RootFolder - The folder where the product is installed. These examples show default installation locations; the product can be installed elsewhere. | - /Applications/Adobe Flash CC 2014 - /Applications/Adobe Flash CC | - C:\Program Files(x86)\Adobe\Adobe Flash CC 2014 - C:\Program Files\Adobe\Adobe Flash CC |
| $RootFolderLocal | <product\_root>/$locale | <product\_root>\$LOCALE |
| $flash | - ***(For Flash Professional CC 2014)*** /Users/***<user\_name>***/Library/Application Support/Adobe/FlashCC 2014/$LOCALE/Configuration - /Users/***<user\_name>***/Library/Applicati on Support/Adobe/Flash CC/$LOCALE/Configuration | - ***(For Flash Professional CC 2014)*** C:\Users\***<user\_name>***\AppData\Local\Adobe\Flash CC 2014\$LOCALE\Configuration - C:\Users\***<user\_name>***\AppData\Local\ Adobe\Flash CC\$LOCALE\ Configuration |

# Adobe Illustrator CC 2014 and Illustrator CC tokens

|  |  |  |
| --- | --- | --- |
| Illustrator token | Path in Mac OS | Path in Windows 7 or Windows 8 (64-bit) |
| $illustrator - The folder where the product is installed. These examples show default installation locations; the product can be installed elsewhere. | - /Applications/Adobe Illustrator CC 2014 - /Applications/Adobe Illustrator CC | - C:\Program Files(x86)\Adobe\AdobeIllustrator CC 2014 - C:\Program Files\Adobe\Adobe Illustrator CC |
| $plugin | <product\_root>/Plug-ins.localized | <product\_root>\Plug-ins |
| $presets | <product\_root>/Presets.localized | <product\_root>\Presets |
| $scripting | <product\_root>/Scripting.localized | <product\_root>\Scripting |
| $localizedpresets | <product\_root>/Presets.localized/$locale | <product\_root>\Presets\$locale |
| $localizedUserPresets | - /Users/***<user\_name>***/Library/ApplicationSupport/Adobe/Adobe Illustrator 18Settings/$locale - /Users/***<user\_name>***/Library/Application Support/Adobe/Adobe Illustrator 17 Settings/$locale | - C:\Users\***<user\_name>***\AppData\Roaming\Adobe\AdobeIllustrator 18 Settings\$locale - C:\Users\***<user\_name>***\AppData\Roaming\Adobe\Adobe Illustrator 17 Settings\$locale |

# Adobe InDesign CC 2014 and InDesign CC tokens

|  |  |  |
| --- | --- | --- |
| InDesign token | Path in Mac OS | Path in Windows 7 or Windows 8 (64 bit) |
| $indesign - The folder where the product is installed. These examples show default installation locations; the product can be installed elsewhere. | - /Applications/Adobe InDesign CC 2014 - /Applications/Adobe InDesign CC | - C:\Users\\AppData\Roaming\Adobe\Adobe InDesign CC 2014 - C:\Program Files\Adobe\Adobe InDesign CC |
| $indesign\_user | - ***(For InDesign CC 2014)*** /Users/***<user\_name>***/Library/ApplicationSupport/Adobe/AdobeInDesign CC 2014 - /Users/<UserName>/Library/ApplicationSupport/Adobe/Adobe InDesign CC | - ***(For InDesign CC 2014)*** C:\Users\***<user\_name>***\AppData\Roaming\Adobe\Adobe InDesign CC 2014 - C:\Users\<UserName>\AppData\Roaming\ Adobe\Adobe InDesign CC |

# Adobe InCopy CC 2014 and InCopy CC tokens

|  |  |  |
| --- | --- | --- |
| InCopy token | Path in Mac OS | Path in Windows 7 or Windows 8 (64 bit) |
| $incopy The folder where the product is installed. These examples show default installation locations; the product can be installed elsewhere. | - /Applications/AdobeInCopy CC 2014 - /Applications/Adobe InCopy CC | - C:\Program Files (x86)\Adobe\Adobe InCopy CC 2014 - C:\Program Files\Adobe\Adobe InCopy CC |
| $incopy\_user | - ***(For InCopy CC 2014)*** /Users/***<user\_name>***/Library/ApplicationSupport/Adobe/AdobeInCopy CC 2014 - /Users/***<user\_name>***/Library/Application Support/Adobe/Adobe InCopy CC | - ***(For InCopy CC 2014)*** C:\Users\***<user\_name>***\AppData\Roaming\Adobe\AdobeInCopy CC 2014 - C:\Users\<UserName>\AppData\Roaming\Adobe\Adobe InCopy CC |

# Adobe PhotoShop CC 2014 and PhotoShop CC tokens

|  |  |  |
| --- | --- | --- |
| Photoshop token | Path in Mac OS | Path in Windows 7 or Windows 8 (64 bit) |
| $photoshopappfolder -The folder where the product is installed. These examples show default installation locations; the product can be installed elsewhere. | - ***(For PhotoShop CC 2014)*** /Applications/Adobe Photoshop CC 2014 - /Applications/Adobe Photoshop CC | - ***(For PhotoShop CC 2014)*** C:\Program Files(x86)\Adobe\Adobe Photoshop CC 2014 - C:\Program Files\Adobe\ Adobe Photoshop CC |
| $imagestacks | <product\_root>/Plug-Ins/Image Stacks | <product\_root>\Plug-Ins\Image Stacks |
| $3dengines | <product\_root>/Plug-Ins/ 3D Engines | <product\_root>\Plug-Ins\3D Engines |
| $actions | <product\_root>/Presets/Actions | <product\_root>\Presets\Actions |
| $additionalplugins | <product\_root>/Locales/$LOCALE/Additional Plug-ins | <product\_root>\Locales\$LOCALE\ Additional Plug-ins |
| $additionalpresets | <product\_root>/Locales/$LOCALE/Additional Presets | <product\_root>\Locales\$LOCALE\ Additional Presets |
| $automate | <product\_root>/Plug-Ins/ Automate | <product\_root>\Plug-Ins\Automate |
| $blackandwhite | <product\_root>/Presets/Black and White | <product\_root>\Presets\Black and White |
| $brushes | <product\_root>/Presets/Brushes | <product\_root>\Presets\Brushes |
| $channelmixer | <product\_root>/Presets/Channel Mixer | <product\_root>Presets\Channel Mixer |
| $colorbooks | <product\_root>/Presets/ Color Books | <product\_root>\Presets\Color Books |
| $colorrange | <product\_root>/Presets/ Color Range | <product\_root>\Presets\Color Range |
| $colorswatches | <product\_root>/Presets/Color Swatches | <product\_root>\Presets\Color Swatches |
| $contours | <product\_root>/Presets/Contours | <product\_root>\Presets\Contours |
| $curves | <product\_root>/Presets/Curves | <product\_root>\Presets\Curves |
| $customshapes | <product\_root>/Presets/Custom Shapes | <product\_root>\Presets\Custom Shapes |
| $digimarc | <product\_root>/Plug-Ins/ Digimarc | <product\_root>\Plug-Ins\Digimarc |
| $displacementmaps | <product\_root>/Plug-Ins/Displacement Maps | <product\_root>\Plug-Ins\Displacement Maps |
| $duotones | <product\_root>/Presets/Duotones | <product\_root>\Presets\Duotones |
| $effects | <product\_root>/Plug-Ins/Effects | <product\_root>\Plug-Ins\Effects |
| $exposure | <product\_root>/Presets/Exposure | <product\_root>\Presets\Exposure |
| $extensions | <product\_root>/Plug-Ins/ Extensions | <product\_root>\Plug-Ins\Extensions |
| $fileformats | <product\_root>/Plug-Ins/ File Formats | <product\_root>\Plug-Ins\File Formats |
| $filters | <product\_root>/Plug-Ins/Filters | <product\_root>\Plug-Ins\Filters |
| $gradients | <product\_root>/Presets/ Gradients | <product\_root>\Presets\Gradients |
| $hueandsaturation | <product\_root>/Presets/ Hue and Saturation | <product\_root>\Presets\Hue and Saturation |
| $huesat | <product\_root>/Presets/Hue Sat | <product\_root>\Presets\Hue Sat |
| $imagestacks | <product\_root>/Plug-Ins/ Image Stacks | <product\_root>\Plug-Ins\Image Stacks |
| $imagestatistics | <product\_root>/Presets/ Image Statistics | <product\_root>\Presets\Image Statistics |
| $importexport | <product\_root>/Plug-Ins/ Import-Export | <product\_root>\Plug-Ins\Import-Export |
| $keyboardshortcuts | <product\_root>/Presets/ Keyboard Shortcuts | <product\_root>\Presets\Keyboard Shortcuts |
| $layouts | <product\_root>/Presets/Layouts | <product\_root>\Presets\Layouts |
| $lenscorrection | <product\_root>/Presets/ Lens Correction | <product\_root>\Presets\Lens Correction |
| $levels | <product\_root>/Presets/Levels | <product\_root>\Presets\Levels |
| $lightingstyles | <product\_root>/Plug-Ins/Filters/ Lighting Styles | <product\_root>\Plug-Ins\Filters\ Lighting Styles |
| $lights | <product\_root>/Presets/Lights | <product\_root>\Presets\Lights |
| $liquifymeshes | <product\_root>/Presets/ Liquify Meshes | <product\_root>\Presets\Liquify Meshes |
| $localesfolder | <product\_root>/Locales | <product\_root>\Locales |
| $localeskeyboard shortcuts | <product\_root>/Locales/$LOCALE/ Additional Presets/$platform/ Keyboard Shortcuts | <product\_root>\Locales\$LOCALE\ Additional Presets\$platform\ Keyboard Shortcuts |
| $localesmenucustom ization | <product\_root>/Locales/$LOCALE/ Additional Presets/$platform/ Menu Customization | <product\_root>\Locales\$LOCALE\ Additional Presets\$platform\ Menu Customization |
| $localesworkspaces | <product\_root>/Locales/$LOCALE/ Additional Presets/$platform/ Workspaces | <product\_root>\Locales\$LOCALE\ Additional Presets\$platform\Workspaces |
| $materials | <product\_root>/Presets/Materials | <product\_root>\Presets\Materials |
| $matlab | <product\_root>/MATLAB | <product\_root>\MATLAB |
| $measurements | <product\_root>/Plug-Ins/ Measurements | <product\_root>\Plug-Ins\Measurements |
| $menucustomization | <product\_root>/Presets/ Menu Customization | <product\_root>\Presets\Menu Customization |
| $meshes | <product\_root>/Presets/Meshes | <product\_root>\Presets\Meshes |
| $optimizedcolors | <product\_root>/Presets/ Optimized Colors | <product\_root>\Presets\Optimized Colors |
| $optimizedoutput Settings | <product\_root>/Presets/ Optimized Output Settings | <product\_root>\Presets\ Optimized Output Settings |
| $optimizedsettings | <product\_root>/Presets/ Optimized Settings | <product\_root>\Presets\Optimized Settings |
| $panels | <product\_root>/Plug-Ins/Panels | <product\_root>\Plug-Ins\Panels |
| $parser | <product\_root>/Plug-Ins/Parser | <product\_root>\Plug-Ins\Parser |
| $patterns | <product\_root>/Presets/Patterns | <product\_root>\Presets\Patterns |
| $photoshop | - ***(For PhotoShop CC 2014)*** /Users/***<user\_name>***/Library/ ApplicationSupport/Adobe/Adobe PhotoshopCC 2014/Configuration - /Users/***<user\_name>***/Library/ Application Support/Adobe/Adobe Photoshop CC/Configuration | - ***(For PhotoShop CC 2014)*** C:\Users\***<user\_name>***\AppData\Roaming\Adobe\Adobe PhotoshopCC 2014\ Configuration - C:\Users\***<user\_name>***\AppData\ Roaming\Adobe\Adobe Photoshop CC\ Configuration |
| $platform | Mac | Win |
| $pluginsfolder | <product\_root>/Plug-Ins | <product\_root>\Plug-Ins |
| $presetsfolder | <product\_root>/Presets | <product\_root>\Presets |
| $reducenoise | <product\_root>/Presets/ Reduce Noise | <product\_root>\Presets\Reduce Noise |
| $rendersettings | <product\_root>/Presets/ Render Settings | <product\_root>\Presets\Render Settings |
| $replacecolor | <product\_root>/Presets/ Replace Color | <product\_root>\Presets\Replace Color |
| $scripts | <product\_root>/Presets/Scripts | <product\_root>\Presets\Scripts |
| $selectivecolor | <product\_root>/Presets/ Selective Color | <product\_root>\Presets\Selective Color |
| $shadowhighlight | <product\_root>/Presets/ Shadow Highlight | <product\_root>\Presets\Shadow Highlight |
| $smartsharpen | <product\_root>/Presets/ Smart Sharpen | <product\_root>\Presets\Smart Sharpen |
| $styles | <product\_root>/Presets/Styles | <product\_root>\Presets\Styles |
| $textures | <product\_root>/Presets/Textures | <product\_root>\Presets\Textures |
| $tools | <product\_root>/Presets/Tools | <product\_root>\Presets\Tools |
| $variations | <product\_root>/Presets/ Variations | <product\_root>\Presets\Variations |
| $volumes | <product\_root>/Presets/Volumes | <product\_root>\Presets\Volumes |
| $webphotogallery | <product\_root>/Presets/Web Photo Gallery | <product\_root>\Presets\Web Photo Gallery |
| $widgets | <product\_root>/Presets/Widgets | <product\_root>\Presets\Widgets |
| $workspaces | <product\_root>/Presets/ Workspaces | <product\_root>\Presets\Workspaces |
| $zoomify | <product\_root>/Presets/Zoomify | <product\_root>\Preset\Zoomify |

# LightroomClassic CC tokens

|  |  |  |
| --- | --- | --- |
| Lightroom Classic token | Path in Mac OS | Path in Windows 7 or Windows 8 (64 bit) |
| $installfolder | /Applications/Adobe\ Lightroom\ Classic | "C:\Program Files\Adobe\Adobe Lightroom Classic" |
| $camerarawsettings | $userDataFolder/Adobe/CameraRaw/Settings | $userDataFolder/Adobe/CameraRaw/Settings |
| $lightroomuserdata | $userDataFolder/Adobe/Lightroom | $userDataFolder/Adobe/Lightroom |
| $developpresets | $lightroomuserdata/Develop\ Presets | $lightroomuserdata/Develop\ Presets |
| $preferences |  | $lightroomuserdata/Preferences (Win only) |
| $importpresets | $lightroomuserdata/Import\ Presets | $lightroomuserdata/Import\ Presets |
| $modules | $lightroomuserdata/Modules | $lightroomuserdata/Modules |
| $autolayoutpresets | $lightroomuserdata/Auto\ Layout\ Presets | $lightroomuserdata/Auto\ Layout\ Presets |
| $colorprofiles | $lightroomuserdata/Color\ Profiles | $lightroomuserdata/Color\ Profiles |
| $exportactions | $lightroomuserdata/Export\ Actions | $lightroomuserdata/Export\ Actions |
| $exportpresets | $lightroomuserdata/Export\ Presets | $lightroomuserdata/Export\ Presets |
| $externaleditorpresets | $lightroomuserdata/External\ Editor\ Presets | $lightroomuserdata/External\ Editor\ Presets |
| $filenametemplates | $lightroomuserdata/Filename\ Templates | $lightroomuserdata/Filename\ Templates |
| $filterpresets | $lightroomuserdata/Filter\ Presets | $lightroomuserdata/Filter\ Presets |
| $ftppresets | $lightroomuserdata/FTP\ Presets | $lightroomuserdata/FTP\ Presets |
| $keywordsets | $lightroomuserdata/Keyword\ Sets | $lightroomuserdata/Keyword\ Sets |
| $labelsets | $lightroomuserdata/Label\ Sets | $lightroomuserdata/Label\ Sets |
| $layouttemplates | $lightroomuserdata/Layout\ Templates | $lightroomuserdata/Layout\ Templates |
| $localadjustmentpresets | $lightroomuserdata/Local\ Adjustment\ Presets | $lightroomuserdata/Local\ Adjustment\ Presets |
| $locations | $lightroomuserdata/Locations | $lightroomuserdata/Locations |
| $metadata | $lightroomuserdata/Metadata | $lightroomuserdata/Metadata |
| $metadatapresets | $lightroomuserdata/Metadata\ Presets | $lightroomuserdata/Metadata\ Presets |
| $modules | $lightroomuserdata/Modules | $lightroomuserdata/Modules |
| $printtemplates | $lightroomuserdata/Print\ Templates | $lightroomuserdata/Print\ Templates |
| $slideshowtemplates | $lightroomuserdata/Slideshow\ Templates | $lightroomuserdata/Slideshow\ Templates |
| $smartcollectiontemplates | $lightroomuserdata/Smart\ Collection\ Templates | $lightroomuserdata/Smart\ Collection\ Templates |
| $textstylepresets | $lightroomuserdata/Text\ Style\ Presets | $lightroomuserdata/Text\ Style\ Presets |
| $texttemplates | $lightroomuserdata/Text\ Templates | $lightroomuserdata/Text\ Templates |
| $watermarks | $lightroomuserdata/Watermarks | $lightroomuserdata/Watermarks |
| $webgalleries | $lightroomuserdata/Web\ Galleries | $lightroomuserdata/Web\ Galleries |
| $webtemplates | $lightroomuserdata/Web\ Templates | $lightroomuserdata/Web\ Templates |
