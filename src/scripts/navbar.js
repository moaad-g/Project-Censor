import { loadTemplate } from "./loadTemplate.js";


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
    const settingsButton = document.querySelector("#settingsButton");
    console.log(settingsButton)
    if (settingsButton) {
      settingsButton.addEventListener("click", () => {
        console.log('click')
      });
    }
  }
}



