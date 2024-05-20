let numbers = document.querySelectorAll('button[value]')
let result = document.getElementsByClassName('result')[0]

let addition = document.querySelector('[data-add]')
let subtraction = document.querySelector('[data-minus]')
let multiply = document.querySelector('[data-multiply]')
let divide = document.querySelector('[data-divide]')

let percent = document.querySelector('[data-percent]')
let clear = document.querySelector('[data-clear]')
let clearEntry = document.querySelector('[data-CE]')
let back = document.getElementsByClassName('back')[0]
let equal = document.getElementsByClassName('equal')[0]

let sqrt = document.querySelector('[data-sqrt]')
let power = document.querySelector('[data-pow]')
let inverse = document.querySelector('[data-inverse]')

// Function that does the calculation
equal.addEventListener('click', Equal)

function Equal() {
    if (result.innerText === "" || result.innerText == eval(result.innerText)) {
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

// Function that clears all values
clear.addEventListener('click', Clear)

function Clear() {
    result.innerText = ""
}

// Function that deletes/clears the last entry 
clearEntry.addEventListener('click', ClearEntry)

function ClearEntry() {
    let v = result.innerText.split('')
    let ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    for(a of v) {
        let index = ar.indexOf(parseInt(a))
        if(index == -1) {
            v.pop()
            v = v.join("")
            result.innerText = v
            break
        } else {
            v.pop()
        }
    }
}


// Function that calculates percentage
percent.addEventListener('click', Percent)

function Percent() {
    let symbol = "%"
    let calc = result.innerText / 100 + symbol
    
    if (result.innerText != "") {
        result.innerText = calc
    } else {
        result.innerText = ""
    }
}

// Method that selects all values
numbers.forEach(number => {
    number.addEventListener('click', function() {
        result.innerText += number.value
    })
})

// Function that add multiplicative inverse or reciprocal function
inverse.addEventListener('click', multiplyInverse)

function multiplyInverse() {
    let val = result.innerText
    text = parseFloat(val)
    recip = eval(1 / text)

    if (result.innerText != "") {
        result.innerText = recip 
    } else {
        result.innerText = ""
    }
}

// Function that add value to the power of 2
power.addEventListener('click', PowerOf)

function PowerOf() {
    if (result.innerText != "") {
        result.innerText = Math.pow(result.innerText, 2)
    } else {
        result.innerText = ""
    }
}

// Function that add the SquareRoot of the value
sqrt.addEventListener('click', SquareRoot)

function SquareRoot() {
    if (result.innerText != "") {
        result.innerText = Math.sqrt(result.innerText)
    } else {
        result.innerText = ""
    }
}