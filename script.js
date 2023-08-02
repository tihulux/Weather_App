const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'dd3b379f83286bfc9988679d961d842d';

const setQuery = (e) => {
  if (e.keyCode == '13') getResult(searchBar.value);
};

const searchBar = document.getElementById('search');
searchBar.addEventListener('keypress', setQuery);

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};
const displayResult = (result) => {
  let city = document.querySelector('.city');
  city.innerText = `${result.name}, ${result.sys.country}`;
  let temp = document.querySelector('.temp');
  temp.innerText = `${Math.round(result.main.temp)}°C`;
  let desc = document.querySelector('.desc');
  desc.innerText = `${result.weather[0].description}`;
  let minmax = document.querySelector('.minmax');
  minmax.innerText = `Min/Max Temperature : ${Math.round(
    result.main.temp_min
  )}°C/ ${Math.round(result.main.temp_max)}°C`;
  let hum = document.querySelector('.hum');
  hum.innerText = `Humidity : %${result.main.humidity}`;
  let wind = document.querySelector('.wind');
  wind.innerText = `Wind (Degree/Speed) = ${result.wind.deg} / ${result.wind.speed}`;
  console.log(result);
};
