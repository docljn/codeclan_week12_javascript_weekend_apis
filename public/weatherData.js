const generateWeatherData = function (airQualityObject) {

  const weatherDiv = document.getElementById("weather");

  const nearestWeatherStation = airQualityObject.data.city + ", " + airQualityObject.data.country;
  console.log(nearestWeatherStation);

  const weatherData =  airQualityObject.data.current.weather;
  console.log(weatherData);

  const weatherIconSource = "https://airvisual.com/images/" + weatherData.ic + ".png"

  const currentTemperature = weatherData.tp

  const htmlDegrees = "&deg;C"

};
