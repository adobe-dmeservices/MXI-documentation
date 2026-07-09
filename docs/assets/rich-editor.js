/** Lightweight Quill wrapper for MXI HTML fields. Requires window.Quill (CDN). */

const editors = new Map();

const TOOLBAR_BASIC = [
  ["bold", "italic", "underline"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["link"],
  ["clean"],
];

function normalizeHtml(html) {
  const value = (html || "").trim();
  if (!value || value === "<p><br></p>" || value === "<p></p>") return "";
  return value;
}

export function htmlIsEmpty(html) {
  return !normalizeHtml(html);
}

export { normalizeHtml };

export function syncRichEditorsToState(state) {
  for (const [field, editor] of editors) {
    if (editor?.root) {
      state[field] = normalizeHtml(editor.root.innerHTML);
    }
  }
}

export function destroyRichEditors() {
  editors.clear();
}

export function initRichEditor({ elementId, field, state, placeholder, onChange }) {
  if (!window.Quill) {
    console.warn("Quill is not loaded; rich text editing is unavailable.");
    return null;
  }

  const container = document.getElementById(elementId);
  if (!container) return null;

  const editor = new window.Quill(`#${elementId}`, {
    theme: "snow",
    placeholder,
    modules: { toolbar: TOOLBAR_BASIC },
  });

  if (state[field]) {
    if (/<[a-z][\s\S]*>/i.test(state[field])) {
      editor.root.innerHTML = state[field];
    } else {
      editor.setText(state[field]);
    }
  }

  editor.on("text-change", () => {
    state[field] = normalizeHtml(editor.root.innerHTML);
    onChange?.();
  });

  editors.set(field, editor);
  return editor;
}

export function initContentEditors(state, onChange) {
  destroyRichEditors();

  initRichEditor({
    elementId: "description-editor",
    field: "description",
    state,
    placeholder: "Describe what this extension does…",
    onChange,
  });

  initRichEditor({
    elementId: "license-editor",
    field: "license",
    state,
    placeholder: "Copyright notice and license terms shown during installation…",
    onChange,
  });

  initRichEditor({
    elementId: "ui-access-editor",
    field: "uiAccess",
    state,
    placeholder: "Where to find this extension in the product UI…",
    onChange,
  });
}
