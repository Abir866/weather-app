// OpenWeatherMap API configuration
;

const API_KEY = WEATHER_API_KEY; // Replace with your API key from https://openweathermap.org/api
const API_BASE_URL = "https://api.openweathermap.org/data/3.0/onecall?";
// String literal containing the option elements 
const addOption = (city) => {
    return `<option value"${city}">${city.name}<option/>`;
};
// DOM elements
const citySelect = document.getElementById("citySelect");

// cities array from cities.js file externally linked to html for access across all scripts
// FOr ech element in cities array add the item to an option
cities.forEach((city) => {
  
  citySelect.insertAdjacentHTML("beforeend", addOption(city));
});
// Build the API url
function API_URL() {
    const { n, c, la, lo } = citySelect.value;
    console.log(la + " " + n + " " + c + " " + lo);
    // return (
    //     API_BASE_URL +
    //     `lat=${la}&lon=${lo}&exclude=alerts&units=metric&appid=${API_KEY}`
    // );
}
// Call back function to call the API using the API URL returned by API_URL function
function callToAPI() {
  API_URL()
  console.log("In calltoAPI")
    // try {
    //     const response = await fetch(API_URL());
    //     if (response.ok) {
    //         const data = await response.json(); 
    //         console.log(data);
    //     } else {
    //         throw new Error('Failed to fetch data');
    //     }
    // } catch (error) {
    //     console.error('Error:', error); 
    // }
}

// function callToAPI() {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", API_URL(), true);
//     xhr.onload = (e) => {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 console.log(xhr.responseText);
//             } else {
//                 console.log(xhr.statusText);
//             }
//         }
//     };
//     xhr.send(null);
// }
const searchBtn = document.getElementById("searchBtn");
// Once Search Button is clicked, a callback function hadles the event of the click by making an API call
searchBtn.addEventListener("click", callToAPI());
const loading = document.getElementById("loading");
const weatherCard = document.getElementById("weatherCard");
const errorMessage = document.getElementById("errorMessage");

// Weather data elements
const cityNameEl = document.getElementById("cityName");
const currentDateEl = document.getElementById("currentDate");
const tempEl = document.getElementById("temp");
const descriptionEl = document.getElementById("description");
const feelsLikeEl = document.getElementById("feelsLike");
const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("windSpeed");
const pressureEl = document.getElementById("pressure");
const visibilityEl = document.getElementById("visibility");
