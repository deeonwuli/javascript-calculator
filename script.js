const numbers = document.querySelectorAll('.input')
const operand = document.querySelectorAll('.operation')
const all_clear = document.querySelector('.all-clear')
const clear = document.querySelector('.clear')
const equal = document.querySelector('.equal')
const display = document.getElementById('display')

function displayNumber() {
    numbers.forEach(function(number, index, array) {
        // display.value = number.value[3]
        console.log(array.value)
    })
    // console.log(numbers[x].value)
}