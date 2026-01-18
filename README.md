# Weather App

A minimalist and modern weather application using OpenWeatherMap API.

## Features

- Clean, minimalist design
- City selection from multiple countries
- Real-time weather data
- Temperature, humidity, wind speed, pressure, and visibility information
- Responsive layout for mobile and desktop

## Setup

1. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api):
   - Sign up at https://openweathermap.org/
   - Go to API keys section in your account
   - Copy your API key

2. Open `script.js` and replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

3. Open `index.html` in your web browser

## How to Use

1. Select a city from the dropdown menu
2. Click "Get Weather" button
3. View current weather information for the selected city

## File Structure

- `index.html` - Main HTML file
- `styles.css` - Minimalist CSS styling
- `script.js` - JavaScript for API calls and UI logic
- `cities.js` - Database of cities with coordinates
- `README.md` - This file

## API Documentation

This app uses the OpenWeatherMap Current Weather Data API:
- Documentation: https://openweathermap.org/current
- Free tier: 1,000 calls per day

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- OpenWeatherMap API
- Google Fonts (Inter)
