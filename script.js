
let btnPlus = document.getElementById("increment") 
let btnMinus = document.getElementById("decrement") 
let theCounter = document.getElementById("initialCount")
let theInput = document.getElementById("inputValue")
let counting = 0; 

btnPlus.addEventListener("click", btnPlusClick ) 
btnMinus.addEventListener("click", btnMinusClick)

function btnPlusClick () {
    let numValue = parseInt(theInput.value);
    counting = numValue + counting 
    theCounter.innerText = counting   
}

function btnMinusClick () {
    let numValue = parseInt(theInput.value);
    counting = counting - numValue  
    theCounter.innerText = counting 
}