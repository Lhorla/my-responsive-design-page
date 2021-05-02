const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", mobileMenu);

function mobileMenu() {
  toggleButton.classList.toggle("show");
  navLinks.classList.toggle("show");
}

navLinks.addEventListener("click", closeMenu);

function closeMenu() {
  toggleButton.classList.remove("show");
  navLinks.classList.remove("show");
}