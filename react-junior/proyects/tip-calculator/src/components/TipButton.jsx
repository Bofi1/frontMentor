function TipButton({ value, name, setTipChecked }) {
  return (
    <label>
      <input
        className="hidden peer"
        type="radio"
        name={name}
        onChange={() => {
          setTipChecked("");
        }}
      />
      <div className="w-full bg-[#00474B] peer-checked:bg-[#26C2AE]  peer-checked:text-[#004A4C] peer-hover:bg-[#9FE8DF]  peer-hover:text-[#004A4C] flex justify-center items-center font-bold text-white p-2 rounded-lg cursor-pointer">
        {value}%
      </div>
    </label>
  );
}

export default TipButton;
