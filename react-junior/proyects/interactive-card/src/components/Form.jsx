import { useState } from "react";

function Form() {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [mm, setMM] = useState("");
  const [yy, setYY] = useState("");
  const [cvc, setCVC] = useState("");

  const handleCardHolderChange = (e) => {
    // La regex /[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g significa:
    // "Todo lo que NO sea letras (mayúsculas/minúsculas), acentos, eñes o espacios"
    const onlyLetters = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g, "");

    setCardHolder(onlyLetters);
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

  return (
    <div className="p-7 w-full grid gap-7">
      <label className="grid gap-3">
        <span className="text-sm font-bold text-[#241437] tracking-widest">
          CARDHOLDER NAME
        </span>
        <input
          className="w-full outline-none rounded-xl px-5 py-3 border border-[#E3E3E3] placeholder:text-[#E3E3E3] font-semibold placeholder:text-lg text-[#241437] focus:border-[#846195] transition duration-100 "
          placeholder="e.g. Jane Appleseed"
          type="text"
          value={cardHolder}
          onChange={handleCardHolderChange}
        />
      </label>

      <label className="grid gap-3">
        <span className="text-sm font-bold text-[#241437] tracking-widest">
          CARD NUMBER
        </span>
        <input
          className="w-full outline-none rounded-xl px-5 py-3 border border-[#E3E3E3] placeholder:text-[#E3E3E3] font-semibold placeholder:text-lg text-[#241437] focus:border-[#846195] transition duration-100 "
          placeholder="e.g. 1234 5678 9123 0000"
          inputMode="numeric"
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
      </label>

      <div className="w-full grid grid-cols-2 gap-5">
        <label className="grid gap-3">
          <span className="text-sm font-bold text-[#241437] tracking-wide ">
            EXP. DATE (MM/YY)
          </span>
          <div className="w-full grid grid-cols-2 gap-2">
            <input
              className="w-full outline-none rounded-xl px-5 py-3 border border-[#E3E3E3] placeholder:text-[#E3E3E3] font-semibold placeholder:text-lg text-[#241437] focus:border-[#846195] transition duration-100 "
              placeholder="MM"
              inputMode="numeric"
              type="text"
              value={mm}
              onChange={handleMMChange}
            />
            <input
              className="w-full outline-none rounded-xl px-5 py-3 border border-[#E3E3E3] placeholder:text-[#E3E3E3] font-semibold placeholder:text-lg text-[#241437] focus:border-[#846195] transition duration-100 "
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
            className="w-full outline-none rounded-xl px-5 py-3 border border-[#E3E3E3] placeholder:text-[#E3E3E3] font-semibold placeholder:text-lg text-[#241437] focus:border-[#846195] transition duration-100 "
            placeholder="YY"
            inputMode="numeric"
            type="text"
            value={cvc}
            onChange={handleCvcChange}
          />
        </label>
      </div>

      <button className="w-full flex justify-center py-3 text-white rounded-xl text-lg bg-[#220A30] tracking-wider cursor-pointer">
        Confirm
      </button>
    </div>
  );
}

export default Form;
