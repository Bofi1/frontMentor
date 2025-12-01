window.addEventListener("DOMContentLoaded", () => {
  const kDisplayValue = ["10K", "50K", "100K", "500K", "1M"];
  const kDisplayPrice = [8, 12, 16, 24, 36];

  const amountRange = document.getElementById("amountRange");
  const amountDisplay = document.getElementById("amountDisplay");
  const checkbox = document.getElementById("checkbox");
  const value = document.getElementById("value");
  const discountBtn = document.getElementById("discountBtn");

  amountRange.addEventListener("input", price);

  checkbox.addEventListener("input", price);

  function price() {
    if (checkbox.checked) {
      discountBtn.classList.add("ml-[27px]");
      discountBtn.parentElement.classList.add("bg-[#12D8C5]");
      calculation(0.75);
    } else {
      discountBtn.classList.remove("ml-[27px]");
      discountBtn.parentElement.classList.remove("bg-[#12D8C5]");

      calculation(1);
    }
  }

  function calculation(discount) {
    amountDisplay.innerText = kDisplayValue[amountRange.value];
    value.innerText = `$${kDisplayPrice[amountRange.value] * discount}.00`;
  }
});
