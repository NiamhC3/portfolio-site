document.addEventListener("DOMContentLoaded", function () {

  // Mobile nav toggle
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("nav__links--open");
      toggle.setAttribute("aria-expanded", open);
    });

    // Close nav when a link is clicked
    links.querySelectorAll(".nav__link").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("nav__links--open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Project filtering (column-aware)
  var filterBtns = document.querySelectorAll(".filter-btn");
  var columns = document.querySelectorAll(".project-column");

  if (filterBtns.length && columns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filter = btn.getAttribute("data-filter");

        filterBtns.forEach(function (b) { b.classList.remove("filter-btn--active"); });
        btn.classList.add("filter-btn--active");

        columns.forEach(function (col) {
          var cards = col.querySelectorAll(".project-card");
          var empty = col.querySelector(".project-column__empty");
          var visibleCount = 0;

          cards.forEach(function (card) {
            var categories = (card.getAttribute("data-category") || "").split(" ");
            if (filter === "all" || categories.indexOf(filter) !== -1) {
              card.hidden = false;
              visibleCount++;
            } else {
              card.hidden = true;
            }
          });

          if (empty) {
            empty.hidden = visibleCount > 0;
          }
        });
      });
    });
  }

  // Email copy-to-clipboard
  document.querySelectorAll(".email-copy").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var email = btn.getAttribute("data-email");
      navigator.clipboard.writeText(email).then(function () {
        var original = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(function () { btn.textContent = original; }, 2000);
      });
    });
  });

});
