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
const hideFlag1 = document.querySelector(".hideFlag1");
const hideFlag2 = document.querySelector(".hideFlag2");
const selectCategory = document.querySelector(".selectCategory");
const selectClothingType = document.querySelector(".selectClothingType");
const messageCountryChoice = document.querySelector(".messageCountryChoice");

let valueCountryOrigin, valueCountryDestiny, valueCategory, valueClothingType

// functions

function getCountryOrigin() {
    selectCountryOrigin.addEventListener("change", () => {
        valueCountryOrigin = selectCountryOrigin.options[selectCountryOrigin.selectedIndex].value;
        console.log(valueCountryOrigin);

        /* add country flag to the side country choice */
        countryOriginFlag()
        alertCountryChoice()
    })
}
getCountryOrigin();

function getCountryDestiny() {
    selectCountryDestiny.addEventListener("change", () => {
        valueCountryDestiny = selectCountryDestiny.options[selectCountryDestiny.selectedIndex].value;
        console.log(valueCountryDestiny);

        /* add country flag to the side country choice */
        countryDestinyFlag()
        alertCountryChoice()
    })
}
getCountryDestiny();

function getSelectCategory() {
    selectCategory.addEventListener("change", () => {
        valueCategory = selectCategory.options[selectCategory.selectedIndex].value;
        console.log(valueCategory);
    })
}
getSelectCategory();

function getSelectClothingType() {
    selectClothingType.addEventListener("change", () => {
        valueClothingType = selectClothingType.options[selectClothingType.selectedIndex].value;
        console.log(valueClothingType);
    })
}
getSelectClothingType();

/* functions for: add country flag below country choice */
function countryOriginFlag() {
    if(valueCountryOrigin == "bra") {
        hideFlag1.classList.remove("hide");
        imageFlag1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png"
    } else if(valueCountryOrigin == "eua") {
        hideFlag1.classList.remove("hide");
        imageFlag1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/290px-Flag_of_the_United_States.svg.png"
    } else if(valueCountryOrigin == "eur") {
        hideFlag1.classList.remove("hide");
        imageFlag1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png"
    } else {
        hideFlag1.classList.add("hide");
    }
}

function countryDestinyFlag() {
    if(valueCountryDestiny == "bra") {
        hideFlag2.classList.remove("hide");
        imageFlag2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png"
    } else if(valueCountryDestiny == "eua") {
        hideFlag2.classList.remove("hide");
        imageFlag2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/290px-Flag_of_the_United_States.svg.png"
    } else if(valueCountryDestiny == "eur") {
        hideFlag2.classList.remove("hide");
        imageFlag2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png"
    } else {
        hideFlag2.classList.add("hide");
    }
}

function alertCountryChoice() {
    if(valueCountryOrigin == valueCountryDestiny) {
        messageCountryChoice.textContent = "Atenção! Escolher países diferentes." 
    } else {
        messageCountryChoice.textContent = "" 
    }
}

function btnSearch() {
    if(valueCountryOrigin == "bra" && valueCountryDestiny == "eua" && valueCategory == "male" && valueClothingType == "shirt") {
        alert("Adicionar informações!!!")
    } else {
        alert("Escolha ainda não cadastrada!!!")
    }
}


// events