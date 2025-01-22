
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          weatherResult.innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
          `;
        } else {
          weatherResult.textContent = 'City not found!';
        }
      })
      .catch(() => {
        weatherResult.textContent = 'An error occurred.';
      });
  }
});
