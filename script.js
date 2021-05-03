let API_Key = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeather = (city) => {
    const url = "http://api.openweathermap.org/data/2.5/weather";
    const full_url = `${url}?q=${city}&appid=${API_Key}&units=imperial`
    const weatherPromise = fetch(full_url);
    return weatherPromise.then((response)=>{
        return response.json();
    })
}
search = () =>{
    const city = document.getElementById("city-input").value;
    getWeather(city).then((response)=>{
      // console.log(response);
       display(response);
    })
    .catch((error)=>{
        console.log(error);
    })
}
display = (data) => {
    document.getElementById("city-name").innerText = data.name;
    document.getElementById("weather-type").innerText = data.weather[0].main;
    document.getElementById("temp").innerText = data.main.temp + "F";
    document.getElementById("min-temp").innerText = data.main.temp_max + "F";
    document.getElementById("max-temp").innerText = data.main.temp_min + "F";
}
