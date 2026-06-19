function showMessage(text) {
  const message = document.getElementById("message");
  message.textContent = text;
}

function showSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  if (sectionId === "grades") {
    showMessage("Choose Grade 6, Grade 7, or Grade 8 to explore lessons, games, and practice activities.");
  }

  if (sectionId === "guides") {
    showMessage("Interactive Guides will become the main library for your math lessons and learning modules.");
  }
}
