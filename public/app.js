const initialize = function () {

  const mapDiv = document.querySelector("#map");
  const center = { lat: 0, lng: 0 };
  const zoom = 2;

  // create the wrapper for the new map
  const mainMap = new MapWrapper(mapDiv, center, zoom);


  const infowindow = new google.maps.InfoWindow({
    content: "InfoWindow Information Goes Here"
  });

  // set the map up to respond to a click;
  mainMap.addClickEvent();


};

document.addEventListener("DOMContentLoaded", initialize);
