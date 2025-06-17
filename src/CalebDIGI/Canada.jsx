import React, { useEffect, useState } from "react";

const Canada = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const canadaTime = new Date().toLocaleTimeString("en-CA", {
        timeZone: "America/Vancouver",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(canadaTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 space-y-6 bg-white shadow-xl rounded-2xl w-full max-w-md mx-auto">
      <h1 className="text-3xl font-extrabold text-green-700 tracking-wide">
        CANADA TIME
      </h1>
      <div className="bg-green-50 border-2 border-green-300 rounded-xl px-8 py-6 w-full text-center shadow-inner">
        <p className="text-5xl md:text-6xl font-mono font-semibold text-gray-800">
          {time}
        </p>
      </div>
    </div>
  );
};

export default Canada;
