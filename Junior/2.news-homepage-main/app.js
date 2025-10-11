window.addEventListener("DOMContentLoaded", () => {
  let buttonMenu = document.getElementById("button-menu");

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
  let overlay = document.getElementById("overlay");
  let body = document.getElementById("body");

  function menuToggle() {
    menu.classList.toggle("menu-closed");
    body.classList.toggle("body-closed");
    overlay.classList.toggle("hidden");
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.classList.contains("menu-closed")) {
      menuToggle();
      buttonMenu.src = "./assets/images/icon-menu.svg"; // Cambiar icono a menú cerrado
    }
  });
});
