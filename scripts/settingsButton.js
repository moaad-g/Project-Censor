export function settingsButton() {
  const settingsButton = document.querySelector("#settingsButton");
  if (settingsButton) {
    settingsButton.addEventListener("click", () => {
      displaySettingsMenu();
    });
  }
}

function displaySettingsMenu() {
  const settingsMenu = document.createElement("div");
  settingsMenu.id = "settingsMenu";
  settingsMenu.style.padding = "10px";
  settingsMenu.style.border = "1px solid #ccc";
  settingsMenu.style.background = "#f9f9f9";
  settingsMenu.style.width = "300px";
  settingsMenu.style.position = "absolute";
  settingsMenu.style.top = "50px";
  settingsMenu.style.right = "50px";
  settingsMenu.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

  // Mock user data
  const userName = "John Doe";
  const userImage = "https://via.placeholder.com/50"; // Placeholder image
  const userSubscription = "Premium";

  // User Info Section
  const userInfo = document.createElement("div");
  userInfo.style.display = "flex";
  userInfo.style.alignItems = "center";
  userInfo.style.marginBottom = "10px";

  const img = document.createElement("img");
  img.src = userImage;
  img.alt = "User Icon";
  img.style.width = "50px";
  img.style.height = "50px";
  img.style.borderRadius = "50%";
  img.style.marginRight = "10px";

  const userDetails = document.createElement("div");
  userDetails.innerHTML = `
        <p style="margin: 0; font-weight: bold;">${userName}</p>
        <p style="margin: 0; color: gray;">${userSubscription}</p>
    `;

  userInfo.appendChild(img);
  userInfo.appendChild(userDetails);
  settingsMenu.appendChild(userInfo);

  // Language Selector Section
  const languageSelector = document.createElement("div");
  languageSelector.innerHTML = `
        <label for="languageDropdown" style="font-weight: bold;">Language: </label>
        <select id="languageDropdown" style="margin-top: 5px;">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
        </select>
    `;
  languageSelector.style.marginBottom = "10px";
  settingsMenu.appendChild(languageSelector);

  // Close Button
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.marginTop = "10px";
  closeButton.style.padding = "5px 10px";
  closeButton.style.border = "none";
  closeButton.style.background = "#007BFF";
  closeButton.style.color = "white";
  closeButton.style.cursor = "pointer";
  closeButton.style.borderRadius = "4px";

  closeButton.addEventListener("click", () => {
    settingsMenu.remove();
  });

  settingsMenu.appendChild(closeButton);

  // Append to document
  document.body.appendChild(settingsMenu);
}
