const myCheckBox = document.getElementById("myCheckBox");
const VisaBtn = document.getElementById("VisaBtn");
const PayPalBtn = document.getElementById("PayPalBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = "You are subscribed!";
  } else {
    subResult.textContent = "You are not subscribed!";
  }

  if (VisaBtn.checked) {
    paymentResult.textContent = "You select Visa as your payment option.";

  } else if (masterCardBtn.checked) {
    paymentResult.textContent = "Pay with your Master Card.";

  } else if (PayPalBtn.checked) {
    paymentResult.textContent = "PayPal is your preferred payment method.";

  } else {
    paymentResult.textContent = "Please Choose Your Payment Method.";
  }

};

  