// --- Validación del Día (DD) ---
if (isNaN(day)) {
  displayError("day", "El campo no puede estar vacío.");
  isValid = false;
} else if (day < 1 || day > 31) {
  displayError("day", "Debe ser un día válido (1-31).");
  isValid = false;
} else {
  clearError("day");
}

// --- Validación del Mes (MM) ---
if (isNaN(month)) {
  displayError("month", "El campo no puede estar vacío.");
  isValid = false;
} else if (month < 1 || month > 12) {
  displayError("month", "Debe ser un mes válido (1-12).");
  isValid = false;
} else {
  clearError("month");
}

// --- Validación del Año (YYYY) ---
const currentYear = new Date().getFullYear();
if (isNaN(year)) {
  displayError("year", "El campo no puede estar vacío.");
  isValid = false;
} else if (year > currentYear) {
  displayError("year", "El año no puede ser en el futuro.");
  isValid = false;
} else if (year < 100) {
  // Un mínimo razonable para asegurar 4 dígitos
  displayError("year", "Debe ser un año de 4 dígitos.");
  isValid = false;
} else {
  clearError("year");
}

////////

function calculateAge() {
  if (!validateInputs()) {
    // Llamar a la función que contiene toda la lógica de validación
    // Si hay errores, detenemos la ejecución y no mostramos resultados
    return;
  }

  // --- Si la validación pasó (isValid es true) ---
  // AÑADE AQUÍ LA LÓGICA DE CÁLCULO DE EDAD COMPLETA (Años, Meses, Días)
  // ...
}
