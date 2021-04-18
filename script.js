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
        display.value = eval(display.value);
      }
    } else if (clicked_value === 'AC') {
      display.value = '';
    } else {
      display.value += clicked_value;
    }
  }