const hamburgerButton = document.getElementById("hamburger");
const closeButton = document.getElementById("close");
const dropdownMobile = document.querySelector(".homepage_navbar_mobile_view");

hamburgerButton.addEventListener("click", () => {
  dropdownMobile.style.display = "block";
  hamburgerButton.style.display = "none";
  closeButton.style.display = "block";
});

closeButton.addEventListener("click", () => {
  dropdownMobile.style.display = "none";
  hamburgerButton.style.display = "block";
  closeButton.style.display = "none";
});
