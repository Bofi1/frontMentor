function Notification({
  userName,
  avatar,
  action,
  target,
  targetType,
  time,
  isUnRead,
  privateMessage,
  attachedImage,
  onRead,
}) {
  return (
    <div
      className={`p-5 cursor-pointer ${
        isUnRead ? "bg-[#F6FAFC]" : "bg-white"
      } rounded-xl flex items-start gap-5`}
      onClick={onRead}
    >
      <img className="w-10" src={avatar} alt={userName} />
      <div className="text-sm ">
        <span className="font-bold hover:text-[#1F3772] active:text-[#1F3772]">
          {userName}
        </span>
        <p className="inline text-[#727A85]"> {action} </p>
        <p
          className={`inline  font-bold ${
            targetType == "post" &&
            "text-[#626A79] hover:text-[#11306D] active:text-[#11306D]"
          } ${targetType == "group" && "text-[#11306D]"}`}
        >
          {target}
          {isUnRead && (
            <span
              className={`bg-[#F4584E] w-2 h-2 inline-block rounded-full mb-px ${
                targetType === null ? "" : "ml-[5px]"
              }`}
            ></span>
          )}
        </p>
        <p className="text-[#9DA2AF] ">{time}</p>

        {privateMessage != null && (
          <p className="p-4 border border-[#E6EAEE] text-sm text-[#7A7B7C] mt-3 hover:bg-[#E5EFF9] active:bg-[#E5EFF9]">
            {privateMessage}
          </p>
        )}
      </div>
      {targetType == "picture" && (
        <img className="w-10 h-10" src={attachedImage} />
      )}
    </div>
  );
}

export default Notification;
