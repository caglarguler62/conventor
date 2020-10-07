let kelvin = prompt('Enter kelven value here');

let celsius = Math.round(kelvin - 273.15);

let fahrenheit = Math.round((celsius * 9/5) + 32);

alert(`${kelvin} kelvin equals to ${celsius} celsius which converts to ${fahrenheit} Fahrenheit`);