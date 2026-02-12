import NotiContainer from "./notiContainer";
import { useState, useEffect } from "react";
import axios from "axios";

function MainContainer() {
  const [data, setData] = useState([]);
  const [unreadCount, setUnreadCount] = useState([]);

  useEffect(() => {
    axios.get("/data.json").then((response) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    setUnreadCount(data.filter((item) => item.is_unread).length);
    console.log(data);
  }, [data]);

  const onRead = (id) => {
    setData(() =>
      data.map((item) => {
        return item.id === id ? { ...item, is_unread: false } : item;
      })
    );
  };

  const allRead = () => {
    setData(() =>
      data.map((item) => {
        return { ...item, is_unread: false };
      })
    );
  };

  return (
    <div className="bg-white p-5 lg:p-10  pt-0 grid gap-5 lg:max-w-[800px] lg:rounded-3xl lg:my-10 lg:shadow-2xl font-principal">
      <div className="flex justify-between items-center sticky top-0 bg-white py-5 lg:relative">
        <div className="flex items-center">
          <h2 className="mr-3 text-[#191D26] font-bold text-2xl">
            Notifications
          </h2>
          {unreadCount != 0 && (
            <div className="px-4 py-1 text-white bg-[#0A327A] font-bold rounded-lg">
              {unreadCount}
            </div>
          )}
        </div>
        <span
          className="text-[#7B7B85] font-[400] cursor-pointer hover:text-[#11306D] active:text-[#11306D]"
          onClick={allRead}
        >
          Mark all as read
        </span>
      </div>
      <NotiContainer data={data} onRead={onRead} />
    </div>
  );
}

export default MainContainer;
