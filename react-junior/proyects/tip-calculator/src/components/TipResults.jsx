function TipResults() {
  return (
    <div className="bg-[#00474B] p-10 rounded-xl flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col">
            <p className="text-white text-xl font-semibold">Tip Amount</p>
            <span className="text-[#7B9CA4]">/ person</span>
          </div>
          <p className="font-bold text-[#28C1AD] text-3xl">$ 4.27</p>
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col">
            <p className="text-white text-xl font-semibold">Total</p>
            <span className="text-[#7B9CA4]">/ person</span>
          </div>
          <p className="font-bold text-[#28C1AD] text-3xl">$ 32.79</p>
        </div>
      </div>
      <input
        className="bg-[#28C1AD] text-[#00474B] p-4 text-xl rounded-xl mt-3 hover:bg-[#9FE8DF] cursor-pointer active:bg-[#28C1AD] active:scale-95 font-bold animation"
        type="button"
        value="RESET"
      />
    </div>
  );
}

export default TipResults;
