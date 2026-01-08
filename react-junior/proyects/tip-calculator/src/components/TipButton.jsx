function TipButton({
  value,
  name,
  setTipChecked,
  checkValue,
  setCheckValue,
  checkValueAll,
  setCheckValueAll,
  setCheckValueCustom,
  tipCheckedButton,
  setTipCheckedButton,
}) {
  return (
    <label>
      <input
        checked={tipCheckedButton == value}
        className="hidden peer"
        type="radio"
        name={name}
        value={value}
        onChange={() => {}}
        onClick={(e) => {
          setTipChecked("");
          setCheckValueCustom("");
          setCheckValue(parseFloat(e.target.value));
          setTipCheckedButton(e.target.value);
        }}
      />
      <div className="w-full bg-[#00474B] peer-checked:bg-[#26C2AE]  peer-checked:text-[#004A4C] peer-hover:bg-[#9FE8DF]  peer-hover:text-[#004A4C] flex justify-center items-center font-bold text-white p-3 rounded-lg cursor-pointer text-xl animation active:scale-90">
        {value}%
      </div>
    </label>
  );
}

export default TipButton;
