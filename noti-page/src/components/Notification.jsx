function Notification({ userName, avatar, action, target, targetType, time }) {
  return (
    <div className="p-5 bg-[#F6FAFC] rounded-xl flex items-start gap-5">
      <img className="w-10" src={avatar} alt={userName} />
      <div className="text-sm">
        <span className="font-bold ">{userName}</span>
        <p className="inline text-[#727A85]"> {action} </p>
        <p
          className={`inline  font-bold ${
            targetType == "post" && "text-[#626A79]"
          } ${targetType == "group" && "text-[#345E93]"}`}
        >
          {target}
          <span
            className={`bg-[#F4584E] w-2 h-2 inline-block rounded-full mb-px ${
              targetType === null ? "" : "ml-[5px]"
            }`}
          ></span>
        </p>
        <p className="text-[#9DA2AF] ">{time}</p>
      </div>
    </div>
  );
}

export default Notification;
