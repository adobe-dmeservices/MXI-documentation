/**
 * MXI product and CEP host reference data.
 * Sources: docs/supported-applications.md, CEP 12 HTML Extension Cookbook.
 */
export const PRODUCTS = [
  {
    label: "Photoshop",
    familyname: "Photoshop",
    names: ["Photoshop", "Photoshop32", "Photoshop64"],
    cepHosts: ["PHSP", "PHXS"],
    defaultVersion: "21",
    pathToken: "$photoshop",
  },
  {
    label: "Illustrator",
    familyname: "Illustrator",
    names: ["Illustrator", "Illustrator32", "Illustrator64"],
    cepHosts: ["ILST"],
    defaultVersion: "24",
    pathToken: "$illustrator",
  },
  {
    label: "InDesign",
    familyname: "InDesign",
    names: ["InDesign", "InDesign32", "InDesign64"],
    cepHosts: ["IDSN"],
    defaultVersion: "17",
    pathToken: "$indesign",
  },
  {
    label: "InCopy",
    familyname: "InCopy",
    names: ["InCopy", "InCopy32", "InCopy64"],
    cepHosts: ["AICY"],
    defaultVersion: "17",
    pathToken: "$incopy",
  },
  {
    label: "Premiere Pro",
    familyname: null,
    names: ["Premiere"],
    cepHosts: ["PPRO"],
    defaultVersion: "14",
    pathToken: "$premiere",
  },
  {
    label: "Prelude",
    familyname: null,
    names: ["Prelude"],
    cepHosts: ["PRLD"],
    defaultVersion: "9",
    pathToken: "$prelude",
  },
  {
    label: "Dreamweaver",
    familyname: null,
    names: ["Dreamweaver"],
    cepHosts: ["DRWV"],
    defaultVersion: "20",
    pathToken: "$dreamweaver",
  },
  {
    label: "Flash / Animate",
    familyname: null,
    names: ["Flash"],
    cepHosts: ["FLPR"],
    defaultVersion: "20",
    pathToken: "$flash",
  },
  {
    label: "Lightroom Classic",
    familyname: null,
    names: ["LightroomClassic"],
    cepHosts: ["LTRM"],
    defaultVersion: "11",
    pathToken: "$lightroom",
  },
];

export const CEP_ONLY_HOSTS = [
  { label: "After Effects", hostId: "AEFT", defaultVersion: "17" },
  { label: "Audition", hostId: "AUDT", defaultVersion: "13" },
  { label: "Bridge", hostId: "KBRG", defaultVersion: "10" },
  { label: "Rush", hostId: "RUSH", defaultVersion: "1.2" },
];

export const FILE_TYPES = [
  { value: "csxs", label: "csxs — CEP/ZXP extension package" },
  { value: "plugin", label: "plugin — Native plug-in" },
  { value: "ordinary", label: "ordinary — No special processing" },
];

export const PLATFORMS = [
  { value: "", label: "All platforms" },
  { value: "mac", label: "mac" },
  { value: "win", label: "win" },
];

export const COMMON_DESTINATIONS = [
  "$ExtensionSpecificEMStore",
  "$adobecommon",
  "$userroamingfolder",
  "$pluginsfolder",
  "$indesign/Plug-Ins",
  "$photoshop/Plug-ins",
  "$illustrator/Plug-ins",
  "$userroamingfolder/Adobe/UXP/Plugins/External/",
];

export const STEPS = [
  { id: "basics", title: "Extension info", hint: "Identity and packaging metadata" },
  { id: "products", title: "Products", hint: "Target Adobe applications" },
  { id: "content", title: "Description", hint: "Description and license text" },
  { id: "files", title: "Files", hint: "Files to install" },
  { id: "advanced", title: "Advanced", hint: "Optional elements" },
  { id: "review", title: "Review", hint: "Preview and download" },
];

export function defaultState() {
  return {
    id: "com.example.my-extension",
    name: "My Extension",
    version: "1.0.0",
    author: "Your Name",
    forceQuit: false,
    requiresRestart: false,
    isMultilingual: false,
    icon: "",
    products: [
      {
        mode: "familyname",
        familyname: "Photoshop",
        name: "Photoshop",
        version: "21",
        maxversion: "26.99",
        required: false,
        platform: "",
        bit: "",
      },
    ],
    description: "A short description of what this extension does.",
    useCdata: true,
    license: "Copyright 2024 Example Corp. All rights reserved.",
    uiAccess: "",
    files: [
      {
        source: "my-extension.zxp",
        destination: "",
        products: "",
        platform: "",
        fileType: "csxs",
        minVersion: "",
        maxVersion: "",
      },
    ],
    dependencies: [],
    updateUrl: "",
  };
}
