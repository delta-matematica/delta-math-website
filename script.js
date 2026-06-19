function setLanguage(language) {
  const elements = document.querySelectorAll("[data-en]");

  elements.forEach(element => {
    element.textContent = element.getAttribute(`data-${language}`);
  });

  localStorage.setItem("deltaLanguage", language);
  document.documentElement.lang = language;
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("deltaLanguage") || "en";
  setLanguage(savedLanguage);
});
