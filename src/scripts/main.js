import Navbar from "./navbar.js";
import Menu from "./menu.js";

// Load the navbar and menu

document.addEventListener('keydown', (event) => {
    // Check for the key combination: Ctrl + ArrowDown
    if (event.ctrlKey && event.key === 'ArrowDown') {
      window.blur();
      alert("The window has been blurred!");
    }
})
const navbar = new Navbar()
const menu = new Menu()