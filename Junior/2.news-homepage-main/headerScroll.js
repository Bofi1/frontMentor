window.addEventListener("DOMContentLoaded", () => {
  let lastScroll = 0;
  let header = document.getElementById("header");
  const offset = 50; // pixeles antes de que empieze a ocultarse

  window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset; // es el valor que se hizo scroll

    if (Math.abs(currentScroll - lastScroll) < 40) return; // evitar scroll muy pequeños

    if (currentScroll > lastScroll && currentScroll > offset) {
      // Scroll hacia abajo
      header.classList.add("header-scroll");
    } else {
      // Scroll hacia arriba
      header.classList.remove("header-scroll");
    }

    lastScroll = currentScroll;
  });
});
