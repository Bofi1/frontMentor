import React from "react";
import Form from "./Form";
import { useState } from "react";

function Main() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validar tamaño (500KB = 512000 bytes)
      if (file.size > 512000) {
        alert("¡Archivo muy grande! Máximo 500KB.");
        e.target.value = "";
        return;
      }
      // Crear la URL para la vista previa
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <main className="relative min-h-screen w-full px-5">
      <section className="relative z-10 flex flex-col items-center justify-center py-20 gap-6">
        {/* <Navbar />
      <FormularioTicket /> */}
        <div className="flex flex-col items-center gap-5">
          <img src="/logo-full.svg" alt="logo-full" />
          <h1 className="text-white font-semibold text-3xl text-center">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <p className="text-[#9694AD] text-center px-10 text-lg">
            Secure your spot at next year´s biggest coding conference.
          </p>
        </div>

        <Form handleImageChange={handleImageChange} />
      </section>
    </main>
  );
}

export default Main;
