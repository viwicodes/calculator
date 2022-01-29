let display = document.getElementById('output')
display.innerText = '0'
let buttons = document.querySelectorAll('button')
let displayValue = ''

for (item of buttons) {
    item.addEventListener('click', (e) => {
        clicked = e.target.innerText;
        if (clicked == 'x') {
            clicked = '*'
            displayValue += clicked
            display.innerText = displayValue
        }
        else if (clicked == 'C') {
            displayValue = ""
            display.innerText = '0'
        }
        else if (clicked == 'DEL') {
            if (displayValue.length == 0) {
                display.innerText = '0'
            }
            else {
                displayValue = displayValue.slice(0, -1)
                display.innerText = displayValue
            }
        }
        else if (clicked == '=') {
            if (displayValue.length > 0) {
                displayValue = JSON.stringify(eval(displayValue))
                display.innerText = displayValue
            }
            else{
                displayValue = '0'
            }
        }
        else {
            displayValue += clicked
            display.innerText = displayValue
        }
    })
}
