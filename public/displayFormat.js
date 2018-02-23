const displayCountryDetails = function (jsonStringOfCountryDetails) {
  countryObject = JSON.parse(jsonStringOfCountryDetails);
  const countryName = countryObject.results[0].formatted_address;
  const countryCode = countryObject.results[0].address_components[0].short_name;

  

};
