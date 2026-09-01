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

    var moreButtons = document.querySelectorAll("[data-news-more]");

    Array.prototype.forEach.call(moreButtons, function (button) {
      var list = document.getElementById(button.getAttribute("aria-controls"));

      if (!list) {
        return;
      }

      list.classList.add("news-list--collapsible");
      button.hidden = false;

      button.addEventListener("click", function () {
        var isExpanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!isExpanded));
        list.classList.toggle("is-expanded", !isExpanded);

        var label = button.querySelector("[data-news-more-label]");
        if (label) {
          label.textContent = isExpanded ? "More news" : "Show less";
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
