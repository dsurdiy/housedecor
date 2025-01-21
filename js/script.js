"use strict";

window.addEventListener("load", windowLoad);

function windowLoad() {
   document.addEventListener("click", documentActions);
}

function documentActions(e) {
   const targetElement = e.target;
   const bodyEl = document.body;

   if (targetElement.closest(".menu-icon")) {
      bodyEl.classList.toggle("menu-open");
   }

   if (targetElement.closest(".menu__link") && bodyEl.classList.contains("menu-open")) {
      bodyEl.classList.remove("menu-open");
   }

   if (targetElement.hasAttribute("data-goto")) {
      e.preventDefault();
      const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
      const headerContainerEl = document.querySelector(".header__container");
      const headerContainerHeight = headerContainerEl ? headerContainerEl.offsetHeight : 0;

      if (gotoElement) {
         window.scrollTo({
            top: gotoElement.offsetTop - headerContainerHeight,
            behavior: "smooth",
         });
      }
   }

   if (targetElement.closest(".logo")) {
      e.preventDefault();
      const heroEl = document.querySelector(".hero");
      const headerContainerEl = document.querySelector(".header__container");
      const headerContainerHeight = headerContainerEl ? headerContainerEl.offsetHeight : 0;

      window.scrollTo({
         top: heroEl.offsetTop - headerContainerHeight,
         behavior: "smooth",
      });

   }
}


// -------------- Animations (IntersectionObserver) -------------------

// const items = document.querySelectorAll("[data-watch]");
// const options = {
//    threshold: 0.2,
// }
// const callback = (entries) => {
//    entries.forEach(entry => {
//       entry.isIntersecting ? entry.target.classList.add("active") : entry.target.classList.remove("active");
//    });
// }
// const observer = new IntersectionObserver(callback, options);

// items.forEach(item => {
//    observer.observe(item);
// });