let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  burgerShowedMobile();
});

let menu = document.getElementById("menu");

function burgerShowedMobile() {
  hamburger.classList.toggle("clicked");

  hamburger.classList.contains("clicked")
    ? menu.classList.remove("opacity-0")
    : menu.classList.add("opacity-0");
}
