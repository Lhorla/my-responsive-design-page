const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", mobileMenu);

function mobileMenu() {
  toggleButton.classList.toggle("active");
  navLinks.classList.toggle("active");
}