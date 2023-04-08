document.addEventListener("DOMContentLoaded", () => {
  for (const link of document.links) {
    if (link.host !== location.host) {
      link.target = "_blank";
      link.rel = "noreferrer noopener";
    }
  }

  console.log(`☞ Welcome to the browser console fellow traveller. \n\n`);

  console.log(`\n\n
	You might have opened it in order to check whether I track you. \n
	I have a Plausible instance, that I ran on my own server. It is publicly available here: https://stats.fabien.cool/fabien.cool  \n
	I do not track any activity other than anonymous page views, that do not require the user's
	consent as there are no personnal information stored or transmitted through these. 
	`);
});
