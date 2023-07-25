const apiKey = '05376067fded4660a3c130017231307';
const searchButton = document.getElementById('search_button');
const searchInput = document.getElementById('input');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');



searchInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    //event.preventDefault();
    document.getElementById('searchButton').click();
  }
});

// Alert on empty input
searchButton.addEventListener('click', () => { if(searchInput.value == ''){
  alert( "Please Enter the Location");
}
});



// action on search button by clicking
searchButton.addEventListener('click', () => {
  const location = searchInput.value;
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
    .then(response => response.json())
    .then(data => {
      const temperature = data.current.temp_c;
      const description = data.current.condition.text;
      locationElement.textContent = `Weather in ${location}:`;
      temperatureElement.textContent = `Temperature: ${temperature}°C`;
      descriptionElement.textContent = `${description}`;
    })
    .catch(error => {
      console.error('Error:', error);
      locationElement.textContent = '';
      temperatureElement.textContent = '';
      descriptionElement.textContent = 'Failed to fetch weather data.';
    });
});