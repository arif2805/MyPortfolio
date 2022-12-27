let currency1 =document.getElementById("currency1");
let currency2 =document.getElementById("currency2");
let btn = document.getElementById("search-btn");
let input = document.getElementById("currency-inpt");
let result =document.getElementById("result");


async function fetchCurrency(){
    let response= await fetch("https://api.frankfurter.app/currencies");
    let data= await response.json();

    console.log(data);

    populateCurrency(data,currency1);
    populateCurrency(data,currency2);
   
}

function populateCurrency(data,select){
    for (let key in data){
        let currencyName= data[key];
        let option=document.createElement("option");
        option.textContent=currencyName;
        option.value=key;

        select.appendChild(option);
    }
}

async function searchBtn(){
   let amount=input.value;
   let from=currency1.value;
   let to=currency2.value;

   let response= await fetch("https://api.frankfurter.app/latest?amount="+amount+"&from="+from+"&to="+to)
    let data= await  response.json();
    console.log(data);

    result.value=data.rates[to];
  
    

}

fetchCurrency();

let headingEls = document.querySelector("#heading");
headingEls.style.textAlign="center";
headingEls.style.color="Orange";
headingEls.style.textTransform="uppercase";
headingEls.style.fontSize="25px";
headingEls.style.textTransform="bold";
headingEls.style.backgroundColor="black";
headingEls.style.padding="15px";
console.log(headingEls);
