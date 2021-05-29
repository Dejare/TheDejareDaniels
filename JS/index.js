const open = document.getElementById("hamburger");
const close = document.getElementById("closehamburger");
const nav = document.getElementById("navo");

open.addEventListener("click", function () {
  nav.style.display = "block";
});
close.addEventListener("click", function () {
  nav.style.display = "none";
});
