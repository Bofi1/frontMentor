function ModalReward({ name }) {
  return (
    <div className="border border-gray-200 px-5 py-7 rounded-xl">
      <label className="flex gap-5 mb-5 ">
        <input className="cursor-pointer" type="radio" name={name} />
        <span className="font-bold cursor-pointer">Pledge with no reward</span>
      </label>
      <p className="text-[#9B9A9B]">
        Choose to support us without a reward if you simply believe in our
        proyect. As a backer, you will be signed up to receive product updates
        via email.
      </p>
    </div>
  );
}

export default ModalReward;
