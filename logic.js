
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
            MondayHours: data.data[0].operatingHours[0].standardHours.monday,
            TuesdayHours: data.data[0].operatingHours[0].standardHours.tuesday,
            WednesdayHours: data.data[0].operatingHours[0].standardHours.wednesday,
            ThursdayHours: data.data[0].operatingHours[0].standardHours.thursday,
            FridayHours: data.data[0].operatingHours[0].standardHours.friday,
            SaturdayHours: data.data[0].operatingHours[0].standardHours.saturday,
            SundayHours: data.data[0].operatingHours[0].standardHours.sunday,
        }
        console.log(result)
        
        displayPark(parkObj)
        getWeatherData(parkObj)
        getWeatherForecast(parkObj)
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

async function getWeatherForecast (parkObj) {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/daily?lat=${parkObj.latitude}&lon=${parkObj.longitude}&language=en&units=auto`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fb2d219427mshda3ac1870a9e47cp14b0e0jsn37d5994fb685',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    
    };
	const response = await fetch(url, options);
	const forecastResult = await response.json();
	console.log(forecastResult);
  
  
  
    const filterForecast = (forecastData) => {
    const forecastObj = {
        high: forecastData.daily.data[0].temperature_max,
        low: forecastData.daily.data[0].temperature_min,
        icon: forecastData.daily.data[0].icon,

        high1: forecastData.daily.data[1].temperature_max,
        low1: forecastData.daily.data[1].temperature_min,
       
        icon1: forecastData.daily.data[1].icon,


        high2: forecastData.daily.data[2].temperature_max,
        low2: forecastData.daily.data[2].temperature_min,
       
        icon2: forecastData.daily.data[2].icon,

        high3: forecastData.daily.data[3].temperature_max,
        low3: forecastData.daily.data[3].temperature_min,
    
        icon3: forecastData.daily.data[3].icon,

        high4: forecastData.daily.data[4].temperature_max,
        low4: forecastData.daily.data[4].temperature_min,
        

        icon4: forecastData.daily.data[4].icon,
        high5: forecastData.daily.data[5].temperature_max,
        low5: forecastData.daily.data[5].temperature_min,
        
        icon5: forecastData.daily.data[5].icon,
        high6: forecastData.daily.data[6].temperature_max,
        low6: forecastData.daily.data[6].temperature_min,
        
        icon6: forecastData.daily.data[6].icon,
        high7: forecastData.daily.data[7].temperature_max,
        low7: forecastData.daily.data[7].temperature_min,
        
        icon7: forecastData.daily.data[7].icon,
        high8: forecastData.daily.data[8].temperature_max,
        low8: forecastData.daily.data[8].temperature_min,
        
        icon8: forecastData.daily.data[8].icon,
        high9: forecastData.daily.data[9].temperature_max,
        low9: forecastData.daily.data[9].temperature_min,
        
        icon9: forecastData.daily.data[9].icon,
        high10: forecastData.daily.data[10].temperature_max,
        low10: forecastData.daily.data[10].temperature_min,

        
        icon10: forecastData.daily.data[10].icon,
        high11: forecastData.daily.data[11].temperature_max,
        low11: forecastData.daily.data[11].temperature_min,

       
        icon11: forecastData.daily.data[11].icon,
        high12: forecastData.daily.data[12].temperature_max,
        low12: forecastData.daily.data[12].temperature_min,

        
        icon12: forecastData.daily.data[12].icon,
        high13: forecastData.daily.data[13].temperature_max,
        low13: forecastData.daily.data[13].temperature_min,
        
        icon13: forecastData.daily.data[13].icon,
    }


  displayForecast(forecastObj)
}
filterForecast(forecastResult)
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

    let mondayHours = document.getElementById("monday")
    let tuesdayHours = document.getElementById("tuesday")
    let wednesdayHours = document.getElementById("wednesday")
    let thursdayHours = document.getElementById("thursday")
    let fridayHours = document.getElementById("friday")
    let saturdayHours = document.getElementById("saturday")
    let sundayHours = document.getElementById("sunday")

    mondayHours.textContent = `Monday:
    ${object.MondayHours}`
    tuesdayHours.textContent = `Tuesday:  ${object.TuesdayHours}`
    wednesdayHours.textContent = `Wednesday:  ${object.WednesdayHours}`
    thursdayHours.textContent = `Thursday:  ${object.ThursdayHours}`
    fridayHours.textContent = `Friday:  ${object.FridayHours}`
    saturdayHours.textContent = `Saturday:  ${object.SaturdayHours}`
    sundayHours.textContent = `Sunday:  ${object.SundayHours}`

   



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

function displayForecast(forecastObj) {

        let forecastTitle = document.getElementById("forecastTitle");
        let hoursTitle = document.getElementById("hoursTitle")

        let high0 = document.getElementById("high0");
        let low0 = document.getElementById("low0");
        let summary0 = document.getElementById("summary0");
        let icon0 = document.getElementById("icon0")
        let high1 = document.getElementById("high1");
        let low1 = document.getElementById("low1");
        let summary1 = document.getElementById("summary1");
        let icon1 = document.getElementById("icon1")
        let high2 = document.getElementById("high2");
        let low2 = document.getElementById("low2");
        let summary2 = document.getElementById("summary2");
        let icon2 = document.getElementById("icon2")
        let high3 = document.getElementById("high3");
        let low3 = document.getElementById("low3");
        let summary3 = document.getElementById("summary3");
        let icon3 = document.getElementById("icon3")
        let high4 = document.getElementById("high4");
        let low4 = document.getElementById("low4");
        let summary4 = document.getElementById("summary4");
        let icon4 = document.getElementById("icon4")
        let high5 = document.getElementById("high5");
        let low5 = document.getElementById("low5");
        let summary5 = document.getElementById("summary5");
        let icon5 = document.getElementById("icon5")
        let high6 = document.getElementById("high6");
        let low6 = document.getElementById("low6");
        let summary6 = document.getElementById("summary6");
        let icon6 = document.getElementById("icon6")
        let high7 = document.getElementById("high7");
        let low7 = document.getElementById("low7");
        let summary7 = document.getElementById("summary7");
        let icon7 = document.getElementById("icon7")
        let high8 = document.getElementById("high8");
        let low8 = document.getElementById("low8");
        let summary8 = document.getElementById("summary8");
        let icon8 = document.getElementById("icon8")
        let high9 = document.getElementById("high9");
        let low9 = document.getElementById("low9");
        let summary9 = document.getElementById("summary9");
        let icon9 = document.getElementById("icon9")
        let high10 = document.getElementById("high10");
        let low10 = document.getElementById("low10");
        let summary10 = document.getElementById("summary10");
        let icon10 = document.getElementById("icon10")
        let high11 = document.getElementById("high11");
        let low11 = document.getElementById("low11");
        let summary11 = document.getElementById("summary11");
        let icon11 = document.getElementById("icon11")
        let high12 = document.getElementById("high12");
        let low12 = document.getElementById("low12");
        let summary12 = document.getElementById("summary12");
        let icon12 = document.getElementById("icon12")
        let high13 = document.getElementById("high13");
        let low13 = document.getElementById("low13");
        let summary13 = document.getElementById("summary13");
        let icon13 = document.getElementById("icon13")


        forecastTitle.textContent = "14 Day Forecast";
        hoursTitle.textContent = "Park Hours"

        

        high0.textContent = `${forecastObj.high}°`
        low0.textContent = `${forecastObj.low}°`
        icon0.src = `${forecastObj.icon}.png`


        high1.textContent = `${forecastObj.high1}°`
        low1.textContent = `${forecastObj.low1}°`
        icon1.src = `${forecastObj.icon1}.png`

        high2.textContent = `${forecastObj.high2}°`
        low2.textContent = `${forecastObj.low2}°`

        icon2.src = `${forecastObj.icon2}.png`

        high3.textContent = `${forecastObj.high3}°`
        low3.textContent = `${forecastObj.low3}°`

        icon3.src = `${forecastObj.icon3}.png`

        high4.textContent = `${forecastObj.high4}°`
        low4.textContent = `${forecastObj.low4}°`

        icon4.src = `${forecastObj.icon4}.png`

        high5.textContent = `${forecastObj.high5}°`
        low5.textContent = `${forecastObj.low5}°`

        icon5.src = `${forecastObj.icon5}.png`

        high6.textContent = `${forecastObj.high6}°`
        low6.textContent = `${forecastObj.low6}°`

        icon6.src = `${forecastObj.icon6}.png`

        high7.textContent = `${forecastObj.high7}°`
        low7.textContent = `${forecastObj.low7}°`

        icon7.src = `${forecastObj.icon7}.png`

        high8.textContent = `${forecastObj.high8}°`
        low8.textContent = `${forecastObj.low8}°`

        icon8.src = `${forecastObj.icon8}.png`

        high9.textContent = `${forecastObj.high9}°`
        low9.textContent = `${forecastObj.low9}°`

        icon9.src = `${forecastObj.icon9}.png`


        high10.textContent = `${forecastObj.high10}°`
        low10.textContent = `${forecastObj.low10}°`

        icon10.src = `${forecastObj.icon10}.png`


        high11.textContent = `${forecastObj.high11}°`
        low11.textContent = `${forecastObj.low11}°`

        icon11.src = `${forecastObj.icon11}.png`


        high12.textContent = `${forecastObj.high12}°`
        low12.textContent = `${forecastObj.low12}°`

        icon12.src = `${forecastObj.icon12}.png`

        high13.textContent = `${forecastObj.high13}°`
        low13.textContent = `${forecastObj.low13}°`

        icon13.src = `${forecastObj.icon13}.png`

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

