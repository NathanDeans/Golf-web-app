
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
        }
        console.log(parkObj.name)
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
    let parkDescript = document.getElementById("descript")


    parkName.textContent = `${object.name}`
    parkDescript.textContent = `${object.description}`
}