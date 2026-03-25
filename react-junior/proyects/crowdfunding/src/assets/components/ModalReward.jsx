import { IoLogoUsd } from "react-icons/io";
import { useEffect, useRef } from "react"; // 1. Importar hooks

// darle ref al continue y que avalue y ver qp con el envio de datos

function ModalReward({
  setBackProyect,
  nameRadio,
  name,
  minPledge,
  stock,
  description,
  selected,
  onChange,
}) {
  // 2. Crear la referencia
  const inputRef = useRef(null);

  // 3. Efecto para hacer focus cuando se seleccione
  useEffect(() => {
    if (selected && inputRef.current) {
      inputRef.current.focus();
    }
  }, [selected]); // Se ejecuta cada vez que cambia 'selected'
  return (
    <label
      className={`flex group ${stock === 0 ? "opacity-60" : "cursor-pointer"}`}
    >
      <div
        className={`border rounded-xl transition-all ease-in duration-100 border-2 w-full ${
          selected ? "border-[#3DB2AA]" : "border-gray-200"
        }`}
      >
        <div
          className={`${selected && "border-b border-gray-200"} p-5 pb-0 mb-5`}
        >
          <div className="flex gap-5 mb-5 items-center">
            <div className="relative flex items-center justify-center w-6 h-6">
              <input
                className={`peer appearance-none w-full h-full rounded-full border border-gray-300 checked:border-[#3DB2AA] transition-all duration-100 ${
                  stock === 0 ? "opacity-60" : "cursor-pointer"
                }`}
                type="radio"
                name={nameRadio}
                checked={selected}
                onChange={onChange}
                disabled={stock == 0 ? true : false}
              />
              <div className="absolute w-3 h-3 bg-[#3DB2AA] rounded-full scale-0 peer-checked:scale-100 transition-transform duration-100 pointer-events-none" />
            </div>

            <div className="lg:flex lg:items-center lg:justify-between lg:w-full">
              <div className="my-3 flex flex-col gap-1 lg:flex-row justify-between lg:gap-5">
                <span className="transition-colors font-bold ">{name}</span>
                {stock != null && (
                  <span className="text-[#3DB2AA] font-semibold">
                    Pledge ${minPledge} or more
                  </span>
                )}
              </div>

              {stock != null && (
                <div className=" items-center hidden lg:flex">
                  <span className="mr-2 font-bold text-3xl">{stock}</span>
                  <span className="text-[#9B9A9B]">left</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-[#9B9A9B] my-7 lg:pl-10">{description}</p>

          {stock != null && (
            <div className="my-5 flex items-center lg:hidden">
              <span className="mr-2 font-bold text-3xl">{stock}</span>
              <span className="text-[#9B9A9B]">left</span>
            </div>
          )}
        </div>
        {selected && (
          <div className="p-5 lg:px-8 text-center text-[#9B9A9B] lg:flex lg:items-center lg:justify-between lg:mb-2">
            <p className="mb-5 lg:mb-0 w-full lg:text-start">
              Enter your pledge
            </p>
            <div className="flex gap-5 lg:justify-end w-full justify-center">
              <div className="flex  items-center gap-2 border border-gray-200 rounded-full px-4 py-3 focus-within:border-[#3DB2AA] transition-all w-full max-w-[150px]">
                {/* El icono "atrapado" a la izquierda */}
                <IoLogoUsd className="text-gray-400 shrink-0" />
                {/* El input sin bordes que llena el resto del espacio */}
                <input
                  ref={inputRef} // 4. Vincular la referencia aquí
                  type="text"
                  placeholder={minPledge}
                  className="w-full outline-none appearance-none text-black font-bold"
                  disabled={stock != 0 ? false : true}
                />
              </div>

              <button
                className="text-white bg-[#3DB2AA] cursor-pointer
                }  p-3 rounded-full font-semibold w-full  max-w-[150px]"
                onClick={() => {
                  stock != 0 && setBackProyect(false);
                  setFundSent(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </label>
  );
}

export default ModalReward;
