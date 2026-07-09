import { PRODUCTS, defaultState } from "./products.js";

function childElement(parent, tagName) {
  return [...parent.children].find((el) => el.localName === tagName) || null;
}

function textContent(el, tagName) {
  const node = childElement(el, tagName);
  if (!node) return { text: "", useCdata: false };

  for (const child of node.childNodes) {
    if (child.nodeType === Node.CDATA_SECTION_NODE) {
      return { text: child.data.trim(), useCdata: true };
    }
  }

  return { text: node.textContent.trim(), useCdata: false };
}

function boolAttr(el, name) {
  return el.getAttribute(name) === "true";
}

function findProductMeta(familyname, name) {
  return PRODUCTS.find(
    (p) =>
      (familyname && p.familyname === familyname) ||
      (name && p.names.includes(name)) ||
      (familyname && p.names.includes(familyname))
  );
}

function parseProduct(el) {
  const familyname = el.getAttribute("familyname") || "";
  const name = el.getAttribute("name") || "";
  const mode = familyname && !name ? "familyname" : familyname ? "familyname" : "name";
  const meta = findProductMeta(familyname, name);

  return {
    mode: meta?.familyname && familyname ? "familyname" : mode,
    familyname: familyname || meta?.familyname || "",
    name: name || familyname || meta?.names[0] || "",
    version: el.getAttribute("version") || "",
    maxversion: el.getAttribute("maxversion") || "",
    required: el.getAttribute("required") === "true",
    platform: el.getAttribute("platform") || "",
    bit: el.getAttribute("bit") || "",
  };
}

function parseFile(el) {
  return {
    source: el.getAttribute("source") || "",
    destination: el.getAttribute("destination") || "",
    products: el.getAttribute("products") || "",
    platform: el.getAttribute("platform") || "",
    fileType: el.getAttribute("file-type") || "ordinary",
    minVersion: el.getAttribute("minVersion") || "",
    maxVersion: el.getAttribute("maxVersion") || "",
  };
}

export function parseMxi(xmlText) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, "application/xml");
  const parseError = doc.querySelector("parsererror");
  if (parseError) {
    throw new Error("Invalid XML: could not parse the MXI file.");
  }

  const root =
    doc.querySelector("macromedia-extension") ||
    doc.documentElement?.localName === "macromedia-extension"
      ? doc.documentElement
      : null;

  if (!root) {
    throw new Error("No <macromedia-extension> root element found.");
  }

  const authorEl = childElement(root, "author");
  const description = textContent(root, "description");
  const license = textContent(root, "license-agreement");
  const uiAccess = textContent(root, "ui-access");

  const productsEl = childElement(root, "products");
  const products = productsEl
    ? [...productsEl.children].filter((el) => el.localName === "product").map(parseProduct)
    : [];

  const filesEl = childElement(root, "files");
  const files = filesEl
    ? [...filesEl.children].filter((el) => el.localName === "file").map(parseFile)
    : [];

  const dependencyEl = childElement(root, "dependency");
  const dependencies = dependencyEl
    ? [...dependencyEl.children]
        .filter((el) => el.localName === "extension")
        .map((el) => ({ name: el.getAttribute("name") || "" }))
    : [];

  const updateEl = childElement(root, "update");

  const parsed = {
    ...defaultState(),
    id: root.getAttribute("id") || "",
    name: root.getAttribute("name") || "",
    version: root.getAttribute("version") || "",
    author: authorEl?.getAttribute("name") || "",
    icon: root.getAttribute("icon") || "",
    forceQuit: boolAttr(root, "force-quit"),
    requiresRestart: boolAttr(root, "requires-restart"),
    isMultilingual: boolAttr(root, "ismultilingual"),
    description: description.text,
    useCdata: description.useCdata || description.text.includes("<"),
    license: license.text,
    uiAccess: uiAccess.text,
    products: products.length ? products : defaultState().products,
    files: files.length ? files : defaultState().files,
    dependencies,
    updateUrl: updateEl?.getAttribute("url") || "",
  };

  if (uiAccess.useCdata && uiAccess.text) {
    parsed.uiAccess = uiAccess.text;
  }

  return parsed;
}
