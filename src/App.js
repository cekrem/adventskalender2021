import "./App.css";
import { useEffect, useState } from "react";
import { slotsWithDefault } from "./slots";
import { Slot } from "./Slot";

const snowflakes = Array(20)
  .fill(0)
  .map(() => ({
    size: `${Math.random() * 8}rem`,
    delay: `${Math.random() * 2}s`,
    duration: `${Math.random() * 10 + 3}s, ${Math.random() * 2 + 5}s`,
    position: `${Math.random() * 120 - 10}%`,
    opacity: Math.random() * 0.5,
  }));

const getDecemberDay = () => {
  const now = new Date();
  return now.getMonth() === 11 ? now.getDate() : 0;
};

const App = () => {
  const [today, setToday] = useState(getDecemberDay());
  useEffect(() => {
    const interval = setInterval(() => {
      setToday(getDecemberDay());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="calendar">
        <header>
          <h1>Birgittes adventskalender 2021</h1>
        </header>
        {slotsWithDefault.map((content, index) => (
          <Slot content={content} index={index} key={index} today={today} />
        ))}
      </div>
      <div className="snowflakes">
        {snowflakes.map(({ size, delay, duration, position, opacity }) => (
          <div
            key={position}
            style={{
              fontSize: size,
              left: position,
              animationDelay: delay,
              animationDuration: duration,
              opacity: opacity,
            }}
            className="snowflake"
          >
            ❄
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
