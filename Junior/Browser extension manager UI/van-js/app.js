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
      "bg-[#1F2535] p-5 rounded-xl text-white flex flex-col gap-8";

    card.innerHTML = `
             <div class="flex gap-5 items-start">
          <img src="${ext.logo}" alt="" />
          <div class="flex flex-col gap-1">
            <h3 class="text-xl font-bold">${ext.name}</h3>
            <p class="text-sm">
              ${ext.description}
            </p>
          </div>
        </div>

        <div class="flex justify-between items-center ">
          <button
            class="remove-btn px-5 py-2 rounded-full border-[1px] border-white text-sm hover:bg-red-400 hover:text-[#1F2535] hover:border-red-400 font-bold"
            type="button"
          >
            Remove
          </button>

          <label class="flex cursor-pointer">
            <input id="checkbox-btn" class="hidden checkbox" type="checkbox" ${
              ext.isActive ? "checked" : ""
            }/>
            <span
              class="flex w-12 h-7 bg-[#525868] ball-container items-center rounded-full p-1 ${
                ext.isActive ? "!bg-red-400" : ""
              }"
            >
              <span class="bg-white ball w-5 h-5 rounded-full ${
                ext.isActive ? "translate-x-5" : ""
              }"></span>
            </span>
          </label>
        </div>
    `;

    // switch function
    const checkbox = card.querySelector(".checkbox");
    const ballContainer = card.querySelector(".ball-container");
    const ball = card.querySelector(".ball");

    checkbox.addEventListener("click", () => {
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

    const removeBtn = card.querySelector(".remove-btn");

    removeBtn.addEventListener("click", () => {
      card.remove();
    });

    listContainer.appendChild(card);
  });
}

renderExtensions(extensions);
