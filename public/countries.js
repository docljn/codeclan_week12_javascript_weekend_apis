// this stores the data from the open countries api in local storage under "countries"


const countries = function(){
  const countriesUrl = API_LOCATIONS.restCountries["url"];
  const getCountries = function () {
    makeRequest(countriesUrl, requestComplete);
  }();
};

const makeRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const requestComplete = function () {
  if (this.status !== 200) return;
  const jsonString = this.responseText;
  // localStorage.setItem("countries", jsonString);
  const countriesArray = JSON.parse(jsonString);

  countriesArray.forEach( function (country) {
    const shortName = country.alpha2Code;
    const countryString = JSON.stringify(country);
    localStorage.setItem(shortName, countryString);
  });
};

// call countries once the basic structure of the webpage has loaded
document.addEventListener("DOMContentLoaded", countries);
