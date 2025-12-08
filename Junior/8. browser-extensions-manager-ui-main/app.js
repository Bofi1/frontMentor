// Ejemplo de JavaScript para alternar el tema:
const html = document.documentElement; // Obtiene el <html>

let main = document.getElementById("main");

// Paso 1: Declarar una variable de acceso global
// La inicializamos como null o un arreglo vacío.
// Aquí guardaremos los datos.
let globalData = null;

// Función asíncrona para cargar los datos
async function loadJSON() {
  try {
    // Usa 'await' para esperar la respuesta del servidor (o del filesystem en este caso)
    const response = await fetch("/data.json");

    // Verifica si la solicitud fue exitosa (código de estado 200-299)
    if (!response.ok) {
      throw new Error(
        `Error de red o archivo no encontrado: ${response.status}`
      );
    }

    // Usa 'await' para convertir el cuerpo de la respuesta a un objeto/arreglo JSON
    const data = await response.json();

    // Paso 2: Asignar los datos a la variable global
    globalData = data;

    console.log(
      "✅ Datos cargados globalmente. Puedes acceder a 'globalData' ahora."
    );

    // Ejemplo de uso:
    // console.log("Primer elemento:", globalData[0]);
  } catch (error) {
    console.error("❌ Fallo al cargar el archivo JSON:", error);
  }
}

// Llama a la función para iniciar la carga
loadJSON().then(() => {
  renderComponents(globalData);
});

function renderComponents(info) {
  const components = info.map((component) => {
    return `      
    <div class="bg-[#1F2535] p-5 flex flex-col rounded-xl max-w-[400px] min-h-[200px] justify-between dark:bg-white shadow-xl ">
        <div class="flex flex-row gap-5 items-start">
          <img src="${component.logo}" alt="" />
          <div>
            <h2 class="text-white dark:text-[#1F2535] font-bold text-xl">${
              component.name
            }</h2>
            <p class="text-[#838690]">
              ${component.description}
            </p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-4">
          <button id="${component.id}"
            class="font-bold appearance-none outline-none px-4 py-2 rounded-3xl text-white border-2 border-[#444959] dark:text-[#1F2535] dark:border-gray-200 text-sm" onclick="remove(event)"
          >
            Remove
          </button>
          <label for="isValidSwitch${component.id}">
            <div class="bg-[#525767] transition-all duration-300 ease-in-out w-[50px] h-6 hover:cursor-pointer rounded-xl p-[3px] dark:bg-[#C6C5C7] flex ${
              component.isActive == true ? "active dark:active" : ""
            }">
              <div class="bg-white rounded-full w-[18px] h-full transition-all duration-300 ease-in-out ${
                component.isActive == true ? "activeBtn" : ""
              }"></div>
            </div>
          </label>
          <input ${
            component.isActive == true ? "checked" : ""
          } onclick="switchActive(event, ${
      component.id
    })" class="hidden" type="checkbox" name="" id="isValidSwitch${
      component.id
    }" />
        </div>
      </div>
      `;
  });

  const HTMLrenderComponents = components.join(``);

  main.innerHTML = HTMLrenderComponents;
}

function remove(event) {
  const btnTarget = event.target.id;
  event.target.parentElement.parentElement.classList.add("scale-110");

  setTimeout(() => {
    event.target.parentElement.parentElement.classList.add("scale-[0]");
    event.target.parentElement.parentElement.classList.add("opacity-50");
  }, 200);

  setTimeout(() => {
    event.target.parentElement.parentElement.remove();
  }, 400);

  event.target.parentElement.parentElement.classList.add("opacity-50");

  globalData = globalData.filter((globalDataRemove) => {
    return globalDataRemove.id != btnTarget;
  });

  console.log(globalData);
}

function switchActive(event, componentID) {
  if (event.target.checked) {
    event.target.previousElementSibling.firstElementChild.classList.add(
      "active"
    );
    event.target.previousElementSibling.firstElementChild.firstElementChild.classList.add(
      "activeBtn"
    );
  } else {
    event.target.previousElementSibling.firstElementChild.classList.remove(
      "active"
    );
    console.log(
      event.target.previousElementSibling.firstElementChild.firstElementChild.classList.remove(
        "activeBtn"
      )
    );
  }

  globalData = globalData.map((objeto) => {
    // Buscamos si el ID del objeto coincide con el ID del checkbox
    if (objeto.id == componentID) {
      // Si coincide, retornamos un nuevo objeto CON la propiedad 'isActive' actualizada
      return {
        ...objeto, // Copiamos todas las demás propiedades
        isActive: event.target.checked, // Sobreescribimos la propiedad isActive
      };
    }

    // Si no coincide, retornamos el objeto sin cambios
    return objeto;
  });

  console.log(globalData);
}

function activeFilter() {
  globalDataActive = globalData.filter((onlyActive) => {
    return onlyActive.isActive == true;
  });

  renderComponents(globalDataActive);
}

function falseFilter() {
  globalDataActive = globalData.filter((onlyActive) => {
    return onlyActive.isActive == false;
  });

  renderComponents(globalDataActive);
}

let navegation = document.getElementById("navegation");
let allNav = document.getElementById("allNav");
let activeNav = document.getElementById("activeNav");
let inactiveNav = document.getElementById("inactiveNav");

navegation.addEventListener("change", (event) => {
  label = event.target.parentElement;

  if (event.target.value === "All") {
    console.log("radio All seleccionado");

    if (allNav.checked) {
      allNav.parentElement.classList.add("checked", "dark:checked");
      activeNav.parentElement.classList.remove("checked", "dark:checked");
      inactiveNav.parentElement.classList.remove("checked", "dark:checked");
    }

    main.innerHTML = "";

    renderComponents(globalData);
  }

  if (event.target.value === "Active") {
    console.log("radio Active seleccionado");

    if (activeNav.checked) {
      allNav.parentElement.classList.remove("checked", "dark:checked");
      activeNav.parentElement.classList.add("checked", "dark:checked");
      inactiveNav.parentElement.classList.remove("checked", "dark:checked");
    }

    main.innerHTML = "";

    activeFilter();
  }

  if (event.target.value === "Inactive") {
    console.log("radio Inactive seleccionado");

    if (inactiveNav.checked) {
      allNav.parentElement.classList.remove("checked", "dark:checked");
      activeNav.parentElement.classList.remove("checked", "dark:checked");
      inactiveNav.parentElement.classList.add("checked", "dark:checked");
    }

    main.innerHTML = "";

    falseFilter();
  }
});

let darkModeBtn = document.getElementById("darkModeBtn");
let iconBtn = document.getElementById("iconBtn");

darkModeBtn.addEventListener("click", () => {
  darkModeToggle();
});

const htmlElement = document.documentElement;

function darkModeToggle() {
  htmlElement.classList.toggle("dark");

  if (htmlElement.classList.contains("dark")) {
    iconBtn.src = "assets/images/icon-moon.svg";
    console.log("dark mode");
  } else {
    iconBtn.src = "assets/images/icon-sun.svg";
    console.log("light mode");
  }
}
