const fetchCountry = function (jsonStringOfCountryDetails) {
  const countryObject = JSON.parse(jsonStringOfCountryDetails);

  // check that result isn't null somehow?

  const countryCode = countryObject.results[0].address_components[0].short_name;

  // retrieve info from local storage:
  const storedCountryString = localStorage.getItem(countryCode);

  const storedCountryObject = JSON.parse(storedCountryString);

  generateHtml(storedCountryObject);


};
