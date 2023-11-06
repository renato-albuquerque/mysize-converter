// variables

const selectCountryOrigin = document.querySelector(".selectCountryOrigin")
/* const bra1 = document.querySelector(".bra-1");
const eua1 = document.querySelector(".eua-1");
const eur1 = document.querySelector(".eur-1"); */
const selectCountryDestiny = document.querySelector(".selectCountryDestiny")
/* const bra2 = document.querySelector(".bra-2");
const eua2 = document.querySelector(".eua-2");
const eur2 = document.querySelector(".eur-2"); */
const selectCategory = document.querySelector(".selectCategory");
const selectClothingType = document.querySelector(".selectClothingType")

// functions

function getCountryOrigin() {
    selectCountryOrigin.addEventListener("change", () => {
        valueCountry = selectCountryOrigin.options[selectCountryOrigin.selectedIndex].value;
        console.log(valueCountry);
    })
}
getCountryOrigin();

function getCountryDestiny() {
    selectCountryDestiny.addEventListener("change", () => {
        valueCountry = selectCountryDestiny.options[selectCountryDestiny.selectedIndex].value;
        console.log(valueCountry);
    })
}
getCountryDestiny();

function getSelectCategory() {
    selectCategory.addEventListener("change", () => {
        valueCountry = selectCategory.options[selectCategory.selectedIndex].value;
        console.log(valueCountry);
    })
}
getSelectCategory();

function getSelectClothingType() {
    selectClothingType.addEventListener("change", () => {
        valueCountry = selectClothingType.options[selectClothingType.selectedIndex].value;
        console.log(valueCountry);
    })
}
getSelectClothingType();


// events