import React, { useState } from "react";

function Filters() {
  // Estado para manejar el valor seleccionado
  const [selectedStatus, setSelectedStatus] = useState("All"); // Valor inicial

  // Función para manejar el cambio de selección
  const handleChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className="flex flex-col justify-between items-center dark:text-white tablet:flex-row gap-5 tablet:gap-0">
      <h3 className="text-2xl font-bold">Extensions List</h3>
      <div className="flex gap-3">
        <label className="cursor-pointer">
          <input
            id="allBtn"
            type="radio"
            name="status"
            value="All"
            checked={selectedStatus === "All"} // Esta línea asegura que el radio sea marcado
            onChange={handleChange} // Esta línea maneja el cambio
            className="peer hidden"
          />
          <span className="px-5 py-3 rounded-full bg-white shadow-xl dark:bg-[#1F2535] transition peer-checked:bg-red-500 peer-checked:text-white dark:peer-checked:text-[#081231]">
            All
          </span>
        </label>
        <label className="cursor-pointer">
          <input
            id="activeBtn"
            type="radio"
            name="status"
            value="Active"
            checked={selectedStatus === "Active"} // Esta línea asegura que el radio sea marcado
            onChange={handleChange} // Esta línea maneja el cambio
            className="peer hidden"
          />
          <span className="px-5 py-3 rounded-full bg-white shadow-xl dark:bg-[#1F2535] transition peer-checked:bg-red-500 peer-checked:text-white dark:peer-checked:text-[#081231]">
            Active
          </span>
        </label>
        <label className="cursor-pointer">
          <input
            id="inactiveBtn"
            type="radio"
            name="status"
            value="Inactive"
            checked={selectedStatus === "Inactive"} // Esta línea asegura que el radio sea marcado
            onChange={handleChange} // Esta línea maneja el cambio
            className="peer hidden"
          />
          <span className="px-5 py-3 rounded-full bg-white shadow-xl dark:bg-[#1F2535] transition peer-checked:bg-red-500 peer-checked:text-white dark:peer-checked:text-[#081231]">
            Inactive
          </span>
        </label>
      </div>
    </div>
  );
}

export default Filters;
