import { useState, useEffect } from "react";
import wordsData from "../../public/data.json";

const TypingEngine = ({ startTyping, setStartTyping }) => {
  const [chars, setChars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Cargamos las palabras al inicio
  useEffect(() => {
    const list = wordsData.english; // se obtiene el array
    const shuffled = [...list].sort(() => Math.random() - 0.5); // se revuelve todo
    const selected = shuffled.slice(0, 20); // se agarran los primeros 20 elementos del arrays (20 palabras)

    const initialChars = selected
      .join(" ") // ["Hola", "mundo"] => "Hola mundo" (todos los elementos del ararys se convierte en un solo string)
      .split("") // "Hola mundo" => ["H", "o", "l", "a", " ", "m", "u", "n", "d", "o" ] (separe un string/entero letra por letra)
      .map((letter) => ({
        // letter es la letra osea cada array que recorre
        char: letter,
        status: "pending",
      })); // hace un solo array asi
    /**
       
      [
        { "char": "H", "status": "pending" }, // <--- chars[0].char = H --- chars[0].status = "pending" (asi es como accedes a c/u)
        { "char": "o", "status": "pending" },
        { "char": "l", "status": "pending" },
        { "char": "a", "status": "pending" },
        { "char": " ", "status": "pending" }, // <--- El espacio del .join(" ")
        { "char": "m", "status": "pending" },
        { "char": "u", "status": "pending" },
        { "char": "n", "status": "pending" },
        { "char": "d", "status": "pending" },
        { "char": "o", "status": "pending" }
    ]
    */

    setChars(initialChars); // se guarda en chars
  }, []);

  useEffect(() => {
    console.log(chars.length);
  }, [chars]);

  useEffect(() => {
    console.log("el current index es de " + currentIndex);
  }, [currentIndex]);

  // 2. FUNCIÓN CLAVE: Maneja la escritura
  const handleInput = (e) => {
    const inputValue = e.target.value;
    const lastChar = inputValue.slice(-1); // toma la ultima letra escrita

    // Si ya terminamos el texto, no hacemos nada
    if (currentIndex >= chars.length) return;

    // Clonamos el estado para no mutarlo directamente (Buena práctica Front-end)
    const newChars = [...chars];

    // Comparamos la letra escrita con la que corresponde
    if (lastChar === chars[currentIndex].char) {
      newChars[currentIndex].status = "correct";
    } else {
      newChars[currentIndex].status = "incorrect";
    }

    // Actualizamos estados
    setChars(newChars);
    setCurrentIndex((prev) => prev + 1);

    if (!startTyping && e.target.value.length > 0) {
      setStartTyping(true); // Esto activa el useEffect de arriba
    }

    // Limpiamos el input para que esté listo para la siguiente letra
    e.target.value = "";
  };

  const handleKeyDown = (e) => {
    // Detectamos si el usuario presionó la tecla de borrar
    if (e.key === "Backspace") {
      // Si no estamos al inicio, podemos retroceder
      if (currentIndex > 0) {
        const newChars = [...chars];

        // Retrocedemos el índice
        const prevIndex = currentIndex - 1;

        // Devolvemos la letra anterior al estado gris (pending)
        newChars[prevIndex].status = "pending";

        setChars(newChars);
        setCurrentIndex(prevIndex);
      }
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-10 bg-[#323437] rounded-xl overflow-hidden">
      <div className="flex flex-wrap font-mono text-2xl leading-relaxed tracking-wider select-none">
        {chars.map((item, index) => {
          //el index es algo por defecto del map
          let colorClass = "text-[#646669]"; // Gris (pending)
          if (item.status === "correct") colorClass = "text-green-400"; // Verde
          if (item.status === "incorrect")
            colorClass = "text-[#ca4754] border-b-2 border-[#ca4754]"; // Rojo

          return (
            <span
              key={index}
              className={`relative inline-block font-mono text-2xl ${colorClass} ${
                index === currentIndex
                  ? "after:content-[''] after:absolute after:left-0  after:w-[2px] after:h-full after:bg-[#e2b714] after:animate-pulse"
                  : ""
              }`}
              style={{ whiteSpace: "pre" }} // ESTO ES CLAVE: mantiene el ancho del espacio
            >
              {item.char}
            </span>
          );
        })}
      </div>

      {/* Input invisible que dispara la lógica */}
      <input
        type="text"
        className="absolute inset-0 w-full h-full opacity-0 cursor-default"
        autoFocus
        onChange={handleInput}
        onKeyDown={handleKeyDown} // <--- Añadimos este evento
      />
    </div>
  );
};

export default TypingEngine;
