import React, { useEffect, useState } from "react";

export function SecondCounter(props) {
  const [count, setCount] = useState(0);

  const MAX_DIGITS = 6;
  const formattedCounter = String(count).padStart(MAX_DIGITS, "0");

  useEffect(() => {
    if (count == props.seconds) {
      alert("You reached the time");
      return;
    } else {
      const interval = setInterval(
        () => setCount((prevCount) => prevCount + 1),
        1000
      );

      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div className="text-center mt-5">
      <h1 style={{ fontSize: "100px" }}>{formattedCounter}</h1>
    </div>
  );
}
