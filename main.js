// const COMPUTER_UNITS_HEADER = document.getElementById('computer-units-filter')
const computerUnits = document.querySelectorAll('.computer-unit')

//min price filter variables
const minPriceFilter = document.getElementById('min-price-filter');

//max price filter variables
const maxPriceFilter = document.getElementById('max-price-filter');

const applyFilters = document.querySelector('#apply-filters');

//store
const storeForItems = document.getElementById('shop-items');

window.addEventListener('mouseover', e => {
    if (e.target.innerText == `Computer's units`
        || e.target.className == `computer-unit`){
        for (let i = 0; i < computerUnits.length; i++){
            computerUnits[i].style.visibility = "visible";
        }
    }
    else {
        for (let i = 0; i < computerUnits.length; i++){
            computerUnits[i].style.visibility = "hidden";
        }
    }
});

// ----------------------FILTERS---------------------------

import { items } from "./items.js";

const filteredByPrice = (item = items) => {
    for(let i=0; i < item.length; i++){

        if (maxPriceFilter.value <= minPriceFilter.value)
            return window.alert('Is maximum less than minimum?');

        if (item[i].price < minPriceFilter.value ||
            item[i].price > maxPriceFilter.value) continue;

        const newChild = storeForItems.appendChild(document.createElement('div'));

        newChild.classList.add('item-in-store');
        newChild.innerText = `${item[i].mark} ${item[i].specification} PRICE: ${item[i].price}`;
    }
}

const filteredByChoose = (e, item = items) => {
    let currentType = e.target.innerText;

    for (let i = 0; i < item.length; i++){
        if (item[i].type != currentType) continue;

        const newChild = storeForItems.appendChild(document.createElement('div'));

        newChild.classList.add('item-in-store');
        newChild.innerText = `${item[i].mark} ${item[i].specification} PRICE: ${item[i].price}`;
    }
};

window.addEventListener('click', (event) => {
    filteredByChoose(event);
});

applyFilters.addEventListener('click', e => {
    filteredByPrice();
});