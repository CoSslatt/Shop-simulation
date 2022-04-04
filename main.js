const navElements = document.querySelectorAll('.nav-elements')
const computerComponents = document.querySelectorAll('.computer-component')

const priceFilter = document.getElementById('price-filter');
const applyFilters = document.querySelector('#apply-filters');

const storedItemsParent = document.getElementById('shop-items');

window.addEventListener('mouseover', (e) => {
    if (e.target.innerText == `Computer's components`
        || e.target.className == `computer-component`){
        for (let i = 0; i < computerComponents.length; i++){
            computerComponents[i].style.visibility = "visible";
        }
    }
    else {
        for (let i = 0; i < computerComponents.length; i++){
            computerComponents[i].style.visibility = "hidden";
        }
    }
});

// ----------------------FILTERS---------------------------

import { items } from "./items.js";

const filteredMinimumPrice = (item) => {

    for(let i=0; i < item.length; i++){

        if (item[i].price < priceFilter.value) continue;

        const newChild = storedItemsParent.appendChild(document.createElement('div'));
        
        newChild.classList.add('item-in-store');
        newChild.innerText = `${item[i].mark} ${item[i].specification} PRICE: ${item[i].price}`;
    }
}

applyFilters.addEventListener('click', (e) => {
    filteredMinimumPrice(items);
});