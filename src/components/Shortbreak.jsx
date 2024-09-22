import React from "react";
import { useState, useEffect } from "react";

export const Shortbreak = ({ settings }) => {
  const [time, setTime] = useState(settings.shortTime);
  const [active, setActive] = useState(false);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }
  useEffect(() => {
    const id = setTimeout(() => {
      if (active && time > 0) {
        setTime((prev) => prev - 1);
      }
    }, 1000);
    () => clearTimeout(id);
  }, [active, time]);
  return (
    <div>
      {formatTime(time)}
      <button style={{ width: "100px", color: "purple", height: "40px" }} onClick={() => setActive((prev) => !prev)}>
        {active ? "Pause" : "Play"}
      </button>
    </div>
  );
};
