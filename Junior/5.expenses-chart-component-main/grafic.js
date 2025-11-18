const ctx = document.getElementById("myChart");
const JSON_FILE_PATH = "./data.json";

async function createChartFromJSON() {
  // 1. Cargar el archivo JSON usando fetch
  try {
    const response = await fetch(JSON_FILE_PATH);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("enlazado correctamente");

    const dataFromJSON = await response.json();

    // 2. Mapear los datos del JSON al formato de Chart.js
    const labels = dataFromJSON.map((item) => item.day); // Obtiene "mon", "tue", etc.
    const amounts = dataFromJSON.map((item) => item.amount); // Obtiene 17.45, 34.91, etc.

    // Encuentra el valor más alto para darle un color diferente
    const maxValue = Math.max(...amounts);

    // Crea los arrays de colores para el gráfico
    const backgroundColors = amounts.map(
      (amount) =>
        amount === maxValue
          ? "RGB(117, 181, 188)" // Color azul opaco para el máximo
          : "RGB(236, 117, 93)" // Color rojo opaco para el resto
    );

    const hoverBackgroundColors = amounts.map(
      (amount) =>
        amount === maxValue
          ? "RGB(180, 223, 229)" // Color azul semitransparente para el máximo
          : "RGB(255, 155, 135)" // Color rojo semitransparente para el resto
    );

    // charts.js adaptado con el .JSON (hasta abajo esta sin el .JSON)
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels, // Utiliza las etiquetas del JSON
        datasets: [
          {
            data: amounts, // Utiliza los valores del JSON
            backgroundColor: backgroundColors,

            hoverBackgroundColor: hoverBackgroundColors,
            borderWidth: 1,
            borderRadius: 3,
          },
        ],
      },

      options: {
        scales: {
          x: {
            display: true,
            grid: {
              display: false,
            },
          },
          y: {
            display: false,
          },
        },

        plugins: {
          legend: { display: false }, // 👈 quita completamente la leyenda

          tooltip: {
            displayColors: false, // quita el cuadrito
            callbacks: {
              label: function (context) {
                return "$" + context.raw; // 👈 solo el valor numérico
              },
              title: function () {
                return ""; // 👈 quita el título ("thu", "fri", etc)
              },
            },
          },
        },
      },
    });
  } catch (error) {
    // Es importante incluir un bloque 'catch' en un 'try...catch'
    console.error("Error al cargar datos:", error);
  }
  //
}

createChartFromJSON();

// asi es la estructura sin el .JSON
// const ctx = document.getElementById("myChart");

//       new Chart(ctx, {
//         type: "bar",
//         data: {
//           labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
//           datasets: [
//             {
//               data: [15, 31, 52, 31, 25, 45, 35],
//               backgroundColor: [
//                 "rgba(255, 99, 132, 1)", // mon (rojo opaco)
//                 "rgba(255, 99, 132, 1)", // tue (rojo opaco)
//                 "rgba(54, 162, 235, 1)", // wed (azul opaco)
//                 "rgba(255, 99, 132, 1)", // thu (rojo opaco)
//                 "rgba(255, 99, 132, 1)", // fri (rojo opaco)
//                 "rgba(255, 99, 132, 1)", // sat (rojo opaco)
//                 "rgba(255, 99, 132, 1)", // sun (rojo opaco)
//               ],

//               hoverBackgroundColor: [
//                 "rgba(255, 99, 132, 0.6)", // mon (rojo semitransparente)
//                 "rgba(255, 99, 132, 0.6)", // tue (rojo semitransparente)
//                 "rgba(54, 162, 235, 0.6)", // wed (azul semitransparente)
//                 "rgba(255, 99, 132, 0.6)", // thu (rojo semitransparente)
//                 "rgba(255, 99, 132, 0.6)", // fri (rojo semitransparente)
//                 "rgba(255, 99, 132, 0.6)", // sat (rojo semitransparente)
//                 "rgba(255, 99, 132, 0.6)", // sun (rojo semitransparente)
//               ],
//               borderWidth: 1,
//               borderRadius: 10,
//             },
//           ],
//         },

//         options: {
//           scales: {
//             x: {
//               display: true,
//               grid: {
//                 display: false,
//               },
//             },
//             y: {
//               display: false,
//             },
//           },

//           plugins: {
//             legend: { display: false }, // 👈 quita completamente la leyenda

//             tooltip: {
//               displayColors: false, // quita el cuadrito
//               callbacks: {
//                 label: function (context) {
//                   return "$" + context.raw; // 👈 solo el valor numérico
//                 },
//                 title: function () {
//                   return ""; // 👈 quita el título ("thu", "fri", etc)
//                 },
//               },
//             },
//           },
//         },
//       });
