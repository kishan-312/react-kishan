import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimer } from "../features/timer/timerSlice";

const Timer = () => {
  const { days, hours, minutes, seconds } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  //
  const endTime = useMemo(
    () => new Date().getTime() + 3 * 24 * 60 * 60 * 1000,
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(interval);
        dispatch(setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 }));
      } else {
        dispatch(
          setTimer({
            days: Math.floor(distance / (24 * 60 * 60 * 1000)),
            hours: Math.floor((distance / (60 * 60 * 1000)) % 24),
            minutes: Math.floor((distance / (60 * 1000)) % 60),
            seconds: Math.floor((distance / 1000) % 60),
          })
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, endTime]);

  return (
    <>
      <div className=" container my-4">
        <div>
          days <span> {String(days).padStart(2, "0")} </span>
          Hours <span> {String(hours).padStart(2, "0")} </span>
          Minutes <span> {String(minutes).padStart(2, "0")} </span>
          Seconds <span> {String(seconds).padStart(2, "0")} </span>
        </div>
      </div>
    </>
  );
};

export default Timer;
