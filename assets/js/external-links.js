/* Open off-site links in a new tab with the recommended security attributes. */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="http://"], a[href^="https://"]').forEach(function (link) {
      try {
        if (new URL(link.href, window.location.href).hostname !== window.location.hostname) {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        }
      } catch (error) {
        // Leave malformed links unchanged.
      }
    });
  });
})();
