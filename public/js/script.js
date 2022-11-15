addEventListener("DOMContentLoaded", init);

let ingredient1;
let ingredient2;

function init() {
    console.log("DOM loaded");
    document
        .querySelector(".firstingredients .first")
        .addEventListener("click", firstIngredient);
    document
        .querySelector(".firstingredients .second")
        .addEventListener("click", firstIngredient);
    document
        .querySelector(".firstingredients .third")
        .addEventListener("click", firstIngredient);
    document
        .querySelector(".secondingredients .first")
        .addEventListener("click", secondIngredient);
    document
        .querySelector(".secondingredients .second")
        .addEventListener("click", secondIngredient);
    document
        .querySelector(".secondingredients .third")
        .addEventListener("click", secondIngredient);
}

function firstIngredient(e) {
    ingredient1 = e.target.id;
}

function secondIngredient(e) {
    ingredient2 = e.target.id;
    createPotion();
}

function createPotion() {
    if (ingredient1 == ingredient2) {
        document.querySelector(".potion").innerHTML =
            "<iconify-icon icon='game-icons:potion-ball' style='color: #e4105e;' width='290' height='290'></iconify-icon>";
        document.querySelector(".error").innerHTML =
            "Congratulations! You made an excellent potion!";
    } else {
        document.querySelector(".potion").innerHTML =
            "<iconify-icon icon='game-icons:spiky-explosion' style='color: #e4105e;' width='290' height='290'></iconify-icon>";
        document.querySelector(".error").innerHTML =
            "BOOM! You're potion was not made correctly, try again!";
    }
}
