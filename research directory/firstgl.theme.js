"use strict";

(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    document.querySelectorAll(".theme-switcher button").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.theme === theme);
    });
    localStorage.setItem(STORAGE_KEY, theme);
  }

  var saved = localStorage.getItem(STORAGE_KEY) || "auto";
  applyTheme(saved);

  document.querySelector(".theme-switcher").addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-theme]");
    if (btn) applyTheme(btn.dataset.theme);
  });
})();
