import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("App render test", () => {
  render(<App />);
  const linkElement = screen.getByTestId("App");
  expect(linkElement).toBeInTheDocument();
});
