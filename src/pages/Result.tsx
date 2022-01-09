import React from "react";
import { useLocation } from "react-router-dom";

export interface ResultInfo {
  ansCount: number;
  quesCount: number;
}

const Result = () => {
  const { state } = useLocation();
  const result = state as ResultInfo;

  const getDeg = (a: number, b: number) => {
    return (360 * a) / (a + b);
  };
  return (
    <div style={{ textAlign: "center" }} data-testid="result">
      <h3>Result</h3>
      <h4 style={{ color: "green" }}>correct is {result.ansCount}</h4>
      <h4 style={{ color: "red" }}>
        wrong is {result.quesCount - result.ansCount}
      </h4>
      <div
        style={{
          height: "500px",
          width: "500px",
          borderRadius: "50%",
          margin: "auto",
          backgroundImage: `conic-gradient(
            green 0deg ${getDeg(
              result.ansCount,
              result.quesCount - result.ansCount
            )}deg,
            red ${getDeg(
              result.ansCount,
              result.quesCount - result.ansCount
            )}deg 360deg
          )`,
        }}
      />
    </div>
  );
};

export default Result;
