let root = document.querySelector(":root");
let button = document.querySelector("#themetoggle");

button.addEventListener("click", () => {
  Event.preventdefault();
  root.classList.toggle("dark");
  if (themeToggle.textContent === "Перейти на темную тему") {
    themeToggle.textContent = "Перейти на светлую тему";
  } else {
    themeToggle.textContent = "Перейти на темную тему";
  }
});
