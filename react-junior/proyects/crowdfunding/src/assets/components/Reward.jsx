function Reward({ donation }) {
  return (
    <div className="border border-gray-200 px-5 py-7 rounded-xl">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-7 gap-3 lg:gap-0">
        <h2 className="text-xl font-bold">Bamboo Stand</h2>
        <p className="font-semibold text-[#3DB3AB]">Pledge $25 or more</p>
      </div>
      <p className="text-[#9B9A9B]">
        You get an ergonomic stand made of natural bamboo. You´ve helped us
        launch our promotial campaign, and you´ll be added to a special Backer
        member list
      </p>
      <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center lg:mt-7">
        <div className="my-7 lg:my-0 flex items-center">
          <span className="mr-2 font-bold text-3xl">101</span>
          <span className="text-[#9B9A9B]">left</span>
        </div>

        <button
          className="bg-[#3DB3AB] text-white text-center px-10 py-4 rounded-full font-bold text-sm cursor-pointer"
          onClick={donation}
        >
          Select Reward
        </button>
      </div>
    </div>
  );
}

export default Reward;
