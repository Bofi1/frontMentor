function Form() {
  return (
    <div className="w-full">
      <div>
        <p className="text-[#EAE8FB] text-lg mb-2 font-semibold">
          Upload Avatar
        </p>
        <label htmlFor="">
          <div className="bg-[#1C173F] rounded-2xl flex flex-col items-center border-2 border-[#504B74] border-dashed py-7 cursor-pointer">
            <img
              className="bg-[#2d2d4b]/90 p-3 shadow-2xl rounded-xl border border-white/10 mb-4"
              src="/icon-upload.svg"
              alt="icon-upload"
            />
            <p className="text-[#9492AF]">Drag and drop or click to upload</p>
          </div>
          <input type="file" />
        </label>
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
