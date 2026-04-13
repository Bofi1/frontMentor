import React from "react";
import Form from "./Form";
import { useState, useEffect } from "react";
import Ticket from "./Ticket";

function Main() {
  const [image, setImage] = useState(null);
  const [formSent, setFromSent] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    github: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setImage(null);
    }

    if (!file) {
      console.log("El usuario canceló, mantenemos la imagen anterior.");
      return;
    }

    if (file) {
      // Validar tamaño (500KB = 512000 bytes)
      if (file.size > 512000) {
        setErrors((prev) => ({
          ...prev,
          DragAndDropError: true,
        }));

        e.target.value = "";
        return;
      }
      // Crear la URL para la vista previa
      setImage(URL.createObjectURL(file));
    }
  };

  const [dragError, setDragError] = useState({
    DragAndDropError: false,
  });

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <main className="relative min-h-screen w-full px-5">
      <section className="relative z-10 flex flex-col items-center justify-center py-20 gap-6">
        {!formSent ? (
          <>
            <div className="flex flex-col items-center gap-5">
              <img src="/logo-full.svg" alt="logo-full" />
              <h1 className="text-white font-semibold text-3xl text-center">
                Your Journey to Coding Conf 2025 Starts Here!
              </h1>
              <p className="text-[#9694AD] text-center px-10 text-lg">
                Secure your spot at next year´s biggest coding conference.
              </p>
            </div>
            <Form
              image={image}
              handleImageChange={handleImageChange}
              dragError={dragError}
              setImage={setImage}
              setDragError={setDragError}
              setFromSent={setFromSent}
              formData={formData}
              setFormData={setFormData}
            />
          </>
        ) : (
          <>
            <div className="flex flex-col items-center gap-10">
              <img src="/logo-full.svg" alt="logo-full" />
              <h1 className="text-white font-semibold text-3xl lg:text-6xl text-center max-w-180">
                Congrats, {formData.fullName}! Your ticket is ready.
              </h1>
              <p className="text-[#9694AD] text-center  text-lg max-w-110">
                We´ve emailed your ticket to{" "}
                <span className="text-[#FA7462]">{formData.email}</span> and
                will send updates in the run up to the event.
              </p>
              <Ticket />
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Main;
