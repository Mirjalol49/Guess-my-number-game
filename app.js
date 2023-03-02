//! GET ELEMENTS FROM DOM
let elForm = document.querySelector(".js-form")
let elAttempts = document.querySelector(".js-attempts")
let elInput = document.querySelector(".js-input");
let elBtn = document.querySelector(".js-btn");
let elResult = document.querySelector(".result")
let foundImg = document.querySelector(".found")
let box = document.querySelector(".boxone");
let imgBox = document.querySelector(".imgbox-hide");
let congrats = document.querySelector(".textfound")
let refreshPage = document.querySelector(".refresh")

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
        elResult.textContent = "it is too high"

        elInput.value = "";
    } else if (inputValue < randomNumber) {

        elResult.textContent = "it is too low"

        elInput.value = "";
    } else {

        foundImg.classList.add("foundyes");
        box.classList.remove("boxone");
        box.classList.add("found")
        document.body.classList.add("bg-color")
        imgBox.classList.remove("imgbox-hide")
        imgBox.classList.add("img-box")
        congrats.classList.remove("textfound")
        congrats.classList.add("textfoundyes")
        elBtn.remove()
        refreshPage.classList.add("refreshpage")
        elInput.disabled = true;

        elResult.textContent = "";
    };




    if (maxAttemptsCount === 0 && inputValue === randomNumber) {

        elInput.disabled.true;
        elBtn.disabled = true;
        refreshPage.classList.remove("refresh")
        refreshPage.classList.add("refreshpage")
        elBtn.remove()
        refreshPage.classList.add("refreshpage")
        elResult.textContent = "";
    } else if (maxAttemptsCount === 0) {
        elInput.disabled = true;
        elBtn.disabled = true;
        refreshPage.classList.remove("refresh")
        refreshPage.classList.add("refreshpage")
        elBtn.remove()
        refreshPage.classList.add("refreshpage")
        elResult.textContent = "";
    }

    function refreshPagefunction() {
        window.location.reload();
    }
    refreshPage.addEventListener("click", refreshPagefunction);

})