document.addEventListener("DOMContentLoaded", () => {
  const currency = document.getElementById("currency");
  const btn = currency.querySelector(".currency__btn");

  btn.addEventListener("click", () => {
    currency.classList.toggle("is-open");

    const isOpen = currency.classList.contains("is-open");
    btn.setAttribute("aria-expanded", isOpen);
  });

  document.addEventListener("click", (e) => {
    if (!currency.contains(e.target)) {
      currency.classList.remove("is-open");
      btn.setAttribute("aria-expanded", false);
    }
  });
});

const wrapper = document.querySelector(".editorial-wrapper");
const bg = document.querySelector(".editorial-bg");
const panel = document.querySelector(".editorial-panel");

wrapper.addEventListener("mouseenter", () => {
  bg.style.opacity = "1";
  bg.style.visibility = "visible";
  panel.style.opacity = "1";
  panel.style.visibility = "visible";
});

wrapper.addEventListener("mouseleave", () => {
  bg.style.opacity = "0";
  bg.style.visibility = "hidden";
  panel.style.opacity = "0";
  panel.style.visibility = "hidden";
});
