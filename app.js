var inputBox = document.getElementById("inputBox")
var result = document.getElementById("result")
var guessCount = document.getElementById("guess")
// var btn = document.getElementById("btn")
var guessCount = 3

var randomNumber = Math.floor(Math.random()*10)+1
if(randomNumber>5){

    randomNumber=randomNumber-5
}




function checkTheNumber(){
    if(inputBox.value == randomNumber){
        result.textContent = ("You are Right")
        alert("You Got it Right")
    }else {
        guessCount = guessCount-1

        if(guessCount == 0){
            alert("You Lost, Generated Random Number is "+randomNumber)
        }
        guess.textContent = (" Available Guesses :"+guessCount)
        result.textContent = ("You are Wrong")
    }
    

}