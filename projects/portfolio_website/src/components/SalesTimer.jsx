import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../features/salesTimer/salesTimerSlice.js";

const SalesTimer = ({ saleName }) => {
  const { timeLeft } = useSelector((state) => state.salesTimer);

  const dispatch = useDispatch();

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
        dispatch(setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 }));
      } else {
        dispatch(
          setTime({
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
      <div className="container salesTimerContainer">
        <div className="products-heading">
          <p className="product-style"></p>
          <p>Today's</p>
        </div>
        <div className="salesContainer">
          <h1>{saleName}</h1>
          <div className="timerContaner">
            <div className="timer">
              <span>Days</span>
              <p> {String(timeLeft.days).padStart(2, "0")} </p>
            </div>
            <span>:</span>
            <div className="timer">
              <span>Hours</span>
              <p> {String(timeLeft.hours).padStart(2, "0")} </p>
            </div>
            <span>:</span>
            <div className="timer">
              <span>Minutes</span>
              <p> {String(timeLeft.minutes).padStart(2, "0")} </p>
            </div>
            <span>:</span>
            <div className="timer">
              <span>Seconds</span>
              <p> {String(timeLeft.seconds).padStart(2, "0")} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesTimer;
