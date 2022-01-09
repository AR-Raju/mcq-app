import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Result, { ResultInfo } from "../pages/Result";

test("Exam render test", () => {
  const history = createMemoryHistory();

  const result: ResultInfo = { ansCount: 3, quesCount: 4 };
  history.push("/result", result);
  render(
    <Router history={history}>
      <Result />
    </Router>
  );
  const linkElement = screen.getByTestId("result");
  expect(linkElement).toBeInTheDocument();
});
