// Temperature Conversion Program

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = Math.round(Number(textBox.value));
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp + "F";
  } else if (toCelsius.checked) {
    temp = Math.round(Number(textBox.value));
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp + "F";
  } else {
    result.textContent = "Select A Unit";
  }
}
