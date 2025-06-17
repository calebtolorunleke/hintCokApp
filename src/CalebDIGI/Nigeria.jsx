import React, { useEffect, useState } from "react";

const Nigeria = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const nigeriaTime = new Date().toLocaleTimeString("en-NG", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(nigeriaTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 space-y-6 bg-white shadow-xl rounded-2xl w-full max-w-md mx-auto">
      <h1 className="text-3xl font-extrabold text-blue-700 tracking-wide">
        NIGERIA TIME
      </h1>
      <div className="bg-blue-50 border-2 border-blue-300 rounded-xl px-8 py-6 w-full text-center shadow-inner">
        <p className="text-5xl md:text-6xl font-mono font-semibold text-gray-800">
          {time}
        </p>
      </div>
    </div>
  );
};

export default Nigeria;
