// Compound-Interest-Cal/compound-Interest-Cal.js
// This file is part of the Compound Interest Calculator project.
// It contains the main function to calculate compound interest.

function calculate() {
  const totalAmount = document.getElementById("total-Amount");
  const principalInput = document.getElementById("principal");
  const rateInput = document.getElementById("rate");
  const timeInput = document.getElementById("time");
  // const compoundFrequency = document.getElementById("compoundings");

  let principal = Number(principalInput.value);
  let rate = Number(rateInput.value / 100); // Convert percentage to decimal
  let time = Number(timeInput.value);
  // let frequency = compoundFrequency.value;

  if (
    isNaN(principal) ||
    isNaN(rate) ||
    isNaN(time) ||
    principal <= 0 ||
    rate < 0 ||
    time <= 0
  ) {
    totalAmount.textContent =
      "Please enter valid positive numbers for all sections.";
    return;
  }

  const result = principal * Math.pow(1 + rate / 1, 1 * time);

  totalAmount.textContent = result.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
}
