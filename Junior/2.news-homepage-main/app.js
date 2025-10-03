window.addEventListener("DOMContentLoaded", () => {
  buttonMenu = document.getElementById("button-menu");

  buttonMenu.addEventListener("click", () => {
    console.log(buttonMenu.src);

    if (buttonMenu.src.includes("/assets/images/icon-menu.svg")) {
      buttonMenu.src = "./assets/images/icon-menu-close.svg";
    } else {
      buttonMenu.src = "./assets/images/icon-menu.svg";
    }
  });
});
