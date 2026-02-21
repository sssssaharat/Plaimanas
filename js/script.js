document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     SECTION 1: NAVBAR & HEADER
     ========================================= */

  const currency = document.getElementById("currency");
  if (currency) {
    const btn = currency.querySelector(".currency__btn");

    btn.addEventListener("click", () => {
      currency.classList.toggle("is-open");
      const isOpen = currency.classList.contains("is-open");
      btn.setAttribute("aria-expanded", isOpen);
    });

    document.addEventListener("click", (e) => {
      if (!currency.contains(e.target)) {
        currency.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  const hamburger = document.getElementById("hamburgerMenu");
  const navMenuWrapper = document.getElementById("navMenuWrapper");
  const body = document.body;

  if (hamburger && navMenuWrapper) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");

      navMenuWrapper.classList.toggle("is-open");

      if (navMenuWrapper.classList.contains("is-open")) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "";
      }
    });
  }

  const editorialToggle = document.getElementById("editorialToggle");
  const editorialWrapper = document.getElementById("editorialWrapper");

  if (editorialToggle && editorialWrapper) {
    editorialToggle.addEventListener("click", (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        editorialWrapper.classList.toggle("is-expanded");
      }
    });
  }

  /* =========================================
     SECTION 2: FAQ & ACCORDION
     ========================================= */

  const faqTabs = document.querySelectorAll(".faq-tab");
  const faqContents = document.querySelectorAll(".faq-content");

  faqTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      faqTabs.forEach((t) => t.classList.remove("active"));
      faqContents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");

      const targetId = tab.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
    });
  });

  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const currentItem = question.parentElement;
      currentItem.classList.toggle("active");
    });
  });

  /* =========================================
     SECTION 3: FORMS & CUSTOM DROPDOWN
     ========================================= */

  const customSelectBox = document.getElementById("customSelectBox");
  const customOptionsList = document.getElementById("customOptionsList");
  const customOptions = document.querySelectorAll(".custom-option");
  const realSelect = document.getElementById("subject");
  const selectText = document.querySelector(".custom-select-text");

  if (customSelectBox) {
    customSelectBox.addEventListener("click", function (e) {
      e.stopPropagation();
      this.classList.toggle("is-open");
      customOptionsList.classList.toggle("show");
    });

    customOptions.forEach((option) => {
      option.addEventListener("click", function (e) {
        e.stopPropagation();

        const value = this.getAttribute("data-value");
        const text = this.textContent;

        selectText.textContent = text;

        realSelect.value = value;

        customSelectBox.classList.add("has-value");

        customSelectBox.classList.remove("is-open");
        customOptionsList.classList.remove("show");
      });
    });

    document.addEventListener("click", function (e) {
      if (
        !customSelectBox.contains(e.target) &&
        !customOptionsList.contains(e.target)
      ) {
        customSelectBox.classList.remove("is-open");
        customOptionsList.classList.remove("show");
      }
    });
  }
});
