// OpenWeatherMap API configuration
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your API key from https://openweathermap.org/api
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM elements
const citySelect = document.getElementById('citySelect');
const searchBtn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');
const weatherCard = document.getElementById('weatherCard');
const errorMessage = document.getElementById('errorMessage');

// Weather data elements
const cityNameEl = document.getElementById('cityName');
const currentDateEl = document.getElementById('currentDate');
const tempEl = document.getElementById('temp');
const descriptionEl = document.getElementById('description');
const feelsLikeEl = document.getElementById('feelsLike');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('windSpeed');
const pressureEl = document.getElementById('pressure');
const visibilityEl = document.getElementById('visibility');
