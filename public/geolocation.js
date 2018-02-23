// const API_LOCATIONS = {
//   googleGeocoding: {
//     url: "https://maps.googleapis.com/maps/api/geocode/",
//     key: "AIzaSyCxu-Q3l-hZjd8dRAPQwmluUCm85GiCAME"
//   },

// to make a request, append &key=YOUR_API_KEY to the end of the html request.


// request format:   http://maps.googleapis.com/maps/api/geocode/outputFormat?parameters





//  correct request for location data:   https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY





//NB: console.dir(image); gives the node representation
//NB: console.log(image); gives a simple text representation

const geolocator = function (location) {

  const url = API_LOCATIONS.googleGeocoding.url;
  const key = API_LOCATIONS.googleGeocoding.key;

  let completeURL = url + "latlng=" + location.lat + "," + location.lng + "&key=" + key;


  makeGeoRequest(completeURL, carryOutAPIRequest);

};

// get data from api (call in app, after DOMContentLoaded event)
const makeGeoRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const carryOutAPIRequest = function () {
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  console.log(jsonString);
};
