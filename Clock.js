import React, { useState, useEffect } from 'react';
import './index.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="clockContainer">
      <div className="innerContainer">
        <h2 className="heading">Digital Clock</h2>
        <h1 className="time">{formatTime(time)}</h1>
      </div>
    </div>
  );
};

export default Clock;
