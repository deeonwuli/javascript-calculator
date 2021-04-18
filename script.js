const input_buttons = document.querySelectorAll('button')
const display = document.getElementById('display')

input_buttons.forEach(
    function(button) {
        button.addEventListener('click', calculate)
    }
)

function calculate(event) {
    const clicked_value = event.target.value
    if (clicked_value === '=') {
      if (display.value !== '') {
        if (display.value = NaN) {
            display.value = NaN
            console.log(NaN)
        }
        display.value = eval(display.value)
        console.log(display.value)
      }
    } else if (clicked_value === 'AC') {
      display.value = ''
    } else {
      display.value += clicked_value
    }
  }