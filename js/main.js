window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => console.log("Service Worker Registered"))
      .catch((error) => console.error("Service Worker not registered:", error));
  }
};
