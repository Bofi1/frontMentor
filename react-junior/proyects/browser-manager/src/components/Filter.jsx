function Filter() {
  return (
    <div className="w-full flex flex-col gap-5 md:flex-row md:justify-between">
      <div className="font-bold text-2xl text-[#091540] dark:text-white text-center md:text-3xl">
        Extensions List
      </div>
      <div>
        <ul className="text-[#091540] font-semibold flex justify-center gap-3 ">
          <li className="py-3 px-6 rounded-full bg-whitez dark:bg-[#2E364A] dark:text-white shadow-lg cursor-pointer animation">
            All
          </li>
          <li className="py-3 px-6 rounded-full bg-white dark:bg-[#2E364A] dark:text-white shadow-lg cursor-pointer animation">
            Active
          </li>
          <li className="py-3 px-6 rounded-full bg-white dark:bg-[#2E364A] dark:text-white shadow-lg cursor-pointer animation">
            Inactive
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
