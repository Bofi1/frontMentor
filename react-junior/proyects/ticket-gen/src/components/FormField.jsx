import React from "react";

const FormField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white font-medium">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`bg-[#1A163B] border appearance-none ${
          error ? "border-red-400" : "border-gray-500"
        } 
                       py-3 px-5 rounded-xl text-white outline-none transition-all`}
      />
      {error && <span className="text-red-400 text-sm">{error}</span>}
    </div>
  );
};

export default FormField;
