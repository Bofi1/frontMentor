import { useRef } from "react";

function Form({ handleImageChange }) {
  const fileInputRef = useRef(null);

  return (
    <div
      className="w-full"
      onClick={() => {
        fileInputRef.current.click();
      }}
    >
      <div>
        <p className="text-[#EAE8FB] text-lg mb-2 font-semibold">
          Upload Avatar
        </p>
        <div className="bg-[#1C173F] rounded-2xl flex flex-col items-center border-2 border-[#504B74] border-dashed py-7 cursor-pointer">
          <img
            className="bg-[#2d2d4b]/90 p-3 shadow-2xl rounded-xl border border-white/10 mb-4"
            src="/icon-upload.svg"
            alt="icon-upload"
          />
          <p className="text-[#9492AF]">Drag and drop or click to upload</p>
        </div>
        <input
          id="avatar-upload"
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
        />
        <div className="flex gap-1 items-center mt-3">
          <img src="/icon-info.svg" alt="icon-info" />
          <span className="text-[#686782] text-[0.7rem]">
            Upload your photo (JPG or PNG, max size: 500KB)
          </span>
        </div>
      </div>
    </div>
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
