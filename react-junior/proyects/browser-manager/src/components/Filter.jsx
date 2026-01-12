function Filter({ checkStatus, setCheckStatus }) {
  return (
    <div className="w-full flex flex-col gap-5 md:flex-row md:justify-between">
      <div className="font-bold text-2xl text-[#091540] dark:text-white text-center md:text-3xl">
        Extensions List
      </div>
      <div className="text-[#091540] font-semibold flex justify-center gap-3 ">
        <label>
          <input
            className="peer hidden"
            type="radio"
            name="filter"
            checked={checkStatus === "all"}
            onChange={() => {}}
          />
          <div
            onClick={() => {
              setCheckStatus("all");
            }}
            className="py-3 px-6 rounded-full bg-white dark:bg-[#2E364A] dark:text-white shadow-lg cursor-pointer animation hover:bg-[#F6F9FD] dark:hover:bg-[#525868] peer-checked:bg-[#C72318] dark:peer-checked:bg-[#DF4740] peer-checked:hover:bg-[#C72318] dark:peer-checked:hover:bg-[#DF4740] peer-checked:text-white"
          >
            All
          </div>
        </label>
        <label>
          <input
            className="peer hidden"
            type="radio"
            name="filter"
            checked={checkStatus === "active"}
            onChange={() => {}}
          />
          <div
            onClick={() => {
              setCheckStatus("active");
            }}
            className="py-3 px-6 rounded-full bg-white dark:bg-[#2E364A] dark:text-white shadow-lg cursor-pointer animation hover:bg-[#F6F9FD] dark:hover:bg-[#525868] peer-checked:bg-[#C72318] dark:peer-checked:bg-[#DF4740] peer-checked:hover:bg-[#C72318] dark:peer-checked:hover:bg-[#DF4740] peer-checked:text-white"
          >
            Active
          </div>
        </label>
        <label>
          <input
            className="peer hidden"
            type="radio"
            name="filter"
            checked={checkStatus === "inactive"}
            onChange={() => {}}
          />
          <div
            onClick={() => {
              setCheckStatus("inactive");
            }}
            className="py-3 px-6 rounded-full bg-white dark:bg-[#2E364A] dark:text-white shadow-lg cursor-pointer animation hover:bg-[#F6F9FD] dark:hover:bg-[#525868] peer-checked:bg-[#C72318] dark:peer-checked:bg-[#DF4740] peer-checked:hover:bg-[#C72318] dark:peer-checked:hover:bg-[#DF4740] peer-checked:text-white"
          >
            Inactive
          </div>
        </label>
      </div>
    </div>
  );
}

export default Filter;
