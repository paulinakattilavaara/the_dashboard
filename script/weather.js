/* ~ ~ ~ ~ NUMBER 4: SHOW CURRENT WEATHER ~ ~ ~ ~ */

// Get the postition using geolocation
navigator.geolocation.getCurrentPosition(async (p) => {
  // Save latitude and longitude in variables
  const lat = p.coords.latitude;
  const long = p.coords.longitude;
  await getWeather(lat, long);
});

async function getWeather(lat, long) {
  // Fetch weather api
  // And put lat and long in the api url
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=cca493cacb80210f58c85b849bef2aeb&units=metric`
  );
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    // Get connection with the different html elements in the weather section
    const location = document.getElementById("loc");
    const temp = document.getElementById("temp");
    const main = document.getElementById("main");
    const desc = document. getElementById("desc");
    // Display different data from the api
    location.textContent = data.name;
    temp.textContent = data.main.temp.toPrecision(2);
    main.textContent = data.weather[0].main; 
    desc.textContent = data.weather[0].description;
    


  } else {
    console.log("Failed to get weather data");
  }
}


/* ~ ~ ~ ~ ~ ~ ~ ~ ~ E N D : 4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */
