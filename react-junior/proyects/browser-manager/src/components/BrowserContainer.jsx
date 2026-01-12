import { useEffect, useState } from "react";
import axios from "axios";
import Extension from "./Extension";
import * as Images from "./index"; // Importamos el barril completo como un objeto

function BrowserContainer({ checkStatus }) {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]); // Lo que se ve en pantalla

  useEffect(() => {
    axios.get("/data.json").then((response) => {
      setData(response.data);
      setDisplayData(response.data); // Al inicio coinciden
    });
  }, []);

  // ESCUCHA EL CLIC DE LOS BOTONES: Solo aquí filtramos físicamente la lista
  useEffect(() => {
    const filtered = data.filter((item) => {
      if (checkStatus === "active") return item.isActive;
      if (checkStatus === "inactive") return !item.isActive;
      return true;
    });
    setDisplayData(filtered);
  }, [checkStatus]); // <--- Solo se dispara cuando cambias de pestaña

  const toggleExtension = (name) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.name === name ? { ...item, isActive: !item.isActive } : item
      )
    );
    // NOTA: No actualizamos displayData aquí, para que no desaparezca la tarjeta
  };

  const removeExtension = (name) => {
    // 1. Lo quitamos de la "verdad absoluta"
    setData((prevData) => prevData.filter((item) => item.name !== name));

    // 2. Lo quitamos de lo que se está viendo en pantalla actualmente
    setDisplayData((prevDisplay) =>
      prevDisplay.filter((item) => item.name !== name)
    );
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {displayData.map((item) => {
        // Buscamos el estado real en 'data' para que el switch se mueva
        const realItem = data.find((d) => d.name === item.name);

        return (
          <Extension
            key={item.name}
            logo={Images[item.logo]}
            name={item.name}
            description={item.description}
            active={realItem ? realItem.isActive : item.isActive}
            onToggle={() => toggleExtension(item.name)}
            remove={() => {
              removeExtension(item.name);
            }}
          />
        );
      })}
    </div>
  );
}

export default BrowserContainer;
