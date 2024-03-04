import React, { useEffect, useState } from "react";
import styles from "./DesignGoals.module.css";

export default function DesignGoals() {
  const designGoals = ["Design", "Test", "Develop"];
  const [goalIndex, setGoalIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGoalIndex((prev) => {
        if (prev === 2) return 0;
        return prev + 1;
      });
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.designGoals}>
      <p>3 Good Design Goals</p>
      <div className={styles.loop}>
        <p>{goalIndex + 1}.</p>
        <p>{designGoals[goalIndex]}</p>
        <img className={styles.photo1} src="/photo1.jpg" alt="photo1" />
      </div>
    </div>
  );
}
