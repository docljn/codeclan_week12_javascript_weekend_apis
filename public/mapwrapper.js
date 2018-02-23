/*global google*/

const MapWrapper = function (container, coordinates, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coordinates,
    zoom: zoom
  });
};

MapWrapper.prototype.addMarker = function (coordinates) {
  const marker = new google.maps.Marker({
    position: coordinates,
    map: this.googleMap
  });
  return marker;
};

MapWrapper.prototype.makeInfoWindow = function (content) {
  const infowindow = new google.maps.InfoWindow({
    content: content
  });
  return infowindow;
};

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, "click", function (event) {
    const clickCoordinates = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    geolocator(clickCoordinates);
    const marker = this.addMarker(clickCoordinates);
    const infoWindow = this.makeInfoWindow("test");
    infoWindow.open(this.googleMap, marker);

  }.bind(this));
};
