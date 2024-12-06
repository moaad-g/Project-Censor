export function loadTemplate(file, containerId) {
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