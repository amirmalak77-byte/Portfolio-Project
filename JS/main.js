const menuIcon = document.querySelector(".nav-menu");
const navLinks = document.querySelector(".holder-links");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", () => {
  navLinks.classList.add("open");
});
closeIcon.addEventListener("click", () => {
  navLinks.classList.remove("open");
});

const linkItems = document.getElementsByClassName("link-item");

Array.from(linkItems).forEach((link) => {
  link.addEventListener("click", () => {
    Array.from(linkItems).forEach((item) => {
      item.classList.remove("active");
    });
    link.classList.add("active");
  });
});

console.log(linkItems);

