let zone = document.querySelector('.location-zone');
let address = '';
let lat = 0;
let long = 0;
let proxy = "https://cors-anywhere.herokuapp.com/"

document.querySelector('#submit').addEventListener("click", (address) => {
    address = zone.value;
    let geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiamFpcmFnYSIsImEiOiJjanVnbDFjNXgwbXV4NDRwaTA2dDVuYm56In0.h4ZbMVSoFR2ma9-rlKK38g`;
    fetch(geoUrl)
     .then(response => {
         return response.json()
     })
     .then(data => {
         lat = data.features[0].geometry.coordinates[1]
         long = data.features[0].geometry.coordinates[0]

         let url = `${proxy}https://api.darksky.net/forecast/d1103a18746858e2e1d4fe9c3b77e9ed/${lat},${long}`;
         fetch(url)
         .then(response => {
            return response.json()
         })
         .then(data => {
            console.log(data.currently);
            document.querySelector(".degree").innerHTML = data.currently.apparentTemperature
            document.querySelector(".description").innerHTML = data.currently.summary
         })
     })
})






