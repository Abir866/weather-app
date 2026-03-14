// OpenWeatherMap API configuration
const API_KEY = window.WEATHER_API_KEY;
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// DOM elements
const citySelect = document.getElementById("citySelect");
const searchBtn = document.getElementById("searchBtn");
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

function addOption(city, index) {
  return `<option value="${index}">${city.name}, ${city.country}</option>`;
}

function setLoadingState(isLoading) {
  loading.style.display = isLoading ? "block" : "none";
  weatherCard.style.display = isLoading ? "none" : weatherCard.style.display;
  errorMessage.style.display = "none";
}

function showError(message = "Failed to load weather data. Please try again later.") {
  loading.style.display = "none";
  weatherCard.style.display = "none";
  errorMessage.style.display = "block";
  const text = errorMessage.querySelector("p");
  if (text) text.textContent = message;
}

function renderWeather(city, data) {
  const now = new Date();
  cityNameEl.textContent = `${city.name}, ${city.country}`;
  currentDateEl.textContent = now.toLocaleString();
  tempEl.textContent = Math.round(data.main.temp);
  descriptionEl.textContent = data.weather?.[0]?.description ?? "--";
  feelsLikeEl.textContent = Math.round(data.main.feels_like);
  humidityEl.textContent = `${data.main.humidity}%`;
  windSpeedEl.textContent = `${data.wind.speed} m/s`;
  pressureEl.textContent = `${data.main.pressure} hPa`;
  visibilityEl.textContent = `${Math.round((data.visibility ?? 0) / 1000)} km`;

  loading.style.display = "none";
  errorMessage.style.display = "none";
  weatherCard.style.display = "block";
}

function buildApiUrl(city) {
  const params = new URLSearchParams({
    lat: String(city.lat),
    lon: String(city.lon),
    units: "metric",
    appid: API_KEY,
  });
  return `${API_BASE_URL}?${params.toString()}`;
}

async function callToAPI() {
  if (!API_KEY || API_KEY === "PUT_YOUR_API_KEY_HERE") {
    showError("API key not found. Put your key in secrets.js");
    return;
  }

  const selectedIndex = citySelect.value;
  if (selectedIndex === "") {
    showError("Please select a city first.");
    return;
  }

  const city = cities[Number(selectedIndex)];
  if (!city) {
    showError("City not found.");
    return;
  }

  setLoadingState(true);

  try {
    const response = await fetch(buildApiUrl(city));
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    renderWeather(city, data);
  } catch (error) {
    console.error("Weather API error:", error);
    showError("Failed to load weather data. Check API key and internet.");
  }
}

// cities array from cities.js is loaded via script tag in index.html
cities.forEach((city, index) => {
  citySelect.insertAdjacentHTML("beforeend", addOption(city, index));
});

searchBtn.addEventListener("click", callToAPI);
