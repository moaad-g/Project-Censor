import { settingsButton } from "./settingsButton.js";

function loadTemplate(file, containerId) {
  return fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Could not load file: ${file}`);
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById(containerId).innerHTML = html;
    })
    .catch((error) => console.error(error));
}

// Load the navbar and template
loadTemplate("templates/navbar.html", "navBar").then(() => {
  settingsButton();
}); //once loaded, chained a settings button function on to the navbar
loadTemplate("templates/menu.html", "menu");
