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
  //add options to select language and show user name and subscription level
}
