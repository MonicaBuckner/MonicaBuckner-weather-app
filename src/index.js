  let units = "imperial";
  let apiKey = "2c596f2ffa75a1e706f3d5b23375abfb";
  
let h4 = document.querySelector("h4");
  let now = new Date();
  let hours = now.getHours();
   if (hours < 10) {
    hours = `0${hours}`;
   }
  let minutes = now.getMinutes();
   if (minutes < 10) {
    minutes = `0${minutes}`;
    }
  let date = now.getDate();
  let year = now.getFullYear();
  let weekDays = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
   let day = weekDays[now.getDay()];
  let monthsOfYear = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
   let month = monthsOfYear[now.getMonth()];
  h4.innerHTML = `${day} ${month} ${date}, ${year}`;

  let h5 = document.querySelector("h5");
  h5.innerHTML = `${hours}:${minutes}`;


function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#location-input");
  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    let city = searchInput.value;
    h1.innerHTML = `${searchInput.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`; 
    axios.get(apiUrl).then(updateWeather); 
  } else {
    h1.innerHTML = null;
    alert(`Please enter a location`);
    }
}
let form = document.querySelector("#change-location")
form.addEventListener("submit", searchCity);

function updateWeather(response) {
  console.log(response);
  let condition = response.data.weather[0].main
  let currentTemp = Math.round(response.data.main.temp)
document.querySelector("#condition").innerHTML = `${condition}, ${currentTemp}° F`;
document.querySelector("#highTemp").innerHTML = Math.round(response.data.main.temp_max);
document.querySelector("#lowTemp").innerHTML = Math.round(response.data.main.temp_min);
}

