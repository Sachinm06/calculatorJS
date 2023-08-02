const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('input[type="button"]');

buttons.forEach(button => button.addEventListener('click', handleClick));

function handleClick(event) {
    const buttonValue = event.target.value;
    const currentValue = inputBox.value;

    switch (buttonValue) {
        case 'AC':
            inputBox.value = '0';
            break;
        case 'DE':
            inputBox.value = currentValue.slice(0, -1);
            break;
        case '=':
            try {
                const result = eval(currentValue);
                inputBox.value = result;
            } catch (error) {
                inputBox.value = 'Error';
            }
            break;
        default:
            if (currentValue === '0' || currentValue === 'Error') {
                inputBox.value = buttonValue;
            } else {
                inputBox.value += buttonValue;
            }
            break;
    }
}
