const displayGraph = function (countryObject) {
  console.log(countryObject);

  const getCountryName = function (countryObject) {
    return countryObject.name;
  }

  const getCountryArea = function (countryObject) {
    return countryObject.area;

  const getCountryPopulation = function (countryObject) {
    return countryObject.population;
  };

  const borderingCountryTwoLetterCodes = countryObject.borders.map( function (threeLetterCode) {
    return localStorage.getItem(threeLetterCode);
  });

  const borderingCountriesObjects = borderingCountryTwoLetterCodes.map( function (code) {
    return localStorage.getItem(code);
  });








    makeGraphPopulation();
    displayGraphPopulation();

    makeGraphArea();
    displayGraphArea();



  const displayGraphPopulation = function (names, populations) {



  };

  const displayGraphArea = function (names, areas) {

  };









};
