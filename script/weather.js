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
  const id = "cca493cacb80210f58c85b849bef2aeb";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${id}&units=metric&lang=sv`
  );
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    // Get connection with the different html elements in the weather section
    const location = document.getElementById("loc");
    const temp = document.getElementById("temp");
    const desc = document. getElementById("desc");
    const div = document.getElementById("img-div");
    const feels = document.getElementById("feels");
    const wind = document.getElementById("wind");
    const humid = document.getElementById("humid");
    // Display different data from the api
    location.textContent = data.name;
    temp.innerHTML = data.main.temp.toPrecision(2) + "&deg;C";
    desc.textContent = data.weather[0].description;
    feels.innerHTML = `Känns som ${data.main.feels_like.toPrecision(2)} &deg;C`;
    wind.textContent = `Vindhastighet ${data.wind.speed} m/sek`;
    humid.textContent = `Luftfuktighet ${data.main.humidity}%`;
    const weatherImg = document.createElement("img");
    let icon = data.weather[0].icon;
    weatherImg.alt = "Weather icon";
    weatherImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    div.appendChild(weatherImg);

  } else {
    console.log(response);
  }
}

/* ~ ~ ~ ~ ~ ~ ~ ~ ~ E N D : 4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */