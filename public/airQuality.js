// airQuality: {
//   url: "https://www.airvisual.com/user/api",
//   key: "GLJGqzbnNkn4rNLXf"
// }

const getAirQuality = function (latlngArray) {

  const url = API_LOCATIONS.airQuality.url;
  const key = API_LOCATIONS.airQuality.key;

  let completeURL = url + "nearest_city?" + "lat=" + latlngArray[0] + "&lon=" + latlngArray[1] + "&key=" + key;
  console.log(completeURL);

  makeAirQualityRequest(completeURL, sendAPIRequest);

};

const makeAirQualityRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const sendAPIRequest = function () {
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  // call a function which will get the json back in a usable format in the main app?
  console.log(JSON.parse(jsonString));

  const airQualityObject = JSON.parse(jsonString);

  

};


/*



const carryOutAPIRequest = function () {
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  // call a function which will get the json back in a usable format in the main app?
  fetchCountry(jsonString);

};

*/
