let loc = document.getElementById('cityName').value;
let apikey='d94e277a84546452d3b666cdfd675b48'

let fetching = async () => {
    try {
        const locationResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=e01bd7b961a9452dba374754242303&q=${document.getElementById('cityName').value}&aqi=no`);
        if (!locationResponse.ok) {
            throw new Error('Failed to fetch location data');
        }
        const locationData = await locationResponse.json();
        const {temp_c,temp_f,condition} = locationData.current;
        const {name,country} = locationData.location;
        console.log(name,temp_c,temp_f );
        document.getElementById('temp').innerHTML=`${temp_c}°C`
        document.getElementById('mintemp').innerHTML=`${temp_f}°F`
        document.getElementById('city').innerHTML=`${name},${country}`
        document.getElementById('maxtemp').innerHTML=`${condition.text}`
        document.getElementById('img').src=`${condition.icon}`

       
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

document.getElementById('btn').addEventListener('click', fetching);
