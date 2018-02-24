
const displayGraphPopulation = function (countryObject) {

  const bordersOn = countryObject.borders;
  console.log(bordersOn);
  const borderingCountries = bordersOn.map( function (countryCode) {
    return localStorage.getItem(countryCode);
  });
  console.log(borderingCountries);

  const population = countryObject.population;

};

const displayGraphArea = function (countryObject) {
  const bordersOn = countryObject.borders;
  const area = countryObject.area;

};










makeGraphPopulation();
displayGraphPopulation();

makeGraphArea();
displayGraphArea();
