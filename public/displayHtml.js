const generateHtml = function (countryObject) {
  console.log(countryObject);
  const displayDiv = document.getElementById("description");
  displayDiv.innerHtml = "";

  const bordersOn = countryObject.borders;
  const name = countryObject.name;
  const capital = countryObject.capital;
  const population = countryObject.population;
  const adjective = countryObject.demonym;
  const flag = countryObject.flag;
  const region = countryObject.region;

  const nameHeading = document.createElement("h2");
  nameHeading.innerText = name;


  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.innerText = "Capital: " + capital + "\n" + "Population: " + population;
  const img = document.createElement("img");
  img.height = 100;
  img.src = flag;
  img.alt = adjective + " Flag";

  ul.appendChild(li);

  displayDiv.appendChild(nameHeading);
  displayDiv.appendChild(img);
  displayDiv.appendChild(ul);

};
