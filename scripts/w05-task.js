/* W05: Programming Tasks */

/* Declare and initialize global variables */
let templeList = [];
const templesElement = document.querySelector("#temples");


/* async displayTemples Function */
const displayTemples = async (temples) => {
  temples.forEach((temple) => {
    const articleElement = document.createElement("article");

    const h3Element = document.createElement("h3");
    h3Element.innerText = `${temple.templeName}`;

    const imgElement = document.createElement("img");
    imgElement.src = temple.imageUrl;
    imgElement.alt = `${temple.templeName} image`;

    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);

    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
      const temples = await response.json();
      temples.forEach((temple) => {
        templeList.push(temple);
      });
      displayTemples(templeList);
    }
};

/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};

/* filterTemples Function */
const filterTemples = (temples) => {
  reset();
  const filter = document.querySelector("#filtered").value;

  switch (filter) {
    case "utah":
      let utahTemples = temples.filter(
        (temple) => temple.location.indexOf("Utah") >= 0
      );
      displayTemples(utahTemples);
      break;

    case "notutah":
      let notUtahTemples = temples.filter(
        (temple) => temple.location.indexOf("Utah") == -1
      );
      displayTemples(notUtahTemples);
      break;

    case "older":
      let templesOlder1950 = temples.filter(
        (temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)
      );
      displayTemples(templesOlder1950);
      break;

    case "all":
      displayTemples(templeList);
      break;
  }
};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templeList);
});

getTemples();
