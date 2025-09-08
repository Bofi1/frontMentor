// let extensions = [];
// const listContainer = document.getElementById("extensions-list");

// fetch("data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     extensions = data; // guardamos las extensiones
//     renderExtensions(extensions); // primera pintada
//   })
//   .catch((err) => console.error("Error cargando JSON:", err));

// function renderExtensions(data) {
//   listContainer.innerHTML = ""; // limpiar antes de pintar

//   data.forEach((ext) => {
//     const card = document.createElement("div");
//     card.className =
//       "bg-slate-800 rounded-2xl p-4 shadow-lg flex flex-col gap-3";

//     card.innerHTML = `
//       <h3 class="text-lg font-semibold">${ext.name}</h3>
//       <p class="text-sm text-slate-300">${ext.description}</p>

//       <div class="flex items-center justify-between">
//         <button class="remove px-3 py-1 bg-red-600 hover:bg-red-700 rounded-lg text-sm">Remove</button>

//         <label class="flex items-center gap-2 cursor-pointer">
//           <input type="checkbox" class="toggle hidden" ${
//             ext.isActive ? "checked" : ""
//           }>
//           <span class="w-10 h-5 flex items-center bg-slate-600 rounded-full p-1 transition ${
//             ext.isActive ? "bg-green-500" : ""
//           }">
//             <span class="dot bg-white w-4 h-4 rounded-full shadow-md transform ${
//               ext.isActive ? "translate-x-5" : ""
//             }"></span>
//           </span>
//         </label>
//       </div>
//     `;

//     listContainer.appendChild(card);
//   });
// }

// renderExtensions(extensions);
