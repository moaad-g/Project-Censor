export function menu() {
    const nudityToggle = document.getElementById("nudityToggleSwitch");
    const profanityToggle = document.getElementById("profanityToggleSwitch");

    if (nudityToggle && profanityToggle) {
        nudityToggle.addEventListener("click", () => {
            alert("nudity");
        });

        profanityToggle.addEventListener("click", () => {
            alert("profanity");
        });
    } else {
        alert("Error, App wasn't able to load properly, please re-install");
    }
}
