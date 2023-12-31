// variables

const selectCountryOrigin = document.querySelector(".selectCountryOrigin");
const imageFlag1 = document.querySelector(".imageFlag1");
const selectCountryDestiny = document.querySelector(".selectCountryDestiny");
const imageFlag2 = document.querySelector(".imageFlag2");
const hideFlag1 = document.querySelector(".hideFlag1");
const hideFlag2 = document.querySelector(".hideFlag2");
const selectCategory = document.querySelector(".selectCategory");
const selectClothingType = document.querySelector(".selectClothingType");
const messageCountryChoice = document.querySelector(".messageCountryChoice");
const result = document.querySelector(".result");

const table = document.querySelector(".table");

const table_bra_usa_male_shirt = document.querySelector(".table_bra_usa_male_shirt");
const table_bra_usa_male_pants = document.querySelector(".table_bra_usa_male_pants");
const table_bra_usa_male_shoe = document.querySelector(".table_bra_usa_male_shoe");
const table_bra_usa_female_shirt = document.querySelector(".table_bra_usa_female_shirt");
const table_bra_usa_female_pants = document.querySelector(".table_bra_usa_female_pants");
const table_bra_usa_female_shoe = document.querySelector(".table_bra_usa_female_shoe");
const table_bra_usa_children_shirt = document.querySelector(".table_bra_usa_children_shirt");
const table_bra_usa_children_pants = document.querySelector(".table_bra_usa_children_pants");
const table_bra_usa_children_shoe = document.querySelector(".table_bra_usa_children_shoe");

const table_bra_eur_male_shirt = document.querySelector(".table_bra_eur_male_shirt");
const table_bra_eur_male_pants = document.querySelector(".table_bra_eur_male_pants");
const table_bra_eur_male_shoe = document.querySelector(".table_bra_eur_male_shoe");
const table_bra_eur_female_shirt = document.querySelector(".table_bra_eur_female_shirt");
const table_bra_eur_female_pants = document.querySelector(".table_bra_eur_female_pants");
const table_bra_eur_female_shoe = document.querySelector(".table_bra_eur_female_shoe");
const table_bra_eur_children_shirt = document.querySelector(".table_bra_eur_children_shirt");
const table_bra_eur_children_pants = document.querySelector(".table_bra_eur_children_pants");
const table_bra_eur_children_shoe = document.querySelector(".table_bra_eur_children_shoe");

const table_standard = document.querySelector(".table_standard");

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

/* functions for: add country flag on the side country choice */
function countryOriginFlag() {
    if(valueCountryOrigin == "bra") {
        hideFlag1.classList.remove("hide");
        imageFlag1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png"
    } else if(valueCountryOrigin == "usa") {
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
    } else if(valueCountryDestiny == "usa") {
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
        messageCountryChoice.textContent = "Atenção! Escolher países diferentes.";
    } else if((valueCountryOrigin == "usa" && valueCountryDestiny == "eur") || (valueCountryOrigin == "eur" && valueCountryDestiny == "usa")) {
        messageCountryChoice.textContent = "Atenção! Informações não disponíveis."; 
    } else if((valueCountryOrigin == "choice1" && valueCountryDestiny == "choice2") || (valueCountryOrigin == "bra" && valueCountryDestiny == "choice2") || (valueCountryOrigin == "choice1" && valueCountryDestiny == "bra") || (valueCountryOrigin == "choice1" && valueCountryDestiny == "usa") || (valueCountryOrigin == "usa" && valueCountryDestiny == "choice2") || (valueCountryOrigin == "choice1" && valueCountryDestiny == "eur") || (valueCountryOrigin == "eur" && valueCountryDestiny == "choice2")) {
        messageCountryChoice.textContent = "Atenção! Preencher os dois campos."; 
    } else {
        messageCountryChoice.textContent = ""; 
    }
}

function showStandardInfo() {
    result.classList.add("hide");
    
    /* reset_standard_info(); */
    /* check after why function reset_standard_info() isn't run.  */
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.remove("hide");
}

function btnSearch() {
    /* ### bra - usa ### */
    
    /* choice: bra - usa - male */
    if((valueCountryOrigin == "bra" && valueCountryDestiny == "usa" && valueCategory == "male" && valueClothingType == "shirt") || (valueCountryOrigin == "usa" && valueCountryDestiny == "bra" && valueCategory == "male" && valueClothingType == "shirt")) {
        result.classList.add("hide");
        reset_bra_usa_male_shirt();
        table_bra_usa_male_shirt.classList.remove("hide");

    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "usa" && valueCategory == "male" && valueClothingType == "pants") || (valueCountryOrigin == "usa" && valueCountryDestiny == "bra" && valueCategory == "male" && valueClothingType == "pants")) {
        result.classList.add("hide");
        reset_bra_usa_male_pants();
        table_bra_usa_male_pants.classList.remove("hide");

    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "usa" && valueCategory == "male" && valueClothingType == "shoe") || (valueCountryOrigin == "usa" && valueCountryDestiny == "bra" && valueCategory == "male" && valueClothingType == "shoe")) {
        result.classList.add("hide");
        reset_bra_usa_male_shoe();
        table_bra_usa_male_shoe.classList.remove("hide");

    /* choice: bra - usa - female */    
    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "usa" && valueCategory == "female" && valueClothingType == "shirt") || (valueCountryOrigin == "usa" && valueCountryDestiny == "bra" && valueCategory == "female" && valueClothingType == "shirt")) {
        result.classList.add("hide");
        reset_bra_usa_female_shirt();
        table_bra_usa_female_shirt.classList.remove("hide");

    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "usa" && valueCategory == "female" && valueClothingType == "pants") || (valueCountryOrigin == "usa" && valueCountryDestiny == "bra" && valueCategory == "female" && valueClothingType == "pants")) {
        result.classList.add("hide");
        reset_bra_usa_female_pants();
        table_bra_usa_female_pants.classList.remove("hide");

    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "usa" && valueCategory == "female" && valueClothingType == "shoe") || (valueCountryOrigin == "usa" && valueCountryDestiny == "bra" && valueCategory == "female" && valueClothingType == "shoe")) {
        result.classList.add("hide");
        reset_bra_usa_female_shoe();
        table_bra_usa_female_shoe.classList.remove("hide");

    /* choice: bra - usa - children */   
    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "usa" && valueCategory == "children" && valueClothingType == "shirt") || (valueCountryOrigin == "usa" && valueCountryDestiny == "bra" && valueCategory == "children" && valueClothingType == "shirt")) {
        result.classList.add("hide");
        reset_bra_usa_children_shirt();
        table_bra_usa_children_shirt.classList.remove("hide");
    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "usa" && valueCategory == "children" && valueClothingType == "pants") || (valueCountryOrigin == "usa" && valueCountryDestiny == "bra" && valueCategory == "children" && valueClothingType == "pants")) {
        result.classList.add("hide");
        reset_bra_usa_children_pants();
        table_bra_usa_children_pants.classList.remove("hide");
    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "usa" && valueCategory == "children" && valueClothingType == "shoe") || (valueCountryOrigin == "usa" && valueCountryDestiny == "bra" && valueCategory == "children" && valueClothingType == "shoe")) {
        result.classList.add("hide");
        reset_bra_usa_children_shoe();
        table_bra_usa_children_shoe.classList.remove("hide");

    /* ### bra - eur ### */

    /* choice: bra - eur - male */
    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "eur" && valueCategory == "male" && valueClothingType == "shirt") || (valueCountryOrigin == "eur" && valueCountryDestiny == "bra" && valueCategory == "male" && valueClothingType == "shirt")) {
        result.classList.add("hide");
        reset_bra_eur_male_shirt();
        table_bra_eur_male_shirt.classList.remove("hide");

    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "eur" && valueCategory == "male" && valueClothingType == "pants") || (valueCountryOrigin == "eur" && valueCountryDestiny == "bra" && valueCategory == "male" && valueClothingType == "pants")) {
        result.classList.add("hide");
        reset_bra_eur_male_pants();
        table_bra_eur_male_pants.classList.remove("hide");

    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "eur" && valueCategory == "male" && valueClothingType == "shoe") || (valueCountryOrigin == "eur" && valueCountryDestiny == "bra" && valueCategory == "male" && valueClothingType == "shoe")) {
        result.classList.add("hide");
        reset_bra_eur_male_shoe();
        table_bra_eur_male_shoe.classList.remove("hide");

    /* choice: bra - eur - female */    
    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "eur" && valueCategory == "female" && valueClothingType == "shirt") || (valueCountryOrigin == "eur" && valueCountryDestiny == "bra" && valueCategory == "female" && valueClothingType == "shirt")) {
        result.classList.add("hide");
        reset_bra_eur_female_shirt();
        table_bra_eur_female_shirt.classList.remove("hide");

    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "eur" && valueCategory == "female" && valueClothingType == "pants") || (valueCountryOrigin == "eur" && valueCountryDestiny == "bra" && valueCategory == "female" && valueClothingType == "pants")) {
        result.classList.add("hide");
        reset_bra_eur_female_pants();
        table_bra_eur_female_pants.classList.remove("hide");

    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "eur" && valueCategory == "female" && valueClothingType == "shoe") || (valueCountryOrigin == "eur" && valueCountryDestiny == "bra" && valueCategory == "female" && valueClothingType == "shoe")) {
        result.classList.add("hide");
        reset_bra_eur_female_shoe();
        table_bra_eur_female_shoe.classList.remove("hide");

    /* choice: bra - eur - children */   
    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "eur" && valueCategory == "children" && valueClothingType == "shirt") || (valueCountryOrigin == "eur" && valueCountryDestiny == "bra" && valueCategory == "children" && valueClothingType == "shirt")) {
        result.classList.add("hide");
        reset_bra_eur_children_shirt();
        table_bra_eur_children_shirt.classList.remove("hide");

    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "eur" && valueCategory == "children" && valueClothingType == "pants") || (valueCountryOrigin == "eur" && valueCountryDestiny == "bra" && valueCategory == "children" && valueClothingType == "pants")) {
        result.classList.add("hide");
        reset_bra_eur_children_pants();
        table_bra_eur_children_pants.classList.remove("hide");

    } else if((valueCountryOrigin == "bra" && valueCountryDestiny == "eur" && valueCategory == "children" && valueClothingType == "shoe") || (valueCountryOrigin == "eur" && valueCountryDestiny == "bra" && valueCategory == "children" && valueClothingType == "shoe")) {
        result.classList.add("hide");
        reset_bra_eur_children_shoe();
        table_bra_eur_children_shoe.classList.remove("hide");

    } else {
        /* table.classList.add("hide");
        table_standard.classList.add("hide"); */
        resetAll();
        result.classList.remove("hide");
        result.style.color = "red";
        result.style.textAlign = "justify";
        result.style.padding = "2rem";
        result.textContent = "Atenção!"
        result.textContent += " (1) Preencher todos os campos.";
        result.textContent += " (2) Certifique-se de escolher países diferentes.";
        result.textContent += " (3) Resultados não disponíveis para pesquisa entre Estados Unidos e União Européia.";
}

// reset function to use in standard info

/* function reset_standard_info() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")
} */

// reset functions, to use in btnSearch() function

/* bra-usa-male */
function reset_bra_usa_male_shirt() {
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

function reset_bra_usa_male_pants() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

function reset_bra_usa_male_shoe() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

/* bra-usa-female */
function reset_bra_usa_female_shirt() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

function reset_bra_usa_female_pants() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

function reset_bra_usa_female_shoe() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

/* bra-usa-children */

function reset_bra_usa_children_shirt() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

function reset_bra_usa_children_pants() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

function reset_bra_usa_children_shoe() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

/* bra-eur-male */
function reset_bra_eur_male_shirt() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

function reset_bra_eur_male_pants() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

function reset_bra_eur_male_shoe() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

/* bra-eur-female */
function reset_bra_eur_female_shirt() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

function reset_bra_eur_female_pants() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

function reset_bra_eur_female_shoe() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

/* bra-eur-children */
function reset_bra_eur_children_shirt() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

function reset_bra_eur_children_pants() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table_standard.classList.add("hide");
}

function reset_bra_eur_children_shoe() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")

    table_standard.classList.add("hide");
}
}

function resetAll() {
    table_bra_usa_male_shirt.classList.add("hide")
    table_bra_usa_male_pants.classList.add("hide")
    table_bra_usa_male_shoe.classList.add("hide")
    table_bra_usa_female_shirt.classList.add("hide")
    table_bra_usa_female_pants.classList.add("hide")
    table_bra_usa_female_shoe.classList.add("hide")
    table_bra_usa_children_shirt.classList.add("hide")
    table_bra_usa_children_pants.classList.add("hide")
    table_bra_usa_children_shoe.classList.add("hide")
    table_bra_eur_male_shirt.classList.add("hide")
    table_bra_eur_male_pants.classList.add("hide")
    table_bra_eur_male_shoe.classList.add("hide")
    table_bra_eur_female_shirt.classList.add("hide")
    table_bra_eur_female_pants.classList.add("hide")
    table_bra_eur_female_shoe.classList.add("hide")
    table_bra_eur_children_shirt.classList.add("hide")
    table_bra_eur_children_pants.classList.add("hide")
    table_bra_eur_children_shoe.classList.add("hide")

    table.classList.add("hide");
    table_standard.classList.add("hide");
}

// events