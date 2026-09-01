(function () {
  "use strict";

  function initializeNewsDetails() {
    var buttons = document.querySelectorAll("[data-news-toggle]");

    Array.prototype.forEach.call(buttons, function (button) {
      button.addEventListener("click", function () {
        var panel = document.getElementById(button.getAttribute("aria-controls"));

        if (!panel) {
          return;
        }

        var isExpanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!isExpanded));
        panel.hidden = isExpanded;

        var label = button.querySelector(".news-item__toggle-label");
        if (label) {
          label.textContent = isExpanded ? "Details" : "Hide";
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeNewsDetails);
  } else {
    initializeNewsDetails();
  }
}());
