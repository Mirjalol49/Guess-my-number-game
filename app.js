//! GET ELEMENTS FROM DOM
let elForm = document.querySelector(".js-form")
let elAttempts = document.querySelector(".js-attempts")
let elInput = document.querySelector(".js-input");
let elBtn = document.querySelector(".js-btn");
let elResult = document.querySelector(".result")
let foundImg = document.querySelector(".found")
let box = document.querySelector(".boxone");
let imgBox = document.querySelector(".imgbox-hide");


//! GIVING ATTEMPTS TO A VARIABLE AND DISPLAYING INTO DOM
let maxAttemptsCount = 5;



//! GETTING A RANDOM NUMBER
let randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);
elAttempts.textContent = `You have ${maxAttemptsCount} attempts`;
//! PREVENTING A FORM ELEMENT FROM A DEFAULT VERSION
elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    //! TRIMMING A SPACE AND GETTING A VALUE OF INPUT
    let inputValue = Number(elInput.value.trim());
    maxAttemptsCount--;
    elAttempts.textContent = `You have ${maxAttemptsCount} attempts`;

    //! LETS COMPARE YOUR ANSWER AND RANDOMNUMBER WITH IF ELSE
    if (inputValue > randomNumber) {
        elResult.textContent = "nooo"
    } else if (inputValue < randomNumber) {
        elResult.textContent = "noo"
    } else {
        elResult.textContent = "yes"
        foundImg.classList.add("foundyes");
        box.classList.remove("boxone");
        box.classList.add("found")
        document.body.classList.add("bg-color")
        imgBox.classList.remove("imgbox-hide")
        imgBox.classList.add("img-box")




    };

    if (maxAttemptsCount === 0 && inputValue === randomNumber) {

        elInput.disabled.true;
    } else if (maxAttemptsCount === 0) {
        elInput.disabled = true;
    }

    elInput.value = "";



})