
const cityForm = document.querySelector('[data-js="insert-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const citytemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[ data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const backgroundBody = document.querySelector('body')

const showCityCard = () => {
    if (cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none')
    }
}

const showCityWeatherInfo = async cityName => {
    const [{ Key, LocalizedName }] = await getCityData(cityName)
    const [{ WeatherText, Temperature, IsDayTime}] = await getCityWeather(Key)
    timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'
    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    citytemperatureContainer.textContent = Temperature.Metric.Value
    if(IsDayTime){
        backgroundBody.classList.add('isDay')
    } else{
        backgroundBody.classList.add('isNigth')
    }
}

const showCity = () => {
    const city = localStorage.getItem('city')
    if (city) {
        showCityCard()
        showCityWeatherInfo(city)
    }
}

cityForm.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.city.value
    showCityCard()
    showCityWeatherInfo(inputValue)
    localStorage.setItem('city', inputValue)
    cityForm.reset()
})

showCity()