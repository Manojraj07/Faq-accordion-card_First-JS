"use strict";

const accordionTitles = document.querySelectorAll(".accordion-title");
const box = document.querySelector(".second-img");

accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    const height = accordionTitle.nextElementSibling.scrollHeight;
    accordionTitle.classList.toggle("active-header");
    box.classList.toggle("active-header");
    if (accordionTitle.classList.contains("active-header")) {
      accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
    } else {
      accordionTitle.nextElementSibling.style.maxHeight = "0px";
    }
  });
});
