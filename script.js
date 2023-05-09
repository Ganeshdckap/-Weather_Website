let result = document.querySelector("#result");
console.log(result);
let input =  document.querySelector("#city")
let button =  document.querySelector("#search-btn")

button.addEventListener("click",()=>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=d155da8fa4a20d79453b73bd3ce86aff`)
  .then(data => data.json())
  .then(datasss =>{
    let windSpeed = datasss.wind.speed
    let typeWeather = datasss.weather[0].main
    let temprature = Math.round(datasss.main.temp- 273.15) 
    let name = datasss.name
    let icon = datasss.weather[0].icon
    
    let temp = `<h2>${temprature}°c</h2>
    <p>${typeWeather}</p>
    <h3>${name}</h3>
    <p><b>Wind Speed :</b> ${windSpeed} Km-ph</p>
    <img src="http://openweathermap.org/img/w/${icon}.png"> `

    result.innerHTML = temp
    
  })
})