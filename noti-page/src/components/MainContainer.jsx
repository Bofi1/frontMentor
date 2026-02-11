import NotiContainer from "./notiContainer";
import { useState, useEffect } from "react";
import axios from "axios";

function MainContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/data.json").then((response) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="bg-white p-5 pt-0 grid gap-5">
      <div className="flex justify-between items-center sticky top-0 bg-white py-5">
        <div className="flex items-center">
          <h2 className="mr-3 text-[#191D26] font-bold text-2xl">
            Notifications
          </h2>
          <div className="px-4 py-1 text-white bg-[#0A327A] font-bold rounded-lg">
            1
          </div>
        </div>
        <span className="text-[#7B7B85] font-[400] cursor-pointer">
          Mark all as read
        </span>
      </div>
      <NotiContainer data={data} />
    </div>
  );
}

export default MainContainer;
