// variables

const selectCountryOrigin = document.querySelector(".selectCountryOrigin")
const bra1 = document.querySelector(".bra-1");
const eua1 = document.querySelector(".eua-1");
const eur1 = document.querySelector(".eur-1");
const selectCountryDestiny = document.querySelector(".selectCountryDestiny")
const bra2 = document.querySelector(".bra-2");
const eua2 = document.querySelector(".eua-2");
const eur2 = document.querySelector(".eur-2");



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

// events