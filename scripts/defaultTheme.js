const savedTheme = localStorage.getItem("Theme") || "dark";
// automatically sets theme to dark if its user's first time
if (savedTheme === "light") {
  document.documentElement.style.setProperty("--highlights", "#08cb00");
  document.documentElement.style.setProperty("--background", "#ffffff");
  document.documentElement.style.setProperty("--secondary", "#08cb00");
  document.documentElement.style.setProperty("--primary", "#253900");
  document.documentElement.style.setProperty("--tertiary", "#000000");
  localStorage.setItem("Theme", "light");
} else {
  document.documentElement.style.setProperty("--highlights", "#ffffff");
  document.documentElement.style.setProperty("--background", "#000000");
  document.documentElement.style.setProperty("--secondary", "#253900");
  document.documentElement.style.setProperty("--primary", "#08cb00");
  document.documentElement.style.setProperty("--tertiary", "#0e1b02");
  localStorage.setItem("Theme", "dark");
}
