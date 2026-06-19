function openSection(section) {
  const message = document.getElementById("message");

  if (section === "grade6") {
    message.textContent = "Grade 6 section will contain lessons, practice tests, and interactive games.";
  }

  if (section === "grade7") {
    message.textContent = "Grade 7 section will contain algebra, proportions, geometry, and practice activities.";
  }

  if (section === "grade8") {
    message.textContent = "Grade 8 section will contain advanced algebra, functions, geometry, and review materials.";
  }

  if (section === "guides") {
    message.textContent = "Interactive Guides will contain your lessons such as Conics, Exponents, Fractions, and Proportions.";
  }

  if (section === "games") {
    message.textContent = "Live Games will contain your Supabase and Firebase scoring games.";
  }

  if (section === "tests") {
    message.textContent = "Practice Tests will contain one-time tests and review assessments.";
  }
}
