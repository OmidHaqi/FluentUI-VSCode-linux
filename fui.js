!function () { var e = document.querySelector("body"); let c = !1; let l = "#202020", s = "#ffffff", p = "#005fb8", i = "#005fb8e6", n = "#005fb8cc"; let r; const o = (e, t) => { window.clearTimeout(r), r = window.setTimeout(e, t) }, u = new ResizeObserver(e => { for (var t of e) t.contentBoxSize && o(h, 300) }), y = (e, t) => { for (const r of e) "childList" === r.type && o(h, 300) }, d = (e, t) => { for (const o of e) { var r; "attributes" === o.type && (console.log("Attribute changed on chromium"), r = document.querySelector("div.chromium")["classList"], r.contains("vs") && m(), r.contains("vs-dark")) && g() } }; const v = new MutationObserver((e, t) => { for (var r of e) "childList" === r.type && o(f, 180) }); const a = (e, t, r, o, a) => { c = e, p = o, i = o + "e6", n = o + "cc", l = r, s = t, document.querySelector(".vscode-tokens-styles") && (document.querySelector(".settings-editor"), (e = document.querySelector(".sidebar")).classList.add("card"), o = e.parentElement.closest(".split-view-container"), r = document.querySelector(".grid-view-container > .monaco-grid-view > .monaco-grid-branch-node > .monaco-split-view2 > .monaco-scrollable-element > .split-view-container"), v.observe(r, { childList: !0 }), r && f(), c && (t = e.parentElement, r = document.querySelector(".editor-container"), console.log("Attaching resize observers"), new MutationObserver(y).observe(o, { childList: !0 }), u.observe(t), u.observe(r), h()), e = document.querySelector("div.chromium"), new MutationObserver(d).observe(e, { attributes: !0 }), b({ property: "background", value: "var(--wallpaper)" }), console.log("Fluent UI: initialised!"), a) && a.disconnect() }, b = ({ property: e, value: t }) => { document.documentElement.style.setProperty(e, t) }, g = () => { try { console.log("Applying dark styles"), b({ property: "--accent", value: p }), b({ property: "--accent-hover", value: i }), b({ property: "--accent-pressed-bg", value: n }), b({ property: "--card-bg", value: l }), b({ property: "--context-menu-bg", value: l }), b({ property: "--flyout-bg", value: l }), b({ property: "--editor-bg", value: l }), b({ property: "--active-action-item-bg", value: "var(--card-bg)" }), b({ property: "--app-bg", value: "rgba(44, 44, 44, 0.85)" }), b({ property: "--body-bg", value: "rgba(44, 44, 44, 1)" }), b({ property: "--body-bg-t", value: "rgba(44, 44, 44, 0)" }), b({ property: "--background-color", value: "rgba(0, 0, 0, 0.0578)" }), b({ property: "--card-bg-blend-mode", value: "color, luminosity" }), b({ property: "--editor-widget-bg", value: "var(--card-bg)" }), b({ property: "--foreground", value: "#ffffff" }), b({ property: "--hover-bg", value: "var(--card-bg)" }), b({ property: "--list-item-bg", value: "rgba(255, 255, 255, 0.0605)" }), b({ property: "--list-item-fg", value: "#ffffff99" }), b({ property: "--notification-toast-bg", value: "var(--flyout-bg)" }), b({ property: "--quick-input-widget-bg", value: "var(--flyout-bg)" }), b({ property: "background", value: "var(--wallpaper)" }) } catch (e) { console.error(e) } }, m = () => { try { console.log("Applying light styles"), console.log("Current accent", p), b({ property: "--accent", value: p }), b({ property: "--accent-hover", value: i }), b({ property: "--accent-pressed-bg", value: n }), b({ property: "--card-bg", value: s }), b({ property: "--flyout-bg", value: s }), b({ property: "--background-color", value: s }), b({ property: "--active-action-item-bg", value: "rgba(0, 0, 0, 0.0605)" }), b({ property: "--app-bg", value: "var(--card-bg)" }), b({ property: "--card-bg-blend-mode", value: "multiply" }), b({ property: "--context-menu-bg", value: "var(--menu-bg)" }), b({ property: "--editor-bg", value: "var(--card-bg)" }), b({ property: "--editor-widget-bg", value: "var(--flyout-bg)" }), b({ property: "--foreground", value: "#000000" }), b({ property: "--hover-bg", value: " var(--flyout-bg)" }), b({ property: "--list-item-bg", value: "rgba(0, 0, 0, 0.0373)" }), b({ property: "--list-item-fg", value: "#0000009b" }), b({ property: "--notification-toast-bg", value: "var(--flyout-bg)" }), b({ property: "--quick-input-widget-bg", value: "var(--flyout-bg)" }), b({ property: "background", value: "var(--wallpaper)" }) } catch (e) { console.error(e) } }, f = () => { document.querySelectorAll(".overflow-guard").forEach(e => { var t = e.offsetWidth; e.style.width = t - 4 + "px" }), setTimeout(() => { var e = [...document.querySelectorAll(".minimap")], e = (1 < e.length && e.slice(0, -1).forEach(e => { e.style.setProperty("right", "13px", "important") }), [...document.querySelectorAll(".decorationsOverviewRuler")]); 1 < e.length && e.slice(0, -1).forEach(e => { e.style.setProperty("right", "4px", "important") }) }, 1e3) }, h = () => { var e = document.querySelector(".sidebar"), t = (e.classList.add("compact"), e.parentElement), r = document.querySelector(".activitybar"); r.classList.add("compact"), document.querySelector(".tabs").classList.add("compact"), document.querySelector(".part.panel.bottom").classList.add("compact"), document.querySelector(".monaco-breadcrumbs").classList.add("compact"), document.querySelector(".editor").classList.add("compact"); document.querySelector(".editor-container").classList.add("compact"), document.documentElement.style.setProperty("--activity-bar-width", "36px"); var o = r.parentElement; o.style.setProperty("width", "36px"), o.style.setProperty("max-width", "36px"), e.classList.contains("left") && t.style.setProperty("left", "42px"), r.classList.contains("right") && (t.style.setProperty("right", "36px"), o.style.removeProperty("left"), o.style.setProperty("right", "0"), o.style.setProperty("margin-right", "2px")) }; a(!1, "#ffffffb3", "#202020b3", "#005fb8"), new MutationObserver((e, t) => { for (var r of e) { var o; "attributes" === r.type && (o = document.querySelector(".vscode-tokens-styles")) && (t.disconnect(), t.observe(o, { childList: !0 })), "childList" === r.type && document.querySelector(".vscode-tokens-styles") && a(!1, "#ffffffb3", "#202020b3", "#005fb8", t) } }).observe(e, { attributes: !0, childList: !0 }) }();