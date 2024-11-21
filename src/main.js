function loadTemplate(file, containerId) {
    fetch(file)
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
loadTemplate("templates/navbar.html", "navBar");
loadTemplate("templates/menu.html", "templateContainer");