export function settingsButton() {
  const settingsButton = document.querySelector("#settingsButton");
  if (settingsButton) {
    settingsButton.addEventListener("click", () => {
      alert("SETTINGS");
      displaySettingsMenu();
    });
  }
}

function displaySettingsMenu() {
  // Pop up into a separate window/website for user settings
}

