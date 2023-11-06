// variables

const selectCountryOrigin = document.querySelector(".selectCountryOrigin");
const imageFlag1 = document.querySelector(".imageFlag1");
/* const bra1 = document.querySelector(".bra1");
const eua1 = document.querySelector(".eua1");
const eur1 = document.querySelector(".eur1"); */
const selectCountryDestiny = document.querySelector(".selectCountryDestiny");
const imageFlag2 = document.querySelector(".imageFlag2");
/* const bra2 = document.querySelector(".bra2");
const eua2 = document.querySelector(".eua2");
const eur2 = document.querySelector(".eur2"); */
const selectCategory = document.querySelector(".selectCategory");
const selectClothingType = document.querySelector(".selectClothingType");

// functions

function getCountryOrigin() {
    selectCountryOrigin.addEventListener("change", () => {
        valueCountry = selectCountryOrigin.options[selectCountryOrigin.selectedIndex].value;
        console.log(valueCountry);

        /* add country flag below country choice */
        countryOriginFlag()
    })
}
getCountryOrigin();

function getCountryDestiny() {
    selectCountryDestiny.addEventListener("change", () => {
        valueCountry = selectCountryDestiny.options[selectCountryDestiny.selectedIndex].value;
        console.log(valueCountry);

        /* add country flag below country choice */
        countryDestinyFlag()
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

/* functions for: add country flag below country choice */
function countryOriginFlag() {
    if(valueCountry == "bra1") {
        imageFlag1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png"
    } else if(valueCountry == "eua1") {
        imageFlag1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/290px-Flag_of_the_United_States.svg.png"
    } else if(valueCountry == "eur1") {
        imageFlag1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png"
    } else {
        imageFlag1.src = ""
    }
}

function countryDestinyFlag() {
    if(valueCountry == "bra2") {
        imageFlag2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png"
    } else if(valueCountry == "eua2") {
        imageFlag2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/290px-Flag_of_the_United_States.svg.png"
    } else if(valueCountry == "eur2") {
        imageFlag2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png"
    } else {
        imageFlag2.src = ""
    }
}


// events