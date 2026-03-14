function Reward({
  donation,
  title,
  minPledge,
  description,
  stock,
  isAvailable,
  key,
}) {
  return (
    <div
      className={`border border-gray-200 px-5 py-7 rounded-xl ${
        (stock == 0 || !isAvailable) && "opacity-60"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-7 gap-3 lg:gap-0">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="font-semibold text-[#3DB3AB]">
          Pledge ${minPledge} or more
        </p>
      </div>
      <p className="text-[#9B9A9B]">{description}</p>
      <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center lg:mt-7">
        <div className="my-7 lg:my-0 flex items-center">
          <span className="mr-2 font-bold text-3xl">{stock}</span>
          <span className="text-[#9B9A9B]">left</span>
        </div>

        <button
          className={`${
            stock > 0 && isAvailable
              ? "bg-[#3DB3AB] cursor-pointer"
              : "bg-[#9B9A9B]"
          } text-white text-center px-10 py-4 rounded-full font-bold text-sm `}
          onClick={stock > 0 && isAvailable ? donation : undefined}
        >
          Select Reward
        </button>
      </div>
    </div>
  );
}

export default Reward;
