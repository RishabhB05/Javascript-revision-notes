//Building a fetch API which shows details of a city
const button = document.querySelector('#clickButton');
const input = document.querySelector('#userinput');

const cityName = document.querySelector('#cityName');
const cityTime = document.querySelector('#cityTime');
const cityTemp = document.querySelector('#cityTemp');

async function getData(city){
  const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=04980d1181ba4a6a81571043252211&q=${city}&aqi=no`);
  return await promise.json();
}

button.addEventListener('click', async function(){
    const value = input.value;
    const result = await getData(value); 

    cityName.innerHTML = result.location.name;
    cityTime.innerHTML = result.location.localtime; 
    cityTemp.innerHTML = result.current.temp_c;
})