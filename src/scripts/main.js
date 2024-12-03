import Navbar from "./navbar.js";
import { menu } from "./menu.js";
import { loadTemplate } from "./loadTemplate.js";

// Load the navbar and template
const navbar = new Navbar()

loadTemplate("templates/menu.html", "content").then(() => {
  menu();
});