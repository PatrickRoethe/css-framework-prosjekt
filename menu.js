document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbarMenu = document.getElementById("navbar-menu");

  menuToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("show");
  });
});
