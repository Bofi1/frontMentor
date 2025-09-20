import React, { useState, useEffect } from "react";

function App() {
  const [extensions, setExtensions] = useState([]);

  // Cargar las extensiones desde el archivo JSON
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setExtensions(data)) // Guardamos las extensiones
      .catch((err) => console.error("Error cargando JSON:", err));
  }, []);

  // Función para manejar el cambio de estado (activo/inactivo) de una extensión
  const toggleActive = (id) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((ext) =>
        ext.id === id
          ? { ...ext, isActive: !ext.isActive } // Cambiar estado de 'isActive'
          : ext
      )
    );
  };

  // Función para eliminar una extensión
  const removeExtension = (id) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((ext) => ext.id !== id)
    );
  };

  return (
    <div id="extensions-list">
      {extensions.map((ext) => (
        <ExtensionCard
          key={ext.id}
          extension={ext}
          toggleActive={toggleActive}
          removeExtension={removeExtension}
        />
      ))}
    </div>
  );
}

function ExtensionCard({ extension, toggleActive, removeExtension }) {
  return (
    <div className="bg-white text-black dark:text-white dark:bg-[#1F2535] p-5 rounded-xl flex flex-col gap-8 shadow-xl max-h-[202px] flex flex-col justify-between">
      <div className="flex gap-5 items-start">
        <img src={extension.logo} alt={extension.name} />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold">{extension.name}</h3>
          <p className="text-sm text-[gray] dark:text-white">
            {extension.description}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center ">
        <button
          className="remove-btn px-5 py-2 rounded-full border-[1px] border:gray dark:border-white text-sm hover:bg-red-400 hover:text-[#1F2535] hover:border-red-400 font-bold"
          type="button"
          onClick={() => removeExtension(extension.id)} // Eliminar extensión
        >
          Remove
        </button>

        <label className="flex cursor-pointer">
          <input
            className="hidden checkbox"
            type="checkbox"
            checked={extension.isActive}
            onChange={() => toggleActive(extension.id)} // Cambiar estado
          />
          <span
            className={`flex w-12 h-7 bg-[#cfcece] dark:bg-[#525868] ball-container items-center rounded-full p-1 ${
              extension.isActive ? "!bg-red-400" : ""
            }`}
          >
            <span
              className={`bg-white ball w-5 h-5 rounded-full transition ${
                extension.isActive ? "translate-x-5" : ""
              }`}
            ></span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default App;
