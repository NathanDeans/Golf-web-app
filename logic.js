
const submitButton = document.querySelector("#submit")
const input = document.querySelector("#location").value



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
        console.log(result);
    


    const filterData = (data) => {
        const parkObj = {
            name: data.data[0].name,
            description: data.data[0].description,
            image1: data.data[0].images[0].url,
            image2: data.data[0].images[1].url,
            image3: data.data[0].images[2].url,
        }
        console.log(parkObj)
        displayPark(parkObj)
    }

    filterData(result)
};






submitButton.addEventListener("click", () => {
    const input = document.querySelector("#location").value
    getData(input);
    console.log(input)
})

function displayPark(object) {
    let parkName = document.getElementById("parkName");
    let parkDescript = document.getElementById("descript");

    
    
    let displayArea = document.getElementById("displayArea")
    displayArea.style.opacity = "1";
    
   



    parkName.textContent = `${object.name}`
    parkDescript.textContent = `${object.description}`


   let img1 = document.getElementById("img1");
   let img2 = document.getElementById("img2");
   let img3 = document.getElementById("img3");

   img1.src = `${object.image1}`
   img2.src = `${object.image2}`
   img3.src = `${object.image3}`




    
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

