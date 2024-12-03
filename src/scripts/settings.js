import { loadTemplate } from "./loadTemplate.js";

export default class Settings {
  constructor() {
    this.render()
  }

  render() {
    loadTemplate("templates/settings.html", "content").then(() => {
      this.attachListeners();
    })
    .catch(error => {
      console.error("Error loading template:", error);
    });
  }
  attachListeners() {
  }
}

