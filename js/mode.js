const body = document.querySelector("body");
const lightBtn = document.getElementById("dark-btn");
const darkBtn = document.getElementById("light-btn");
let x = localStorage.getItem("mode") ? localStorage.getItem("mode") : 0;
if (x == 1) {
  body.classList.add("dark-mode");
  lightBtn.classList.add("hidden");
  darkBtn.classList.remove("hidden");
} else {
  body.classList.remove("dark-mode");
  lightBtn.classList.remove("hidden");
  darkBtn.classList.add("hidden");
}
lightBtn.addEventListener("click", () => {
  body.classList.add("dark-mode");
  lightBtn.classList.add("hidden");
  darkBtn.classList.remove("hidden");
  x = 1;
  localStorage.setItem("mode", x);
});
darkBtn.addEventListener("click", () => {
  body.classList.remove("dark-mode");
  lightBtn.classList.remove("hidden");
  darkBtn.classList.add("hidden");
  x = 0;
  localStorage.setItem("mode", x);
});
