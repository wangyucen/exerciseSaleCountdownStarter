import React, { useState, useEffect } from "react";
import { differenceInSeconds } from "date-fns";

const SalesBanner = () => {
  const endTime = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds
  const [timeLeft, setTimeLeft] = useState(
    differenceInSeconds(new Date(endTime), new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = timeLeft - 1;
      setTimeLeft(newTimeLeft);

      if (newTimeLeft <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [timeLeft]);

  const daysLeft = Math.floor(timeLeft / (60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
  const minutesLeft = Math.floor((timeLeft % (60 * 60)) / 60);
  const secondsLeft = timeLeft % 60;

  return (
    timeLeft > 0 && (
      <div className="bg-black text-white p-4 text-center">
        <div>
          <p className="text-sm">
            <span className="text-3xl font-bold">BOGO 50% Off</span>
          </p>
          <p className="text-lg font-bold">
            Sale ends in:{" "}
            <span className="font-normal">
              {daysLeft}days {hoursLeft}hours {minutesLeft}minutes
            </span>{" "}
            <span className="font-bold">{secondsLeft}seconds</span>
          </p>
        </div>
      </div>
    )
  );
};

export default SalesBanner;
