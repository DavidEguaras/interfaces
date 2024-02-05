class WeatherApp {
    constructor() {
        this.initElements();
        this.attachEventListeners();
    }

    initElements() {
        this.search = document.querySelector('.search-box button');
        this.weatherBox = document.querySelector('.weather-box');
        this.weatherDetails = document.querySelector('.weather-details');
        this.error404 = document.querySelector('.not-found');
        this.placeholder = this.createPlaceholder();
    }

    createPlaceholder() {
        const placeholder = document.createElement('div');
        placeholder.classList.add('placeholder');
        placeholder.style.width = '300px';
        placeholder.style.height = '200px';
        return placeholder;
    }

    attachEventListeners() {
        this.search.addEventListener('click', this.handleSearch.bind(this));
        const searchButton = document.querySelector('.ubicationForm button');
        const header = document.querySelector('.header');
        searchButton.addEventListener('click', () => {
            header.classList.toggle('expanded');
        });
    }

    handleSearch() {
        const APIKey = 'ee2bbd079479bff65502513ba54b90ee';
        const city = document.querySelector('.search-box input').value;

        if (city === '')
            return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then(response => response.json())
            .then(json => this.updateWeather(json));
    }

    updateWeather(json) {
        if (json.cod === '404') {
            this.weatherBox.replaceWith(this.placeholder);
            this.weatherDetails.replaceWith(this.placeholder.cloneNode());
            this.error404.style.display = 'block';
            return;
        }

        this.error404.style.display = 'none';

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;
            case 'Rain':
                image.src = 'images/rain.png';
                break;
            case 'Snow':
                image.src = 'images/snow.png';
                break;
            case 'Clouds':
                image.src = 'images/cloud.png';
                break;
            case 'Haze':
                image.src = 'images/mist.png';
                break;
            default:
                image.src = '';
        }

        image.classList.add('mx-auto', 'd-block', 'img-fluid', 'rounded');
        image.style.width = '190px';
        image.style.height = 'auto';

        temperature.innerHTML = `<span class="display-5">${parseInt(json.main.temp)}</span><span>°C</span>`;
        description.innerHTML = `<p class="h4">${json.weather[0].description}</p>`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        this.weatherDetails.classList.remove('d-none');
        this.weatherBox.classList.add('mx-auto');
        this.weatherDetails.classList.add('mx-auto');

        this.placeholder.replaceWith(this.weatherBox);
        this.placeholder.replaceWith(this.weatherDetails);
    }
}

const weatherApp = new WeatherApp();


//Background change with Sass
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const button = document.getElementById('changeBackgroundBtn');
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
    let currentImageIndex = 0;

    const changeBackground = () => {
        body.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    };

    button.addEventListener('click', changeBackground);
});
