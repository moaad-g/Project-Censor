console.log('blurring')
chrome.commands.onCommand.addListener((command) => {
  console.log("Command received:", command);
  if (command === "blur_tab") {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "apply_blur" });
      }
    });
  }
});