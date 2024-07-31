// Link to view the exchange-rate API call dashboard
// https://app.exchangerate-api.com/dashboard/confirmed

const BASE_URL = "https://v6.exchangerate-api.com/v6/d1b99b5b5c60423610301f7e/latest";

const dropdowns = document.querySelectorAll(".select-container select");
const btn = document.querySelector(".convert-button");
const fromCurr = document.querySelector(".from-country select");
const toCurr = document.querySelector(".to-country select");
const msg = document.querySelector("#exchanged-rate");
const exchange = document.querySelector("#exchange-symbol");

const populateDropdowns = () => {
    for (let select of dropdowns) {
        for (currCode in countryList) {
            let newOption = document.createElement("option");
            newOption.innerText = currCode;
            newOption.value = currCode;
            if (select.name === "from" && currCode === "USD"){
                newOption.selected = "selected";
            }
            if (select.name === "to" && currCode === "INR"){
                newOption.selected = "selected";
            }
            select.append(newOption);
        }
        select.addEventListener("change", (evt) => {
            updateFlag(evt.target);
        });
    }
};

const updateExchangeRate = async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount-container input");
    let amountValue = amount.value;
    if(isNaN(amountValue) || amountValue < 1){
        amountValue = 1;
        amount.value = 1;
    }
    const URL = `${BASE_URL}/${fromCurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.conversion_rates[toCurr.value];
    let finalAmount = amountValue * rate;
    msg.innerText = `${finalAmount.toFixed(2)} ${toCurr.value}`;
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let flag = element.parentElement.querySelector("img");
    flag.src = newSrc;
}

function exchangeFlag(){
    let fromFlag = document.querySelector("#from-flag");
    let toFlag = document.querySelector("#to-flag");
    let temp = toFlag.src;
    toFlag.src = fromFlag.src;
    fromFlag.src = temp;
    
    let fromValue = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = fromValue;
}

exchange.addEventListener("click", exchangeFlag);

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate(evt);
});

window.addEventListener("load", (evt) => {
    populateDropdowns();
    updateExchangeRate(evt);
});

// The below code is for a different API

// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const dropdowns = document.querySelectorAll(".select-container select");
// const btn = document.querySelector(".convert-button");
// const fromCurr = document.querySelector(".from-country select");
// const toCurr = document.querySelector(".to-country select");
// const msg = document.querySelector("#exchanged-rate");

// const populateDropdowns = () => {
//     for(let select of dropdowns){
//         for (currCode in countryList){
//             let newOption = document.createElement("option");
//             newOption.innerText = currCode;
//             newOption.value = currCode;
//             if(select.name === "from" && currCode === "USD"){
//                 newOption.selected = "selected";
//             }
//             if(select.name === "to" && currCode === "INR"){
//                 newOption.selected = "selected";
//             }
//             select.append(newOption);
//         }
//         select.addEventListener("change", (evt) => {
//             updateFlag(evt.target);
//         });
//     }
// };

// const updateExchangeRate = async (evt) => {
//     evt.preventDefault();
//     let amount = document.querySelector(".amount-container input");
//     let amountValue = parseFloat(amount.value);
//     if(isNaN(amountValue) || amountValue < 1){
//         amountValue = 1;
//         amount.value = 1;
//     }
//     const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//     let response = await fetch(URL);
//     let data = await response.json();
//     let rate = data[toCurr.value.toLowerCase()];
//     let finalAmount = amountValue * rate;
//     msg.innerText = `${finalAmount.toFixed(2)} ${toCurr.value}`;
// }

// const updateFlag = (element) => {
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let flag = element.parentElement.querySelector("img");
//     flag.src = newSrc;
// }

// btn.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     updateExchangeRate(evt);
// });

// window.addEventListener("load", (evt) => {
//     populateDropdowns();
//     updateExchangeRate(evt);
// });