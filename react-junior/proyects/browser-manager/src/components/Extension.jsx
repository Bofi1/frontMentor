function Extension({ logo, name, description, active, onToggle, remove }) {
  return (
    <div className="bg-white dark:bg-[#1F2535] shadow-lg flex flex-col p-5 justify-between h-[210px] rounded-2xl ">
      <div className="flex items-start gap-5">
        <img src={logo} />
        <div>
          <h2 className="font-bold text-lg text-[#091540] dark:text-white">
            {name}
          </h2>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ">
        <button
          className="px-3 py-2  rounded-full border border-gray-500 font-semibold text-[#091540] dark:text-white cursor-pointer"
          onClick={remove}
        >
          Remove
        </button>

        <label className="flex">
          <div className="bg-gray-400 dark:bg-[#535868] py-1 px-4 rounded-full flex  animation cursor-pointer has-[:checked]:bg-[#C72318] dark:has-[:checked]:bg-[#DF4740]">
            <input
              className="peer hidden"
              type="checkbox"
              checked={active}
              onClick={onToggle}
              onChange={() => {}}
              name=""
              id=""
            />
            <div className="bg-white rounded-[100%] w-4 h-4 -translate-x-3 peer-checked:translate-x-3 animation"></div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Extension;
