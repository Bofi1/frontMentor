window.addEventListener("DOMContentLoaded", () => {
  let buttonMenu = document.getElementById("button-menu");
  let body = document.getElementById("body");

  buttonMenu.addEventListener("click", () => {
    console.log(buttonMenu.src);

    if (buttonMenu.src.includes("/assets/images/icon-menu.svg")) {
      buttonMenu.src = "./assets/images/icon-menu-close.svg";
      menuToggle();
    } else {
      buttonMenu.src = "./assets/images/icon-menu.svg";
      menuToggle();
    }
  });

  let menu = document.getElementById("menu");
  function menuToggle() {
    menu.classList.toggle("menu-closed");
    body.classList.toggle("bg-black/50");
  }
});
