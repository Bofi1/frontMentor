document.addEventListener("DOMContentLoaded", () => {
  // 1. funcion para no sobrepasar length
  let day_input = document.getElementById("dd_input");
  let month_input = document.getElementById("mm_input");
  let year_input = document.getElementById("yy_input");

  let date_inputs = [day_input, month_input, year_input];

  for (let i = 0; i < date_inputs.length; i++) {
    date_inputs[i].addEventListener("input", function () {
      if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
      }

      if (this.value < 1) {
        this.value = "";
      }
    });
  }

  let button = document.getElementById("button");

  button.addEventListener("click", () => {
    let dayValue = parseInt(document.getElementById("dd_input").value);
    let dayValid = false;

    let monthValue = parseInt(document.getElementById("mm_input").value);
    let monthValid = false;

    let yearValue = parseInt(document.getElementById("yy_input").value);
    let yearValid = false;

    // 2.1 day validation
    if (isNaN(dayValue)) {
      error(day_input, "This field is required");
      clearCalculation();

      dayValid = false;
    } else if (dayValue < 1 || dayValue > 31) {
      error(day_input, "Must be a valid day");
      clearCalculation();

      dayValid = false;
    } else {
      dayValid = true;
      cleanError(day_input);
    }

    // 2.2 month validation
    if (isNaN(monthValue)) {
      error(month_input, "This field is required");
      clearCalculation();

      monthValid = false;
    } else if (monthValue < 1 || monthValue > 12) {
      error(month_input, "Must be a valid day");
      clearCalculation();

      monthValid = false;
    } else {
      monthValid = true;
      cleanError(month_input);
    }

    // 2.3 year validation
    let date = new Date();
    let actualYear = date.getFullYear();

    if (isNaN(yearValue)) {
      error(year_input, "This field is required");
      clearCalculation();
      yearValid = false;
    } else if (monthValue < 1 || yearValue > actualYear) {
      error(year_input, "Must be a valid day");
      clearCalculation();
      yearValid = false;
    } else {
      yearValid = true;
      cleanError(year_input);
    }

    // 3.  aqui se valida que no haya ej. 30 feb y sino pues ya se calcula
    if (dayValid && monthValid && yearValid) {
      let yourdate = new Date(yearValue, monthValue - 1, dayValue);
      let yourDay = yourdate.getDate();
      let yourMonth = yourdate.getMonth();
      let yourYear = yourdate.getFullYear();

      if (yourDay != dayValue) {
        error(day_input, "Must be a valid day");
        clearCalculation();
      } else {
        let birthday = new Date(yourYear, yourMonth, yourDay);

        console.log(birthday);

        calcularEdadExacta(birthday);
      }
    }
  });

  //  funcion para calcular los años que tienes
  function calcularEdadExacta(fechaNacimientoString) {
    // Asegúrate de que el input sea una cadena de fecha válida (ej: '1995-11-22')

    const hoy = new Date();
    const cumple = new Date(fechaNacimientoString);
    console.log(cumple);

    // 1. Calcular la diferencia inicial de los componentes
    let anios = hoy.getFullYear() - cumple.getFullYear();
    let meses = hoy.getMonth() - cumple.getMonth();
    let dias = hoy.getDate() - cumple.getDate();

    // 2. Ajuste de Días (Si el día actual es menor que el de nacimiento)
    if (dias < 0) {
      meses--; // Pedimos prestado 1 mes

      // Obtenemos los días que tenía el mes anterior
      // El constructor con día 0 devuelve el último día del mes anterior
      const anioParaMesAnterior =
        hoy.getMonth() === 0 ? hoy.getFullYear() - 1 : hoy.getFullYear();
      const mesAnterior = hoy.getMonth() === 0 ? 11 : hoy.getMonth() - 1;

      const diasMesAnterior = new Date(
        anioParaMesAnterior,
        mesAnterior + 1,
        0
      ).getDate();

      dias += diasMesAnterior;
    }

    // 3. Ajuste de Meses (Si el mes actual es menor que el de nacimiento)
    if (meses < 0) {
      anios--; // Pedimos prestado 1 año
      meses += 12; // Sumamos 12 meses
    }

    let yearShowed = document.getElementById("year_showed");
    let monthShowed = document.getElementById("month_showed");
    let dayShowed = document.getElementById("day_showed");

    yearShowed.innerHTML = anios;
    monthShowed.innerHTML = meses;
    dayShowed.innerHTML = dias;
  }

  // funcion para borrar los calcula a default
  function clearCalculation() {
    let yearShowed = document.getElementById("year_showed");
    let monthShowed = document.getElementById("month_showed");
    let dayShowed = document.getElementById("day_showed");

    yearShowed.innerHTML = "- -";
    monthShowed.innerHTML = "- -";
    dayShowed.innerHTML = "- -";
  }

  function error(input, text) {
    input.classList.add("border-red-500");
    input.previousElementSibling.classList.add("text-red-500");
    input.nextElementSibling.classList.add("text-red-500");
    input.nextElementSibling.classList.remove("hidden");
    input.nextElementSibling.innerText = text;
  }

  function cleanError(input, text) {
    input.classList.remove("border-red-500");
    input.previousElementSibling.classList.remove("text-red-500");
    input.nextElementSibling.classList.remove("text-red-500");
    input.nextElementSibling.innerText = "";
  }
});
error(day_input, "This field is required");
error(month_input, "Must be a valid day");
