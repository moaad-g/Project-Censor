import { loadTemplate } from "./loadTemplate.js";

export default class Menu {
  constructor() {
    this.render()
  }

  render() {
    loadTemplate("templates/menu.html", "content").then(() => {
      this.attachListeners();
    })
    .catch(error => {
      console.error("Error loading template:", error);
    });
  }
  attachListeners() {
  }
}

