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
    <div class="bg-[#1F2535] p-5 flex flex-col rounded-xl">
        <div class="flex flex-row gap-5 items-start">
          <img src="${component.logo}" alt="" />
          <div>
            <h2 class="text-white font-bold text-xl">${component.name}</h2>
            <p class="text-[#838690]">
              ${component.description}
            </p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-4">
          <button
            class="appearance-none outline-none px-4 py-2 rounded-3xl text-white border-2 border-[#444959] text-sm"
          >
            Remove
          </button>
          <label for="isValidSwitch${component.id}">
            <div class="bg-[#525767] w-[50px] h-6 rounded-xl p-[3px] flex ${
              component.isActive == true ? "active" : ""
            }">
              <div class="bg-white rounded-full w-[18px] h-full "></div>
            </div>
          </label>
          <input class="" type="checkbox" name="" id="isValidSwitch${
            component.id
          }" />
        </div>
      </div>
      `;
  });

  const HTMLrenderComponents = components.join(``);

  main.innerHTML = HTMLrenderComponents;
}

// // mostrar nombres
// function show(info) {
//   const nombres = info.map((nombre) => {
//     return `<p>${nombre.name}, valor: ${nombre.isActive}</p>`;
//   });

//   const HTMLnombres = nombres.join(``);

//   padre.innerHTML = HTMLnombres;
// }

// // filtrar isActive False
// function activeFalse(info) {
//   const isActiveFalse = info.filter((isActiveFalseOne) => {
//     return isActiveFalseOne.isActive == false;
//   });

//   show(isActiveFalse);
// }

// function activeTrue(info) {
//   const isActiveFalse = info.filter((isActiveFalseOne) => {
//     return isActiveFalseOne.isActive !== false;
//   });

//   show(isActiveFalse);
// }
