const button = document.getElementById('search-button');
const inputCity = document.getElementById('input-city');

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');


async function getData(cityName) {
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=ace9c3888e2d40aeab861846242003&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

button.addEventListener('click', async () => {
    if (inputCity.value == '') {
        alert("Please enter the city name")
    } else {
        const value = inputCity.value;
        const result = await getData(value);
        // console.log(result)

        cityName.innerText = `${result.location.name} - ${result.location.country}`;
        cityTime.innerText = result.location.localtime;
        cityTemp.innerText = `${result.current.temp_c}° C`
    }
})