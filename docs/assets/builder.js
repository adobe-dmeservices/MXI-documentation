import {
  PRODUCTS,
  CEP_ONLY_HOSTS,
  FILE_TYPES,
  PLATFORMS,
  COMMON_DESTINATIONS,
  STEPS,
  defaultState,
} from "./products.js";

const state = loadState();
let currentStep = 0;

const formEl = document.getElementById("wizard-form");
const previewEl = document.getElementById("xml-preview");
const stepListEl = document.getElementById("step-list");
const stepTitleEl = document.getElementById("step-title");
const stepHintEl = document.getElementById("step-hint");
const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
const downloadBtn = document.getElementById("btn-download");
const copyBtn = document.getElementById("btn-copy");
const loadExampleBtn = document.getElementById("btn-load-example");

function loadState() {
  try {
    const saved = localStorage.getItem("mxi-builder-state");
    if (saved) return { ...defaultState(), ...JSON.parse(saved) };
  } catch {
    /* ignore */
  }
  return defaultState();
}

function saveState() {
  localStorage.setItem("mxi-builder-state", JSON.stringify(state));
}

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function attr(name, value) {
  if (value === undefined || value === null || value === "") return "";
  return ` ${name}="${esc(value)}"`;
}

function boolAttr(name, value) {
  return value ? ` ${name}="true"` : "";
}

function indent(level, text) {
  const pad = "    ".repeat(level);
  return text
    .split("\n")
    .map((line) => (line ? pad + line : line))
    .join("\n");
}

function buildProductsXml() {
  return state.products
    .map((product) => {
      const attrs = [];
      if (product.mode === "familyname" && product.familyname) {
        attrs.push(`familyname="${esc(product.familyname)}"`);
      } else if (product.name) {
        attrs.push(`name="${esc(product.name)}"`);
      }
      if (product.version) attrs.push(`version="${esc(product.version)}"`);
      if (product.maxversion) attrs.push(`maxversion="${esc(product.maxversion)}"`);
      if (product.required) attrs.push(`required="true"`);
      if (product.platform) attrs.push(`platform="${esc(product.platform)}"`);
      if (product.bit) attrs.push(`bit="${esc(product.bit)}"`);
      return `        <product ${attrs.join(" ")}/>`;
    })
    .join("\n");
}

function buildFilesXml() {
  if (!state.files.length) return "";
  const lines = state.files.map((file) => {
    const attrs = [`source="${esc(file.source)}"`];
    if (file.destination) attrs.push(`destination="${esc(file.destination)}"`);
    if (file.products) attrs.push(`products="${esc(file.products)}"`);
    if (file.platform) attrs.push(`platform="${esc(file.platform)}"`);
    if (file.fileType) attrs.push(`file-type="${esc(file.fileType)}"`);
    if (file.minVersion) attrs.push(`minVersion="${esc(file.minVersion)}"`);
    if (file.maxVersion) attrs.push(`maxVersion="${esc(file.maxVersion)}"`);
    return `        <file ${attrs.join(" ")}/>`;
  });
  return `    <files>\n${lines.join("\n")}\n    </files>`;
}

function buildDependenciesXml() {
  if (!state.dependencies.length) return "";
  const lines = state.dependencies
    .filter((d) => d.name)
    .map((d) => `        <extension name="${esc(d.name)}"/>`);
  if (!lines.length) return "";
  return `    <dependency>\n${lines.join("\n")}\n    </dependency>`;
}

function buildUpdateXml() {
  if (!state.updateUrl) return "";
  return `    <update url="${esc(state.updateUrl)}"/>`;
}

function buildDescriptionXml() {
  const text = state.description.trim();
  if (!text) return `    <description/>`;
  if (state.useCdata) {
    return `    <description>\n        <![CDATA[${text}]]>\n    </description>`;
  }
  return `    <description>${esc(text)}</description>`;
}

function buildUiAccessXml() {
  const text = state.uiAccess.trim();
  if (!text) return "";
  return `    <ui-access>\n        <![CDATA[${text}]]>\n    </ui-access>`;
}

function buildXml() {
  const rootAttrs = [
    `id="${esc(state.id)}"`,
    `name="${esc(state.name)}"`,
    `version="${esc(state.version)}"`,
  ];
  if (state.forceQuit) rootAttrs.push(`force-quit="true"`);
  if (state.requiresRestart) rootAttrs.push(`requires-restart="true"`);
  if (state.isMultilingual) rootAttrs.push(`ismultilingual="true"`);
  if (state.icon) rootAttrs.push(`icon="${esc(state.icon)}"`);

  const parts = [
    `<?xml version="1.0" encoding="UTF-8" standalone="no"?>`,
    `<macromedia-extension ${rootAttrs.join(" ")}>`,
    "",
    `    <author name="${esc(state.author)}"/>`,
    "",
    "    <products>",
    buildProductsXml(),
    "    </products>",
    "",
    buildDescriptionXml(),
    "",
    `    <license-agreement>${esc(state.license)}</license-agreement>`,
  ];

  const uiAccess = buildUiAccessXml();
  if (uiAccess) parts.push("", uiAccess);

  const deps = buildDependenciesXml();
  if (deps) parts.push("", deps);

  const files = buildFilesXml();
  if (files) parts.push("", files);

  const update = buildUpdateXml();
  if (update) parts.push("", update);

  parts.push("", "</macromedia-extension>", "");
  return parts.join("\n");
}

function productOptions(selectedFamily) {
  return PRODUCTS.map(
    (p) =>
      `<option value="${esc(p.familyname || p.names[0])}" ${p.familyname === selectedFamily || p.names[0] === selectedFamily ? "selected" : ""}>${esc(p.label)} (CEP: ${p.cepHosts.join("/")})</option>`
  ).join("");
}

function renderBasics() {
  return `
    <div class="field-grid">
      <label>Extension ID <span class="req">*</span>
        <input type="text" data-field="id" value="${esc(state.id)}" placeholder="com.company.extension" required>
        <span class="help">Reverse-DNS identifier, e.g. com.adobe.sample</span>
      </label>
      <label>Display name <span class="req">*</span>
        <input type="text" data-field="name" value="${esc(state.name)}" required>
      </label>
      <label>Version <span class="req">*</span>
        <input type="text" data-field="version" value="${esc(state.version)}" placeholder="1.0.0" required>
      </label>
      <label>Author <span class="req">*</span>
        <input type="text" data-field="author" value="${esc(state.author)}" required>
      </label>
      <label>Icon path
        <input type="text" data-field="icon" value="${esc(state.icon)}" placeholder="icon.png">
        <span class="help">Relative path; file should install to $ExtensionSpecificEMStore</span>
      </label>
      <div class="checkbox-group">
        <label><input type="checkbox" data-field="forceQuit" ${state.forceQuit ? "checked" : ""}> Force quit target app before install</label>
        <label><input type="checkbox" data-field="requiresRestart" ${state.requiresRestart ? "checked" : ""}> Requires restart after install</label>
        <label><input type="checkbox" data-field="isMultilingual" ${state.isMultilingual ? "checked" : ""}> Multilingual extension</label>
      </div>
    </div>`;
}

function renderProducts() {
  const cards = state.products
    .map((product, index) => {
      const productMeta = PRODUCTS.find(
        (p) => p.familyname === product.familyname || p.names.includes(product.name)
      );
      const cepInfo = productMeta ? productMeta.cepHosts.join(" / ") : "—";
      return `
      <div class="repeat-card" data-product-index="${index}">
        <div class="repeat-card-header">
          <strong>Product ${index + 1}</strong>
          <button type="button" class="btn-text" data-action="remove-product" ${state.products.length === 1 ? "disabled" : ""}>Remove</button>
        </div>
        <div class="field-grid">
          <label>Application
            <select data-product-field="selector">
              ${productOptions(product.familyname || product.name)}
            </select>
            <span class="help">CEP Host ID: ${esc(cepInfo)}</span>
          </label>
          <label>Targeting mode
            <select data-product-field="mode">
              <option value="familyname" ${product.mode === "familyname" ? "selected" : ""}>familyname (Mac + Win 64-bit)</option>
              <option value="name" ${product.mode === "name" ? "selected" : ""}>name (specific product)</option>
            </select>
          </label>
          <label>Product name
            <select data-product-field="name" ${product.mode === "familyname" ? "disabled" : ""}>
              ${(productMeta?.names || [product.name])
                .map((n) => `<option value="${esc(n)}" ${n === product.name ? "selected" : ""}>${esc(n)}</option>`)
                .join("")}
            </select>
          </label>
          <label>Min version <span class="req">*</span>
            <input type="text" data-product-field="version" value="${esc(product.version)}" placeholder="21">
            <span class="help">Internal major version — see <a href="supported-applications.md">version table</a></span>
          </label>
          <label>Max version
            <input type="text" data-product-field="maxversion" value="${esc(product.maxversion)}" placeholder="26.99">
          </label>
          <label>Platform
            <select data-product-field="platform">
              ${PLATFORMS.map((p) => `<option value="${p.value}" ${p.value === product.platform ? "selected" : ""}>${esc(p.label)}</option>`).join("")}
            </select>
          </label>
          <label>Windows bitness
            <select data-product-field="bit">
              <option value="" ${product.bit === "" ? "selected" : ""}>Any</option>
              <option value="32" ${product.bit === "32" ? "selected" : ""}>32-bit</option>
              <option value="64" ${product.bit === "64" ? "selected" : ""}>64-bit</option>
            </select>
          </label>
          <label class="checkbox-inline"><input type="checkbox" data-product-field="required" ${product.required ? "checked" : ""}> Required product</label>
        </div>
      </div>`;
    })
    .join("");

  const cepNote = CEP_ONLY_HOSTS.map((h) => `${h.label} (${h.hostId})`).join(", ");

  return `
    <p class="intro">Select which Adobe applications can install this extension. MXI product names differ from CEP Host IDs used in <code>manifest.xml</code>.</p>
    <div id="products-list">${cards}</div>
    <button type="button" class="btn-secondary" id="btn-add-product">+ Add product</button>
    <p class="note">CEP-only hosts not in archived MXI docs: ${esc(cepNote)}. See <a href="supported-applications.md">supported applications</a>.</p>`;
}

function renderContent() {
  return `
    <div class="field-grid single-col">
      <label>Description <span class="req">*</span>
        <textarea data-field="description" rows="5">${esc(state.description)}</textarea>
        <label class="checkbox-inline"><input type="checkbox" data-field="useCdata" ${state.useCdata ? "checked" : ""}> Wrap in CDATA (recommended)</label>
      </label>
      <label>License agreement <span class="req">*</span>
        <textarea data-field="license" rows="3">${esc(state.license)}</textarea>
      </label>
      <label>UI access text <span class="optional">optional</span>
        <textarea data-field="uiAccess" rows="3" placeholder="Where to find this extension in the product UI">${esc(state.uiAccess)}</textarea>
      </label>
    </div>`;
}

function destinationDatalist() {
  return `<datalist id="destinations">${COMMON_DESTINATIONS.map((d) => `<option value="${esc(d)}">`).join("")}</datalist>`;
}

function renderFiles() {
  const cards = state.files
    .map((file, index) => {
      return `
      <div class="repeat-card" data-file-index="${index}">
        <div class="repeat-card-header">
          <strong>File ${index + 1}</strong>
          <button type="button" class="btn-text" data-action="remove-file" ${state.files.length === 1 ? "disabled" : ""}>Remove</button>
        </div>
        <div class="field-grid">
          <label>Source path <span class="req">*</span>
            <input type="text" data-file-field="source" value="${esc(file.source)}" placeholder="my-extension.zxp" required>
            <span class="help">Path relative to the MXI/ZXP package root</span>
          </label>
          <label>Destination
            <input type="text" data-file-field="destination" value="${esc(file.destination)}" list="destinations" placeholder="$ExtensionSpecificEMStore">
          </label>
          <label>File type
            <select data-file-field="fileType">
              ${FILE_TYPES.map((t) => `<option value="${t.value}" ${t.value === file.fileType ? "selected" : ""}>${esc(t.label)}</option>`).join("")}
            </select>
          </label>
          <label>Products
            <input type="text" data-file-field="products" value="${esc(file.products)}" placeholder="InDesign64,Photoshop">
            <span class="help">Comma-separated; leave blank for all products</span>
          </label>
          <label>Platform
            <select data-file-field="platform">
              ${PLATFORMS.map((p) => `<option value="${p.value}" ${p.value === file.platform ? "selected" : ""}>${esc(p.label)}</option>`).join("")}
            </select>
          </label>
          <label>Min version
            <input type="text" data-file-field="minVersion" value="${esc(file.minVersion)}" placeholder="17">
          </label>
          <label>Max version
            <input type="text" data-file-field="maxVersion" value="${esc(file.maxVersion)}" placeholder="20.9">
          </label>
        </div>
      </div>`;
    })
    .join("");

  return `${destinationDatalist()}
    <p class="intro">List files to install. ZXP/CEP panels typically use <code>file-type="csxs"</code>.</p>
    <div id="files-list">${cards}</div>
    <button type="button" class="btn-secondary" id="btn-add-file">+ Add file</button>`;
}

function renderAdvanced() {
  const depCards = state.dependencies
    .map(
      (dep, index) => `
      <div class="repeat-card" data-dep-index="${index}">
        <div class="repeat-card-header">
          <strong>Dependency ${index + 1}</strong>
          <button type="button" class="btn-text" data-action="remove-dep">Remove</button>
        </div>
        <label>Extension name
          <input type="text" data-dep-field="name" value="${esc(dep.name)}" placeholder="com.other.extension">
        </label>
      </div>`
    )
    .join("");

  return `
    <div class="field-grid single-col">
      <label>Update check URL <span class="optional">optional</span>
        <input type="url" data-field="updateUrl" value="${esc(state.updateUrl)}" placeholder="https://example.com/update.xml">
      </label>
    </div>
    <h3 class="subheading">Dependencies</h3>
    <div id="deps-list">${depCards || '<p class="muted">No dependencies defined.</p>'}</div>
    <button type="button" class="btn-secondary" id="btn-add-dep">+ Add dependency</button>`;
}

function renderReview() {
  const xml = buildXml();
  const issues = validateState();
  return `
    <div class="review-summary">
      <p><strong>${esc(state.name)}</strong> (<code>${esc(state.id)}</code>) v${esc(state.version)}</p>
      <p>${state.products.length} product(s), ${state.files.length} file(s)</p>
      ${issues.length ? `<div class="issues"><strong>Please fix:</strong><ul>${issues.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>` : '<p class="success">Ready to download.</p>'}
    </div>
    <pre class="review-preview">${esc(xml)}</pre>`;
}

function validateState() {
  const issues = [];
  if (!state.id.trim()) issues.push("Extension ID is required.");
  if (!state.name.trim()) issues.push("Display name is required.");
  if (!state.version.trim()) issues.push("Version is required.");
  if (!state.author.trim()) issues.push("Author is required.");
  if (!state.description.trim()) issues.push("Description is required.");
  if (!state.license.trim()) issues.push("License agreement is required.");
  if (!state.products.length) issues.push("At least one product is required.");
  state.products.forEach((p, i) => {
    if (!p.version.trim()) issues.push(`Product ${i + 1}: min version is required.`);
  });
  state.files.forEach((f, i) => {
    if (!f.source.trim()) issues.push(`File ${i + 1}: source path is required.`);
  });
  return issues;
}

function renderStepList() {
  stepListEl.innerHTML = STEPS.map((step, index) => {
    const cls = index === currentStep ? "active" : index < currentStep ? "done" : "";
    return `<li class="${cls}"><button type="button" data-step="${index}">${index + 1}. ${esc(step.title)}</button></li>`;
  }).join("");
}

function render() {
  const step = STEPS[currentStep];
  stepTitleEl.textContent = step.title;
  stepHintEl.textContent = step.hint;
  renderStepList();

  const renderers = {
    basics: renderBasics,
    products: renderProducts,
    content: renderContent,
    files: renderFiles,
    advanced: renderAdvanced,
    review: renderReview,
  };

  formEl.innerHTML = renderers[step.id]();
  previewEl.textContent = buildXml();

  prevBtn.disabled = currentStep === 0;
  nextBtn.textContent = currentStep === STEPS.length - 1 ? "Finish" : "Next";
  downloadBtn.disabled = validateState().length > 0;
  saveState();
  bindFormEvents();
}

function bindFormEvents() {
  formEl.querySelectorAll("[data-field]").forEach((el) => {
    const field = el.dataset.field;
    const event = el.type === "checkbox" ? "change" : "input";
    el.addEventListener(event, () => {
      if (el.type === "checkbox") state[field] = el.checked;
      else state[field] = el.value;
      previewEl.textContent = buildXml();
      saveState();
      if (STEPS[currentStep].id === "review") render();
    });
  });

  formEl.querySelectorAll("[data-product-index]").forEach((card) => {
    const index = Number(card.dataset.productIndex);
    card.querySelectorAll("[data-product-field]").forEach((el) => {
      const field = el.dataset.productField;
      const handler = () => {
        if (field === "selector") {
          const meta = PRODUCTS.find((p) => (p.familyname || p.names[0]) === el.value);
          if (meta) {
            state.products[index].familyname = meta.familyname || "";
            state.products[index].name = meta.names[0];
            state.products[index].version = meta.defaultVersion;
          }
        } else if (field === "required") {
          state.products[index][field] = el.checked;
        } else {
          state.products[index][field] = el.value;
        }
        render();
      };
      el.addEventListener(el.type === "checkbox" ? "change" : "input", handler);
      if (el.tagName === "SELECT") el.addEventListener("change", handler);
    });
    card.querySelector('[data-action="remove-product"]')?.addEventListener("click", () => {
      state.products.splice(index, 1);
      render();
    });
  });

  formEl.querySelectorAll("[data-file-index]").forEach((card) => {
    const index = Number(card.dataset.fileIndex);
    card.querySelectorAll("[data-file-field]").forEach((el) => {
      el.addEventListener("input", () => {
        state.files[index][el.dataset.fileField] = el.value;
        previewEl.textContent = buildXml();
        saveState();
      });
      if (el.tagName === "SELECT") {
        el.addEventListener("change", () => {
          state.files[index][el.dataset.fileField] = el.value;
          previewEl.textContent = buildXml();
          saveState();
        });
      }
    });
    card.querySelector('[data-action="remove-file"]')?.addEventListener("click", () => {
      state.files.splice(index, 1);
      render();
    });
  });

  formEl.querySelectorAll("[data-dep-index]").forEach((card) => {
    const index = Number(card.dataset.depIndex);
    card.querySelector("[data-dep-field]")?.addEventListener("input", (e) => {
      state.dependencies[index].name = e.target.value;
      previewEl.textContent = buildXml();
      saveState();
    });
    card.querySelector('[data-action="remove-dep"]')?.addEventListener("click", () => {
      state.dependencies.splice(index, 1);
      render();
    });
  });

  document.getElementById("btn-add-product")?.addEventListener("click", () => {
    state.products.push({
      mode: "familyname",
      familyname: "InDesign",
      name: "InDesign",
      version: "17",
      maxversion: "20.99",
      required: false,
      platform: "",
      bit: "",
    });
    render();
  });

  document.getElementById("btn-add-file")?.addEventListener("click", () => {
    state.files.push({
      source: "",
      destination: "",
      products: "",
      platform: "",
      fileType: "ordinary",
      minVersion: "",
      maxVersion: "",
    });
    render();
  });

  document.getElementById("btn-add-dep")?.addEventListener("click", () => {
    state.dependencies.push({ name: "" });
    render();
  });
}

stepListEl.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-step]");
  if (!btn) return;
  currentStep = Number(btn.dataset.step);
  render();
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep -= 1;
    render();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentStep < STEPS.length - 1) {
    currentStep += 1;
    render();
  }
});

downloadBtn.addEventListener("click", () => {
  const issues = validateState();
  if (issues.length) {
    currentStep = STEPS.findIndex((s) => s.id === "review");
    render();
    return;
  }
  const blob = new Blob([buildXml()], { type: "application/xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${state.id.split(".").pop() || "extension"}.mxi`;
  a.click();
  URL.revokeObjectURL(url);
});

copyBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(buildXml());
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy XML";
  }, 1500);
});

loadExampleBtn.addEventListener("click", () => {
  Object.assign(state, {
    id: "com.wedia.wxm",
    name: "Wedia CC PlugIns",
    version: "2024.5.0",
    author: "Wedia",
    forceQuit: true,
    requiresRestart: true,
    products: [
      { mode: "familyname", familyname: "InDesign", name: "InDesign", version: "17", maxversion: "20.99", required: false, platform: "", bit: "" },
      { mode: "familyname", familyname: "Photoshop", name: "Photoshop", version: "21", maxversion: "26.99", required: false, platform: "", bit: "" },
      { mode: "familyname", familyname: "Illustrator", name: "Illustrator", version: "24", maxversion: "29.99", required: false, platform: "", bit: "" },
    ],
    description: "Wedia Digital Asset Management and Web-to-Print PlugIns",
    license: "Copyright 2024 Wedia All rights reserved.",
    files: [
      { source: "com.wedia.dam.connector.zxp", destination: "", products: "", platform: "", fileType: "csxs", minVersion: "18", maxVersion: "20.9" },
      { source: "Wedia.idpp", destination: "$adobecommon/Preflight Profiles/", products: "", platform: "", fileType: "ordinary", minVersion: "18", maxVersion: "20.9" },
    ],
    dependencies: [],
    updateUrl: "",
  });
  render();
});

render();
