const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", mobileMenu);

function mobileMenu() {
  toggleButton.classList.toggle("active");
  navLinks.classList.toggle("active");
}

const navLinks = document.querySelectorAll(".nav-links");

navLinks.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu () {
  toggleButton.classList.remove("active");
  navLinks.classList.remove("active");
}