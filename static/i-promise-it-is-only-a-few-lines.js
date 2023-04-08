document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom loaded");
  for (const link of document.links) {
    if (link.host !== location.host) {
      link.target = "_blank";
      link.rel = "noreferrer noopener";
    }
  }
});
