
document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. ระบบ Currency Dropdown
  // ==========================================
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

  // ==========================================
  // 2. ระบบ Mobile Menu (Hamburger & Overlay)
  // ==========================================
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

  // ==========================================
  // 3. ระบบเมนูย่อย Editorial บนมือถือ (Accordion)
  // ==========================================
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
});
