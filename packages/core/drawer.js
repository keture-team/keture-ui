function resolveElement(target) {
  if (!target) {
    return null;
  }

  if (typeof target === "string") {
    return document.querySelector(target);
  }

  return target;
}

function createDrawer(options = {}) {
  const drawer = resolveElement(options.drawer || ".kt-drawer");
  const overlay = resolveElement(options.overlay || ".kt-drawer-overlay");

  if (!drawer || !overlay) {
    throw new Error("Drawer and overlay elements are required.");
  }

  const openClass = options.openClass || "kt-drawer-open";

  function sync(isOpen) {
    drawer.classList.toggle(openClass, isOpen);
    overlay.classList.toggle(openClass, isOpen);
    document.body.classList.toggle("kt-drawer-active", isOpen);
  }

  function open() {
    sync(true);
  }

  function close() {
    sync(false);
  }

  function toggle() {
    sync(!drawer.classList.contains(openClass));
  }

  overlay.addEventListener("click", close);

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && drawer.classList.contains(openClass)) {
      close();
    }
  });

  return { open, close, toggle };
}

if (typeof window !== "undefined") {
  window.KetureDrawer = { createDrawer };
}
