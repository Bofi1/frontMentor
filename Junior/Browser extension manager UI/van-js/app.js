window.addEventListener("DOMContentLoaded", () => {
  let extensions = [];
  const listContainer = document.getElementById("extensions-list");

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      extensions = data; // guardamos las extensiones
      renderExtensions(extensions); // primera pintada
    })
    .catch((err) => console.error("Error cargando JSON:", err));

  function renderExtensions(data) {
    listContainer.innerHTML = ""; // limpiar antes de pintar

    data.forEach((ext) => {
      const card = document.createElement("div");
      card.className =
        "bg-white text-black dark:text-white dark:bg-[#1F2535] p-5 rounded-xl flex flex-col gap-8 shadow-xl";

      const cardContent = `
             <div class="flex gap-5 items-start">
          <img src="${ext.logo}" alt="" />
          <div class="flex flex-col gap-1">
            <h3 class="text-xl font-bold">${ext.name}</h3>
            <p class="text-sm text-[gray] dark:text-white">
              ${ext.description}
            </p>
          </div>
        </div>

        <div class="flex justify-between items-center ">
          <button
            class="remove-btn px-5 py-2 rounded-full border-[1px] border:gray dark:border-white text-sm hover:bg-red-400 hover:text-[#1F2535] hover:border-red-400 font-bold"
            type="button"
          >
            Remove
          </button>

          <label class="flex cursor-pointer">
            <input id="checkbox-btn" class="hidden checkbox" type="checkbox" ${
              ext.isActive ? "checked" : ""
            }/>
            <span
              class="flex w-12 h-7 bg-[#cfcece] dark:bg-[#525868] ball-container items-center rounded-full p-1 ${
                ext.isActive ? "!bg-red-400" : ""
              }"
            >
              <span class="bg-white ball w-5 h-5 rounded-full transition ${
                ext.isActive ? "translate-x-5" : ""
              }"></span>
            </span>
          </label>
        </div>
    `;

      card.innerHTML = cardContent;

      // switch function
      const checkbox = card.querySelector(".checkbox");
      const ballContainer = card.querySelector(".ball-container");
      const ball = card.querySelector(".ball");

      checkbox.addEventListener("click", () => {
        ext.isActive = checkbox.checked;

        if (checkbox.checked == true) {
          console.log("es verdadero");
          ball.classList.add("translate-x-5");
          ballContainer.classList.add("!bg-red-400");
        }

        if (checkbox.checked == false) {
          console.log("es falso");
          ball.classList.remove("translate-x-5");
          ballContainer.classList.remove("!bg-red-400");
        }
      });

      // Remove button fuction
      const removeBtn = card.querySelector(".remove-btn");
      removeBtn.addEventListener("click", () => {
        card.remove();

        extensions = extensions.filter((item) => item !== ext);
      });

      listContainer.appendChild(card);
    });
  }

  // filters

  const allBtn = document.getElementById("allBtn");
  const activeBtn = document.getElementById("activeBtn");
  const inactiveBtn = document.getElementById("inactiveBtn");

  allBtn.addEventListener("click", () => {
    renderExtensions(extensions); // muestra todos
  });

  activeBtn.addEventListener("click", () => {
    const activeExtensions = extensions.filter((ext) => ext.isActive);
    renderExtensions(activeExtensions);
  });

  inactiveBtn.addEventListener("click", () => {
    const inactiveExtensions = extensions.filter((ext) => !ext.isActive);
    renderExtensions(inactiveExtensions);
  });

  // darkMode

  const themeToggle = document.querySelector("#themeToggle");

  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });

  renderExtensions(extensions);
});
