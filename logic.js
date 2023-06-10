
const submitButton = document.querySelector("#submit")
const input = document.querySelector("#parks").value



async function getData (input) {


    const url = `https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks?parkCode=${input}`;
    const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': 'irF8KB6e1KBTW8dnZj2JKrAsigg63ce9qW6NN0VL',
            'X-RapidAPI-Key': 'fb2d219427mshda3ac1870a9e47cp14b0e0jsn37d5994fb685',
            'X-RapidAPI-Host': 'jonahtaylor-national-park-service-v1.p.rapidapi.com'
        }
    };
    
    
        const response = await fetch(url, options);
        const result = await response.json();
        
        
    


    const filterData = (data) => {
        const parkObj = {
            name: data.data[0].name,
            description: data.data[0].description,
            latitude: data.data[0].latitude,
            longitude: data.data[0].longitude,
            image1: data.data[0].images[0].url,
            image2: data.data[0].images[1].url,
            image3: data.data[0].images[2].url,
            address: data.data[0].addresses[0].line1 + ", " + data.data[0].addresses[0].city + ", " + data.data[0].addresses[0].stateCode ,
            email: data.data[0].contacts.emailAddresses[0].emailAddress,
            phoneNumber: data.data[0].contacts.phoneNumbers[0].phoneNumber,
        }
        console.log(result)
        
        displayPark(parkObj)
        getWeatherData(parkObj)
    }

    filterData(result);
    
};

async function getWeatherData (parkObj) {
    const url = `https://open-weather13.p.rapidapi.com/city/latlon/${parkObj.latitude}/${parkObj.longitude}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fb2d219427mshda3ac1870a9e47cp14b0e0jsn37d5994fb685',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

	const response = await fetch(url, options);
	const weatherResult = await response.json();
	console.log(weatherResult);
    


	
	



const filterWeatherData = (weatherData) => {
    const weatherObj = {

        temp: Math.floor(weatherData.main.temp -273.15) * 9/5 + 32,
    }
    console.log(weatherObj)


  displayWeather(weatherObj)

}

filterWeatherData(weatherResult)
}




submitButton.addEventListener("click", (parkObj) => {
    const input = document.querySelector("#parks").value
    getData(input);
    
    console.log(input)
})




function displayPark(object) {
    let parkName = document.getElementById("parkName");
    let parkDescript = document.getElementById("descript");

    
    
    let displayArea = document.getElementById("displayArea")
    displayArea.style.opacity = "1";
    
    let address = document.getElementById("address");
    address.textContent = `Address: ${object.address}`

    let phoneNumber = document.getElementById("phone");
    phoneNumber.textContent = `Phone Number: ${object.phoneNumber}`;

    let email = document.getElementById("email");
    email.textContent = `Email: ${object.email}`
   



    parkName.textContent = `${object.name}`
    parkDescript.textContent = `${object.description}`


   let img1 = document.getElementById("img1");
   let img2 = document.getElementById("img2");
   let img3 = document.getElementById("img3");

   img1.src = `${object.image1}`
   img2.src = `${object.image2}`
   img3.src = `${object.image3}`
    
}



function displayWeather(weatherObject) {


         let current = document.getElementById("currentWeather");
         current.textContent = `${weatherObject.temp}°`;



    let weatherArea = document.getElementById("weatherArea");
    

}



const scrollers = document.querySelectorAll("[data-carousel-button]");

scrollers.forEach((scroller) => {
  scroller.addEventListener("click", () => {
    const offset = scroller.dataset.carouselButton === "next" ? 1 : -1;
    const slides = scroller
     .closest("[data-carousel]")
     .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

