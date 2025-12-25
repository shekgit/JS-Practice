// script.js - Weather App with OpenWeatherMap Icons
const apiKey = `6e6afcd79f7eda51435e5cb197990ae8`;

let currentCity = `delhi`;
let lat, lon;

let searchIcon = document.querySelector('.search-icon');
let searchInput = document.querySelector('.search-input');
let searchContainer = document.querySelector('.search-container');

// Search Icon Click Event - First click expands, second click searches
searchIcon.addEventListener('click', function() {
    // If input is not visible (first click)
    if (!searchInput.classList.contains('active')) {
        // Show input
        searchInput.classList.add('active');
        searchContainer.classList.add('active');
        searchInput.focus();
    }
    // If input is visible AND has text (second click - search)
    else if (searchInput.value.trim() !== '') {
        const city = searchInput.value.trim();
        console.log("Search icon clicked - Searching for city:", city);

        // API call
        getWeatherData(city);

        // Clear input but keep it open
        searchInput.value = '';
        searchInput.focus();
    }
    // If input is visible but empty (close it)
    else {
        searchInput.classList.remove('active');
        searchContainer.classList.remove('active');
        searchInput.value = '';
    }
});

// Input Enter Key Event
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const city = this.value.trim();
        if (city) {
            console.log("Enter pressed - Searching for city:", city);

            // API call
            getWeatherData(city);

            // Clear input but keep it open
            this.value = '';
            this.focus();
        }
    }
});

// Click outside to close search
document.addEventListener('click', function(e) {
    if (!searchContainer.contains(e.target) &&
        !searchIcon.contains(e.target) &&
        searchInput.classList.contains('active')) {

        searchInput.classList.remove('active');
        searchContainer.classList.remove('active');
        searchInput.value = '';
    }
});

// Escape key to close search
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchInput.classList.contains('active')) {
        searchInput.classList.remove('active');
        searchContainer.classList.remove('active');
        searchInput.value = '';
    }
});

// Function to get current weather
async function getCurrentWeather(lat, lon) {
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const response = await fetch(currentUrl);
    const data = await response.json();
    return data;
}

// Main function to get weather data
let getWeatherData = async (city) => {
    try {
        // Show loading
        const tempElement = document.querySelector('.wdm-t-left h1');
        if (tempElement) tempElement.textContent = "Loading...";

        // Also show loading in forecast
        const forecastElements = document.querySelectorAll('.forecast');
        forecastElements.forEach(el => {
            el.innerHTML = `<h3>...</h3><h4>Loading</h4>`;
        });

        const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
        let geoData = await fetch(geoUrl);

        if (!geoData.ok) {
            throw new Error('Incorrect city name. Retry.');
        }

        let geoJson = await geoData.json();

        if (geoJson.length === 0) {
            throw new Error('City not found. Please check the spelling.');
        }

        lat = geoJson[0].lat;
        lon = geoJson[0].lon;

        // Get both forecast and current weather
        const [forecastData, currentData] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=56&appid=${apiKey}`).then(r => r.json()),
            getCurrentWeather(lat, lon)
        ]);

        console.log("Forecast Data:", forecastData);
        console.log("Current Weather Data:", currentData);

        // Update UI with both datasets
        updateWeatherUI(forecastData, currentData);
    }
    catch (error) {
        console.error(error.message);
        // Show error to user
        alert(error.message);
        // Reset to loading state
        const tempElement = document.querySelector('.wdm-t-left h1');
        if (tempElement) tempElement.textContent = "--°C";
    }
};

// Function to get weather icon - UPDATED WITH OPENWEATHERMAP ICONS
function getWeatherIcon(condition, iconCode = null) {
    // If OpenWeatherMap icon code is available, use it
    if (iconCode) {
        return `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" 
                alt="${condition}" 
                class="weather-icon"
                title="${condition}">`;
    }

    // Fallback to emojis if no icon code
    const icons = {
        'clear': '☀️',
        'clouds': '☁️',
        'rain': '🌧️',
        'snow': '❄️',
        'thunderstorm': '⛈️',
        'drizzle': '🌦️',
        'mist': '🌫️',
        'haze': '🌫️',
        'fog': '🌫️'
    };

    condition = condition.toLowerCase();
    for (let key in icons) {
        if (condition.includes(key)) {
            return icons[key];
        }
    }
    return '🌈';
}

// Function to check if it's day time
function isDayTime(sunrise, sunset) {
    const now = Math.floor(Date.now() / 1000); // Current time in seconds
    return now > sunrise && now < sunset;
}

// Function to update forecast section
function updateForecast(data, currentData) {
    const forecastElements = document.querySelectorAll('.forecast');
    const totalForecasts = data.list.length;

    // Get day/night info from current data
    let isDay = true;
    if (currentData && currentData.sys) {
        isDay = isDayTime(currentData.sys.sunrise, currentData.sys.sunset);
    }

    // Update title
    const forecastTitle = document.querySelector('.wdm-mid h3');
    if (forecastTitle) {
        forecastTitle.textContent = `7-Days Forecast`;
    }

    // Group forecasts by day (API returns 3-hour intervals, we need daily)
    const dailyForecasts = [];
    const processedDays = new Set();

    data.list.forEach(forecast => {
        const date = new Date(forecast.dt_txt);
        const dayKey = date.toDateString();

        if (!processedDays.has(dayKey) && dailyForecasts.length < 7) {
            // Take forecast closest to noon (12:00) for better representation
            const hour = date.getHours();
            if (hour >= 11 && hour <= 15) {
                dailyForecasts.push({
                    date: date,
                    forecast: forecast,
                    dayKey: dayKey
                });
                processedDays.add(dayKey);
            }
        }
    });

    // If we don't have 7 days, fill with any available forecasts
    if (dailyForecasts.length < 7) {
        data.list.forEach(forecast => {
            const date = new Date(forecast.dt_txt);
            const dayKey = date.toDateString();

            if (!processedDays.has(dayKey) && dailyForecasts.length < 7) {
                dailyForecasts.push({
                    date: date,
                    forecast: forecast,
                    dayKey: dayKey
                });
                processedDays.add(dayKey);
            }
        });
    }

    // Update forecast cards
    dailyForecasts.forEach((dayData, index) => {
        if (forecastElements[index]) {
            const forecast = dayData.forecast;
            const date = dayData.date;

            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            const dateStr = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
            const temp = Math.round(forecast.main.temp);
            const icon = getWeatherIcon(forecast.weather[0].description, forecast.weather[0].icon);

            forecastElements[index].innerHTML = `
                <h3>${temp}°C</h3>
                <div class="icon-container">
                    ${icon}
                </div>
                <h4>${dateStr}</h4>
                <h4>${dayName}</h4>
            `;
            forecastElements[index].style.display = 'flex';
        }
    });

    // Hide any remaining cards
    for (let i = dailyForecasts.length; i < 7; i++) {
        if (forecastElements[i]) {
            forecastElements[i].style.display = 'none';
        }
    }
}

// Function to update current weather icon in left panel
function updateCurrentWeatherIcon(currentData) {
    const leftPanel = document.querySelector('.wdm-t-left');

    // Remove any existing weather icon
    const existingIcon = leftPanel.querySelector('.current-weather-icon');
    if (existingIcon) {
        existingIcon.remove();
    }

    // Create and add new weather icon
    if (currentData && currentData.weather && currentData.weather[0]) {
        const weather = currentData.weather[0];
        const iconHTML = getWeatherIcon(weather.description, weather.icon);

        const iconContainer = document.createElement('div');
        iconContainer.className = 'current-weather-icon';
        iconContainer.innerHTML = iconHTML;

        // Insert icon after temperature
        const tempElement = leftPanel.querySelector('h1');
        if (tempElement) {
            tempElement.insertAdjacentElement('afterend', iconContainer);
        }
    }
}

// Main function to update UI elements
function updateWeatherUI(forecastData, currentData) {
    console.log("Updating UI with:", currentData);

    // Update current weather icon
    updateCurrentWeatherIcon(currentData);

    // Left section - Current weather
    const tempElement = document.querySelector('.wdm-t-left h1');
    const descElement = document.querySelector('.wdm-t-left h2');
    const cityElement = document.querySelector('.wdm-t-left p:nth-of-type(1)');
    const dateElement = document.querySelector('.wdm-t-left p:nth-of-type(2)');

    if (tempElement) tempElement.textContent = `${Math.round(currentData.main.temp)}°C`;
    if (descElement) {
        descElement.textContent = currentData.weather[0].description;
        descElement.style.textTransform = 'capitalize';
    }
    if (cityElement) cityElement.textContent = `${currentData.name}, ${currentData.sys.country}`;
    if (dateElement) {
        const date = new Date(currentData.dt * 1000);
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        dateElement.textContent = date.toLocaleDateString('en-US', options);
    }

    // Right section - Weather highlights

    // Wind Status (convert m/s to km/h)
    const windElement = document.querySelector('.wdm-t-right-2-top-1:nth-child(1) h2:nth-child(2)');
    if (windElement) {
        const windSpeedKmh = (currentData.wind.speed * 3.6).toFixed(1);
        windElement.textContent = `${windSpeedKmh} km/h`;

        // Add wind direction if available
        if (currentData.wind.deg) {
            const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
            const index = Math.round(currentData.wind.deg / 45) % 8;
            windElement.textContent += ` ${directions[index]}`;
        }
    }

    // UV Index - Still N/A (need separate API)
    const uvElement = document.querySelector('.wdm-t-right-2-top-1:nth-child(2) h2:nth-child(2)');
    if (uvElement) uvElement.textContent = "N/A";

    // Sunrise & Sunset
    const sunriseElement = document.querySelector('.wdm-t-right-2-top-1:nth-child(3) h2:nth-child(2)');
    const sunsetElement = document.querySelector('.wdm-t-right-2-top-1:nth-child(3) h2:nth-child(3)');
    if (sunriseElement && sunsetElement && currentData.sys) {
        const sunriseTime = new Date(currentData.sys.sunrise * 1000);
        const sunsetTime = new Date(currentData.sys.sunset * 1000);

        sunriseElement.textContent = `Sunrise: ${sunriseTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
        sunsetElement.textContent = `Sunset: ${sunsetTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
    }

    // Humidity
    const humidityElement = document.querySelector('.wdm-t-right-2-bot-1:nth-child(1) h2:nth-child(2)');
    if (humidityElement) humidityElement.textContent = `${currentData.main.humidity}%`;

    // Visibility
    const visibilityElement = document.querySelector('.wdm-t-right-2-bot-1:nth-child(2) h2:nth-child(2)');
    if (visibilityElement) {
        if (currentData.visibility) {
            const visibilityKm = (currentData.visibility / 1000).toFixed(1);
            visibilityElement.textContent = `${visibilityKm} km`;
        } else {
            visibilityElement.textContent = "N/A";
        }
    }

    // Feels Like
    const feelsLikeElement = document.querySelector('.wdm-t-right-2-bot-1:nth-child(3) h2:nth-child(2)');
    if (feelsLikeElement) feelsLikeElement.textContent = `${Math.round(currentData.main.feels_like)}°C`;

    // Update forecast section
    updateForecast(forecastData, currentData);
}

// Function to get weather data by coordinates (for geolocation)
async function getWeatherDataByCoords(lat, lon) {
    try {
        // Show loading
        const tempElement = document.querySelector('.wdm-t-left h1');
        if (tempElement) tempElement.textContent = "Loading...";

        // Show loading in forecast
        const forecastElements = document.querySelectorAll('.forecast');
        forecastElements.forEach(el => {
            el.innerHTML = `<h3>...</h3><h4>Loading</h4>`;
        });

        // Get both forecast and current weather using coordinates
        const [forecastData, currentData] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`).then(r => r.json()),
            getCurrentWeather(lat, lon)
        ]);

        console.log("Weather by Coordinates - Forecast:", forecastData);
        console.log("Weather by Coordinates - Current:", currentData);

        // Update UI with both datasets
        updateWeatherUI(forecastData, currentData);

        // Also update currentCity variable with the found city name
        if (currentData && currentData.name) {
            currentCity = currentData.name;
            console.log("Detected location:", currentCity);
        }
    }
    catch (error) {
        console.error("Error getting weather by coordinates:", error);
        // Fallback to default city
        getWeatherData(currentCity);
    }
}

// Get user's current location on page load
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;
            console.log("User location found:", userLat, userLon);

            // Show weather for current location instead of Delhi
            getWeatherDataByCoords(userLat, userLon);
        },
        (error) => {
            console.log("Geolocation permission denied or error:", error);
            // Use default city (Delhi) if user denies location
            getWeatherData(currentCity);
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
} else {
    console.log("Geolocation not supported by browser");
    getWeatherData(currentCity);
}

// Initialize with default city on page load
window.addEventListener('DOMContentLoaded', () => {
    // Set initial loading state
    const tempElement = document.querySelector('.wdm-t-left h1');
    if (tempElement) tempElement.textContent = "Loading...";

    // If geolocation takes time or fails, this will load Delhi by default
    setTimeout(() => {
        if (!lat && !lon) {
            getWeatherData(currentCity);
        }
    }, 2000);
});