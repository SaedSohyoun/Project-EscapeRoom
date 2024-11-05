import React, { useEffect, useState } from 'react';

const Timer = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      setIsTimeUp(true);
    }
  }, [timeLeft]);

  return (
    <div className="timer mb-4">
      {isTimeUp ? (
        <div>
          <h2 className="text-xl font-semibold">Je hebt verloren!</h2>
          <img src="/img/verloren.jpg" alt="Je hebt verloren" />
        </div>
      ) : (
        <h2 className="text-xl font-semibold">Tijd over: {timeLeft} seconden</h2>
      )}
    </div>
  );
};

export default Timer;
