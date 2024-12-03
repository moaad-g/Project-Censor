import { loadTemplate } from "./loadTemplate.js";
import Settings from "./settings.js";

export default class Navbar {
  constructor() {
    this.render()
  }

  render() {
    loadTemplate("templates/navbar.html", "navBar").then(() => {
      this.attachListeners();
    })
    .catch(error => {
      console.error("Error loading template:", error);
    });
  }

  attachListeners() {
    const settingsButton = document.getElementById("settingsButton");
    try{
        settingsButton.addEventListener("click", () => {
          settings = new Settings()
        });
    } catch (error) {
      alert('unable to bind listeners')
    }
  }
}



