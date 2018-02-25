const generateHtml = function (countryObject) {
  const descriptionDiv = document.getElementById("description");
  descriptionDiv.innerHTML = "";

  const name = countryObject.name;
  const capital = countryObject.capital;
  const population = countryObject.population;
  const adjective = countryObject.demonym;
  const flag = countryObject.flag;
  const region = countryObject.region;

  const nameHeading = document.createElement("h2");
  nameHeading.innerText = name;

  const img = document.createElement("img");
  img.height = 100;
  img.src = flag;
  img.alt = adjective + " Flag";

  const ul = document.createElement("ul");

  const li = document.createElement("li");
  li.innerText = "Capital: " + capital + "\n" + "Population: " + population + "\n" + region + " region";

  ul.appendChild(li);

  descriptionDiv.appendChild(nameHeading);
  descriptionDiv.appendChild(img);
  descriptionDiv.appendChild(ul);


  displayGraph(countryObject);


};
