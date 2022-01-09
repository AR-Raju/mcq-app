import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { UserInfo } from "../pages/Home";
import Exam from "../pages/Exam";
import { Router } from "react-router-dom";

test("Exam render test", () => {
  const history = createMemoryHistory();

  const user: UserInfo = { name: "", gender: "", lang: "" };
  history.push("/exam", user);
  render(
    <Router history={history}>
      <Exam />
    </Router>
  );
  const linkElement = screen.getByTestId("exam");
  expect(linkElement).toBeInTheDocument();
});
