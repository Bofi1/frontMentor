import { useEffect, useState } from "react";
import axios from "axios";
import Extension from "./Extension";
import * as Images from "./index"; // Importamos el barril completo como un objeto

function BrowserContainer({ checkStatus }) {
  const [data, setData] = useState([]);

  const toggleExtension = (name) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.name === name ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        setData(response.data);
        console.log("JSON recuperado con Axios:", response.data);
      })
      .catch((error) => {
        console.error("Error al cargar el archivo:", error.message);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {data
        // .filter((item) => {
        //   if (checkStatus === "active") return item.isActive;
        //   if (checkStatus === "inactive") return !item.isActive;
        //   return true; // para "all"
        // })
        .map((item) => (
          <Extension
            key={item.name}
            logo={Images[item.logo]}
            name={item.name}
            description={item.description}
            active={item.isActive}
            // PASA LA FUNCIÓN QUE CAMBIA EL ARRAY ORIGINAL
            onToggle={() => toggleExtension(item.name)}
          />
        ))}
    </div>
  );
}

export default BrowserContainer;
