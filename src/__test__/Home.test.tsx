import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("Home render test", () => {
  render(<Home />);
  const linkElement = screen.getByTestId("home");
  expect(linkElement).toBeInTheDocument();
});
