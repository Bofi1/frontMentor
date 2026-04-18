import { useState, useRef } from "react";

import DragAndDrop from "./DragAndDrop";
import FormField from "./FormField";
import { OrbitProgress } from "react-loading-indicators";

function Form({
  handleImageChange,
  dragError,
  setDragError,
  image,
  setImage,
  setFromSent,
  formData,
  setFormData,
}) {
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    github: "",
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === "fullName") {
      finalValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");

      finalValue = finalValue.replace(/\s{2,}/g, " ");
    }

    if (name === "github") {
      finalValue = value.replace(/\s/g, "");

      if (finalValue.length > 0 && !finalValue.startsWith("@")) {
        finalValue = "@" + finalValue;
      }
    }

    setFormData({ ...formData, [name]: finalValue });

    validate(e.target.name, e.target.value);
  };

  const validate = (name, value) => {
    const trimmedValue = value.trim();

    switch (name) {
      case "fullName":
        if (trimmedValue.length === 0) return "This field cannot be empty";
        if (trimmedValue.length < 3) return "Name is too short";
        // Ya no necesitamos validar números aquí porque el handleChange los bloquea
        return "";

      case "email":
        if (trimmedValue.length === 0) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? "Please enter a valid email" : "";

      case "github":
        if (trimmedValue.length === 0) return "Github username is required";
        if (!value.startsWith("@")) return "Username must start with @";

      // Validamos que después de la @ solo haya letras, números o guiones (formato oficial de GH)

      default:
        return "";
    }
  };

  const [loading, setLoading] = useState(false);

  const handleBlur = async (e) => {
    // Agregamos 'async'
    const { name, value } = e.target;

    // 1. Validación de formato (la que ya tienes)
    let errorMessage = validate(name, value);

    // 2. Validación de existencia (Solo si el formato está bien y es el campo de github)
    if (!errorMessage && name === "github" && value.length > 1) {
      setLoading(true);

      const username = value.replace("@", ""); // GitHub no usa la @ en su API
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.status === 404) {
          errorMessage = "User not found on GitHub";
        }
      } catch (error) {
        // Si falla la red, no bloqueamos al usuario, pero avisamos por consola
        console.error("GitHub API error:", error);
      }
    }

    // 3. Actualizamos los errores
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2. Aquí es donde haces la validación final de todos los campos
    const newErrors = {};
    Object.keys(formData).forEach((name) => {
      const error = validate(name, formData[name]);
      if (error) newErrors[name] = error;
    });

    !image
      ? setDragError({ ...dragError, DragAndDropError: true })
      : setDragError({ ...dragError, DragAndDropError: false });

    !image
      ? console.log("no hay archivo" + fileInputRef.value)
      : console.log("si hay" + fileInputRef.value);

    // 3. Si hay errores, los mostramos y no dejamos pasar
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else if (image) {
      console.log("¡Formulario enviado con éxito!");
      setFromSent(true);
      console.log(image);
    }
  };

  return (
    <form className="w-full grid gap-7 max-w-[400px]" onSubmit={handleSubmit}>
      <DragAndDrop
        handleImageChange={handleImageChange}
        dragError={dragError}
        image={image}
        setImage={setImage}
        setDragError={setDragError}
        fileInputRef={fileInputRef}
      />

      <div className="grid gap-5">
        <FormField
          label={"Full Name"}
          type={"text"}
          name={"fullName"}
          value={formData.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.fullName}
          maxLength={20}
        />
        <FormField
          label={"Email Address"}
          type={"email"}
          name={"email"}
          placeholder={"example@email.com"}
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />
        <FormField
          label={"Github Username"}
          type={"text"}
          name={"github"}
          placeholder={"@yourusername"}
          value={formData.github}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.github}
        />
        <div className="w-full relative flex justify-center mt-5">
          <input
            type="submit"
            className="bg-[#F67564] w-full py-3 px-5 rounded-xl font-bold cursor-pointer"
            value={"Generate My Ticket"}
          />
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="scale-50">
                <OrbitProgress
                  variant="track-disc"
                  speedPlus="0"
                  easing="linear"
                  color="#1A163B" // Un color que contraste con el fondo naranja
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default Form;

// export default function TicketForm() {
//   // 1. Guardamos los datos en un solo objeto para no tener mil variables
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     github: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("¡Listo! Datos enviados:", formData);
//     // Aquí es donde luego cambiaremos la pantalla al Ticket
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">

//         {/* Campo: Nombre */}
//         <div className="flex flex-col gap-2">
//           <label className="text-white font-medium">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Jonatan Kristof"
//             className="p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-orange-400 transition-all"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Campo: Email */}
//         <div className="flex flex-col gap-2">
//           <label className="text-white font-medium">Email Address</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="example@email.com"
//             className="p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-orange-400 transition-all"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Campo: GitHub */}
//         <div className="flex flex-col gap-2">
//           <label className="text-white font-medium">GitHub Username</label>
//           <input
//             type="text"
//             name="github"
//             placeholder="@yourusername"
//             className="p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-orange-400 transition-all"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Botón Naranja */}
//         <button
//           type="submit"
//           className="mt-4 bg-[#f67e7e] hover:bg-[#ff8f8f] text-[#0b0019] font-extrabold py-4 rounded-lg shadow-lg transform active:scale-95 transition-all"
//         >
//           Generate My Ticket
//         </button>

//       </form>
//     </div>
//   );
// }

// export default function AvatarUpload() {
//   const [image, setImage] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Validar tamaño (500KB = 512000 bytes)
//       if (file.size > 512000) {
//         alert("¡Archivo muy grande! Máximo 500KB.");
//         return;
//       }
//       // Crear la URL para la vista previa
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="flex flex-col gap-3 w-full">
//       <label className="text-white font-medium">Upload Avatar</label>

//       {/* Esta es la zona donde haces click */}
//       <div
//         onClick={() => fileInputRef.current.click()}
//         className="group cursor-pointer border-2 border-dashed border-white/20 bg-white/5 hover:bg-white/10 rounded-xl p-8 flex flex-col items-center justify-center transition-all"
//       >
//         {/* Si hay imagen, la mostramos. Si no, mostramos el icono de "Upload" */}
//         {image ? (
//           <div className="relative">
//             <img src={image} alt="Avatar" className="w-20 h-20 rounded-xl object-cover border border-white/50" />
//             <button
//               onClick={(e) => { e.stopPropagation(); setImage(null); }}
//               className="absolute -top-2 -right-2 bg-black/50 text-white text-xs p-1 rounded-full hover:bg-red-500"
//             >
//               ✕
//             </button>
//           </div>
//         ) : (
//           <>
//             <div className="bg-white/10 p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform">
//               {/* Aquí iría tu icono de nube */}
//               <span className="text-2xl">☁️</span>
//             </div>
//             <p className="text-white/60 text-sm text-center">Drag and drop or click to upload</p>
//           </>
//         )}
//       </div>

//       {/* Input oculto que hace el trabajo sucio */}
//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleImageChange}
//         accept="image/png, image/jpeg"
//         className="hidden"
//       />

//       <p className="text-white/40 text-xs flex items-center gap-2">
//         <span>ℹ️</span> Upload your photo (JPG or PNG, max size: 500KB).
//       </p>
//     </div>
//   );
// }

// const [isDragging, setIsDragging] = useState(false);

// const handleDragOver = (e) => {
//   e.preventDefault(); // CRUCIAL: Evita que el navegador abra la imagen
//   setIsDragging(true);
// };

// const handleDragLeave = () => {
//   setIsDragging(false);
// };

// const handleDrop = (e) => {
//   e.preventDefault();
//   setIsDragging(false);

//   // Obtenemos el archivo desde el "drop" en lugar del "click"
//   const file = e.dataTransfer.files[0];

//   if (file) {
//     if (file.size > 512000) {
//       alert("Máximo 500KB");
//       return;
//     }
//     setImage(URL.createObjectURL(file));
//   }
// };
