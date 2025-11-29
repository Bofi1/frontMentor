window.addEventListener("DOMContentLoaded", () => {
  const kDisplayValue = ["10K", "50K", "100K", "500K", "1M"];
  const kDisplayPrice = [8, 12, 16, 24, 36];

  const amountRange = document.getElementById("amountRange");
  const amountDisplay = document.getElementById("amountDisplay");
  const value = document.getElementById("value");

  calculation();

  amountRange.addEventListener("input", calculation);

  function calculation() {
    amountDisplay.innerText = kDisplayValue[amountRange.value];
    value.innerText = `$${kDisplayPrice[amountRange.value]}.00`;
  }

  function discount() {}
});
