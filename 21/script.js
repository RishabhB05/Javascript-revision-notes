//fetching current location of user

const button = document.getElementById("current");

async function gotLocation(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
}

function gotError(error){
    console.log("Error occurred. Error code: " + error.code);
}

button.addEventListener('click', async function(){
    //it will take two callback functions as arguments
     navigator.geolocation.getCurrentPosition(gotLocation, gotError);
})