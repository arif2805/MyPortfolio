
let requestUrl= "https://restcountries.com/v3.1/all";
let rates = {};

// function searchBtn(){
//     let searchBtn = document.getElementById("result");
//     let countryInp = document.getElementById("country-inpt");
//     searchBtn.textContent= countryInp.value;
//     console.log();
// }
// async function take less code then normal fetch
marrigeLogic();
async function fetchCountries(){
    let response = await fetch(requestUrl);
    let data = await response.jeson();

    let countries = [];
    let populations = [];

    for (let i=0;i<data.length; i++){
        let searchBtn = document.getElementById("result");
        let countryInp = document.getElementById("country-inpt");
        searchBtn.textContent= countryInp.value;
        console.log(data[i].name);
    };
    
}
fatchcountries();


//simple
// fetch("ENST2OjWoAAm8Ak.jpg")
// .then (response=>{
//     console.log(response);
//     return response.blob();
// })
// .then (blob=>{
//     console.log(blob);
//     document.getElementById("marrige").src=URL.createObjectURL(blob);
// })
// .catch(error=>{
//     console.log("error!")
//     console.error(error);
// });

// fetch ('https://restcountries.com/v3.1/alpha?codes=" + codes')
// .then(response=>response.jeson())
// .then(data=>console.log(data));



let requestUrl= "https://restcountries.com/v3.1/all";
let rates = {};


async function fetchCountries(){
    let response = await fetch(requestUrl);
    let data = await response.jeson();
    console.log(data);

    let countries = [];
    let populations = [];

    for (let i=0;i<data.length; i++){
        let searchBtn = document.getElementById("result");
        let countryInp = document.getElementById("country-inpt");
        searchBtn.textContent= countryInp.value;
        console.log(data[i].name);
    };
    
}
fatchcountries();


//simple
// fetch("ENST2OjWoAAm8Ak.jpg")
// .then (response=>{
//     console.log(response);
//     return response.blob();
// })
// .then (blob=>{
//     console.log(blob);
//     document.getElementById("marrige").src=URL.createObjectURL(blob);
// })
// .catch(error=>{
//     console.log("error!")
//     console.error(error);
// });

// fetch ('https://restcountries.com/v3.1/alpha?codes=" + codes')
// .then(response=>response.jeson())
// .then(data=>console.log(data));