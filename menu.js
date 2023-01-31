const navbar = document.querySelector("navbar");
const dropdown = document.querySelector("myNavbar");

navbar.addEventListener("click", function() {
  dropdown.classList.toggle("show");
});

window.addEventListener("click", function(event) {
  if (!event.target.matches('.button')) {
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
});