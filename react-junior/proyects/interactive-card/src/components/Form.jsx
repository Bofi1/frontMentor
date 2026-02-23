import { useState } from "react";

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

    if (!mm.trim()) {
      newErrors.mm = "Can't be blank";
    } else if (mm > 12 || mm < 1) {
      newErrors.mm = "Select a valid date";
      console.log(mm);
    }

    if (!yy.trim()) newErrors.yy = "Can't be blank";

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
      // Aquí podrías mostrar la pantalla de agradecimiento
    }
  };

  return (
    <div className={`w-full grid gap-7 lg:max-w-[450px] lg:ml-50 ${className}`}>
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
        <span className="text-[#E5AAA8] text-sm font-bold "> {errors.cvc}</span>
      </div>

      <button
        className="w-full flex justify-center py-3 text-white rounded-xl text-lg bg-[#220A30] tracking-wider cursor-pointer outline-none appearance-none"
        onClick={handleConfirm}
      >
        Confirm
      </button>
    </div>
  );
}

export default Form;
