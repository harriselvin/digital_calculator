let numbers = document.querySelectorAll('button[value]')
let result = document.getElementsByClassName('result')[0]

let addition = document.querySelector('[data-add]')
let subtraction = document.querySelector('[data-minus]')
let multiply = document.querySelector('[data-multiply]')
let divide = document.querySelector('[data-divide]')

let percent = document.querySelector('[data-percent]')
let clear = document.querySelector('[data-clear]')
let back = document.getElementsByClassName('back')[0]
let equal = document.getElementsByClassName('equal')[0]

// Function that does the calculation
equal.addEventListener('click', Equal)

function Equal() {
    if (result.innerText === "") {
        result.innerText = ""
    } else {
        console.log(result.innerText)
        let answer = eval(result.innerText)
        result.innerText = answer
    }
}

// Function for backspace
back.addEventListener('click', Backspace)

function Backspace() {
    let currentText = result.innerText
    if (currentText.length > 0) {
        result.innerText = currentText.slice(0, -1)
    }
}

// Function that clears values
clear.addEventListener('click', Clear)

function Clear() {
    result.innerText = ""
}

// Method that selects all values
numbers.forEach(number => {
    number.addEventListener('click', function() {
        result.innerText += number.value
    })
})

// addition.addEventListener('click', Add)

// Function that add
function Add() {
    
}

