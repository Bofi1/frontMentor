import { useState } from "react";
import logoComplete from "../assets/images/icon-complete.svg";
import { AnimatePresence, motion } from "framer-motion";

function Form({
  cardHolder,
  setCardHolder,
  cardNumber,
  setCardNumber,
  mm,
  setMM,
  yy,
  setYY,
  cvc,
  setCVC,
  className,
  send,
  setSend,
}) {
  const handleCardHolderChange = (e) => {
    // La regex /[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g significa:
    // "Todo lo que NO sea letras (mayúsculas/minúsculas), acentos, eñes o espacios"
    const onlyLetters = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g, "");

    setCardHolder(onlyLetters.slice(0, 22));
  };

  const handleCardNumberChange = (e) => {
    // 1. Eliminamos todo lo que no sea un dígito
    let value = e.target.value.replace(/\D/g, "");

    // 2. Agregamos un espacio cada 4 dígitos
    // La regex busca grupos de 4 números y añade un espacio si hay más números después
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");

    // 3. Limitamos a 19 caracteres (16 números + 3 espacios)
    setCardNumber(value.slice(0, 19));
  };

  const handleMMChange = (e) => {
    // 1. Eliminamos todo lo que no sea un dígito
    let value = e.target.value.replace(/\D/g, "");

    // 3. Limitamos a 2
    setMM(value.slice(0, 2));
  };

  const handleYYChange = (e) => {
    // 1. Eliminamos todo lo que no sea un dígito
    let value = e.target.value.replace(/\D/g, "");

    // 3. Limitamos a 2
    setYY(value.slice(0, 2));
  };

  const handleCvcChange = (e) => {
    // 1. Eliminamos todo lo que no sea un dígito
    let value = e.target.value.replace(/\D/g, "");

    // 3. Limitamos a 4
    setCVC(value.slice(0, 3));
  };

  const [errors, setErrors] = useState({
    cardHolder: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvc: "",
  });

  const resetValues = () => {
    setCardHolder("");
    setCardNumber("");
    setMM("");
    setYY("");
    setCVC("");
  };

  const handleConfirm = () => {
    const newErrors = {};

    // Validaciones una por una
    if (!cardHolder.trim()) {
      newErrors.cardHolder = "Can't be blank";
    }

    // Usamos regex para verificar que solo haya números (opcional pero recomendado)
    if (!cardNumber.trim()) {
      newErrors.cardNumber = "Can't be blank";
    } else if (cardNumber.length < 19) {
      newErrors.cardNumber = "Wrong format, must be 16 digits";
    }

    const actualMonth = new Date().getMonth() + 1;
    if (!mm.trim()) {
      newErrors.mm = "Can't be blank";
    } else if (mm > 12 || mm < 1) {
      newErrors.mm = "Select a valid date";
      console.log(mm);
    }

    const actualYear = new Date().getFullYear() % 100;
    if (!yy.trim()) {
      newErrors.yy = "Can't be blank";
    } else if (yy < actualYear) {
      newErrors.yy = "Select a valid date";
    }

    if (yy == actualYear && mm < actualMonth) {
      newErrors.mm = "Select a valid date";
    }

    if (!cvc.trim()) {
      newErrors.cvc = "Can't be blank";
    } else if (cvc.length < 3) {
      newErrors.cvc = "Wrong format, must be 3 digits";
    }

    // ACTUALIZACIÓN DEL OBJETO COMPLETO
    setErrors(newErrors);

    // ¿Cómo saber si todo está bien?
    // Si el objeto newErrors no tiene ninguna llave, el formulario es válido.
    if (Object.keys(newErrors).length === 0) {
      console.log("¡Formulario listo para enviar!");
      setSend(true);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {!send ? (
        <motion.div
          key="form"
          animate={{ opacity: 1 }} // Baja a su posición normal
          initial={{ opacity: 1 }} // Empieza fuera de la pantalla (arriba)
          exit={{ opacity: 0 }} // Sube al cerrarse
          className={`w-full grid gap-7 lg:max-w-[450px] lg:ml-50 ${className}`}
        >
          <label className="grid gap-3">
            <span className="text-sm font-bold text-[#241437] tracking-widest">
              CARDHOLDER NAME
            </span>
            <input
              className={`w-full outline-none rounded-xl px-5 py-3 border border-[#E3E3E3] placeholder:text-[#E3E3E3] font-semibold placeholder:text-lg text-[#241437] focus:border-[#846195] transition duration-100 ${
                errors.cardHolder && "border-[#E5AAA8]"
              } `}
              placeholder="e.g. Jane Appleseed"
              type="text"
              value={cardHolder}
              onChange={handleCardHolderChange}
            />
            <span className="text-[#E5AAA8] text-sm font-bold -mt-2">
              {errors.cardHolder}
            </span>
          </label>

          <label className="grid gap-3">
            <span className="text-sm font-bold text-[#241437] tracking-widest">
              CARD NUMBER
            </span>
            <input
              className={`w-full outline-none rounded-xl px-5 py-3 border border-[#E3E3E3] placeholder:text-[#E3E3E3] font-semibold placeholder:text-lg text-[#241437] focus:border-[#846195] transition duration-100 ${
                errors.cardNumber && "border-[#E5AAA8]"
              } `}
              placeholder="e.g. 1234 5678 9123 0000"
              inputMode="numeric"
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
            <span className="text-[#E5AAA8] text-sm font-bold -mt-2">
              {errors.cardNumber}
            </span>
          </label>

          <div className="w-full grid grid-cols-2 gap-5">
            <label className="grid gap-3">
              <span className="text-sm font-bold text-[#241437] tracking-wide ">
                EXP. DATE (MM/YY)
              </span>
              <div className="w-full grid grid-cols-2 gap-3">
                <input
                  className={`w-full outline-none rounded-xl px-5 py-3 border border-[#E3E3E3] placeholder:text-[#E3E3E3] font-semibold placeholder:text-lg text-[#241437] focus:border-[#846195] transition duration-100 ${
                    errors.mm && "border-[#E5AAA8]"
                  }`}
                  placeholder="MM"
                  inputMode="numeric"
                  type="text"
                  value={mm}
                  onChange={handleMMChange}
                />

                <input
                  className={`w-full outline-none rounded-xl px-5 py-3 border border-[#E3E3E3] placeholder:text-[#E3E3E3] font-semibold placeholder:text-lg text-[#241437] focus:border-[#846195] transition duration-100 ${
                    errors.yy && "border-[#E5AAA8]"
                  } `}
                  placeholder="YY"
                  inputMode="numeric"
                  type="text"
                  value={yy}
                  onChange={handleYYChange}
                />
              </div>
            </label>

            <label className="grid gap-3">
              <span className="text-sm font-bold text-[#241437] tracking-widest">
                CVC
              </span>
              <input
                className={`w-full outline-none rounded-xl px-5 py-3 border border-[#E3E3E3] placeholder:text-[#E3E3E3] font-semibold placeholder:text-lg text-[#241437] focus:border-[#846195] transition duration-100 ${
                  errors.cvc && "border-[#E5AAA8]"
                }`}
                placeholder="YY"
                inputMode="numeric"
                type="text"
                value={cvc}
                onChange={handleCvcChange}
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-5 -mt-5">
            <span className="text-[#E5AAA8] text-sm font-bold ">
              {errors.mm || errors.yy}
            </span>
            <span className="text-[#E5AAA8] text-sm font-bold ">
              {" "}
              {errors.cvc}
            </span>
          </div>

          <button
            className="w-full flex justify-center py-3 text-white rounded-xl text-lg bg-[#220A30] tracking-wider cursor-pointer outline-none appearance-none"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </motion.div>
      ) : (
        <motion.div
          key="complete"
          animate={{ opacity: 1 }} // Baja a su posición normal
          initial={{ opacity: 0 }} // Empieza fuera de la pantalla (arriba)
          exit={{ opacity: 0 }} // Sube al cerrarse
          className="flex flex-col items-center justify-center w-full max-w-[400px] lg:ml-50"
        >
          <img className="mb-8" src={logoComplete} alt="logo-complete" />
          <p className="text-[#2C1C36] text-3xl font-[500] tracking-widest mb-5">
            THANK YOU!
          </p>
          <p className="text-[#CDD1D5] text-lg font-bold">
            We´ve added your card details
          </p>
          <button
            className="text-white text-center w-full bg-[#220B30] text-lg tracking-wide rounded-lg p-3 mt-12 cursor-pointer"
            onClick={() => {
              setSend(false);
              resetValues();
            }}
          >
            Continue
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Form;
