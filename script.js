// theme toggle management
function themeTo(theme) {
  if (theme === "light") {
    document.documentElement.style.setProperty("--background", "#ffffff");
    document.documentElement.style.setProperty("--secondary", "#08cb00");
    document.documentElement.style.setProperty("--primary", "#253900");
    document.documentElement.style.setProperty("--tertiary", "#000000");
    localStorage.setItem("Theme", "light");
  } else {
    document.documentElement.style.setProperty("--background", "#000000");
    document.documentElement.style.setProperty("--secondary", "#253900");
    document.documentElement.style.setProperty("--primary", "#08cb00");
    document.documentElement.style.setProperty("--tertiary", "#0e1b02");
    localStorage.setItem("Theme", "dark");
  }
}
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
  const savedTheme = localStorage.getItem("Theme");
  if (savedTheme === "light") {
    themeTo("dark");
  } else {
    themeTo("light");
  }
});
