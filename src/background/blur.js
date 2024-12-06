chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "apply_blur") {
      // Add a CSS class to blur the entire page
      const blurOverlayId = "blur-overlay";
      let overlay = document.getElementById(blurOverlayId);
  
      if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = blurOverlayId;
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        overlay.style.backdropFilter = "blur(8px)";
        overlay.style.zIndex = "999999"; // Ensure it overlays everything
        document.body.appendChild(overlay);
      } else {
        // Remove the overlay if it already exists
        overlay.remove();
      }
  
      sendResponse({ status: "Blur toggled" });
    }
});