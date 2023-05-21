function wrapAlign(el) {
  let containerWidth = el?.clientWidth;
  // clientWidth  clientWidth=width- 2* border-width
  if (!el.firstElementChild) {
    return;
  }
  const firstChildWidth = parseFloat(
    window.getComputedStyle(el.firstElementChild).width
  );
  const elStyle = window.getComputedStyle(el);
  if (elStyle?.paddingLeft || elStyle?.paddingRight) {
    if (elStyle.boxSizing !== "content-box") {
      const paddingLeft = parseFloat(elStyle.paddingLeft) || 0;
      const paddingRight = parseFloat(elStyle.paddingRight) || 0;
      const borderLeft = parseFloat(elStyle.borderLeft) || 0;
      const borderRight = parseFloat(elStyle.borderRight) || 0;
      containerWidth =
        containerWidth - paddingLeft - paddingRight - borderLeft - borderRight;
    }
  }
  if (containerWidth && firstChildWidth) {
    el.querySelectorAll("[aria-hidden=true]").forEach((item) => item.remove());
    const columnCount = Math.floor(containerWidth / firstChildWidth);
    const childElementCount = el.childElementCount;
    if (childElementCount <= columnCount) {
      return;
    }
    let toFillCount = childElementCount % columnCount;
    toFillCount &&= columnCount - toFillCount;
    while (toFillCount > 0) {
      const i = document.createElement("i");
      i.setAttribute("aria-hidden", "true");
      i.setAttribute("hidden", "true");
      const itemStyle = window.getComputedStyle(el.firstElementChild);
      i.style.setProperty("width", itemStyle.width);
      i.style.setProperty("height", itemStyle.height);
      i.style.setProperty("display", itemStyle.display);
      i.style.setProperty("opacity", "0");
      el.appendChild(i);
      toFillCount--;
    }
  }
}

export default {
  install(app) {
    app.directive("flex-wrap-align", {
      mounted(el) {
        wrapAlign(el);
        window.addEventListener("resize", () => {
          wrapAlign(el);
        });
      },
      updated(el) {
        wrapAlign(el);
      },
    });
  },
};
