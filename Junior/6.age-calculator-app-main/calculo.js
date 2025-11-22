function calculateAge() {
  // 1. Obtener Datos
  const day = parseInt(document.getElementById("day-input").value);
  const month = parseInt(document.getElementById("month-input").value);
  const year = parseInt(document.getElementById("year-input").value);

  // **IMPORTANTE**: Agregar validación de entrada aquí (campos vacíos, formato, fecha válida)

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  // Validar que la fecha de nacimiento no sea en el futuro
  if (birthDate > today) {
    console.error("La fecha de nacimiento no puede ser en el futuro.");
    // Mostrar error en la interfaz
    return;
  }

  // 2. Calcular Diferencia
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // 2a. Ajuste de Días y Meses
  if (days < 0) {
    months--;
    // Calcula los días del mes anterior
    const yearOfLastMonth =
      today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear();
    const monthForDaysInMonth =
      today.getMonth() === 0 ? 11 : today.getMonth() - 1;

    // El día 0 de un mes da el último día del mes anterior
    const daysInLastMonth = new Date(
      yearOfLastMonth,
      today.getMonth(),
      0
    ).getDate();

    days += daysInLastMonth;
  }

  // 2b. Ajuste de Meses y Años
  if (months < 0) {
    years--;
    months += 12;
  }

  // 3. Mostrar Resultado
  document.getElementById("years-result").textContent = years;
  document.getElementById("months-result").textContent = months;
  document.getElementById("days-result").textContent = days;
}

// Llama a esta función en un evento, como un clic de botón.
// document.getElementById('calculate-button').addEventListener('click', calculateAge);
