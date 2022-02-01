import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("Full testing of Home component", ()=>{
  test("Home render test", () => {
    render(<Home />);
    const linkElement = screen.getByTestId("home");
    expect(linkElement).toBeInTheDocument();
  });
  
  test("enables the submit button when the input is filled out", () => {
    render(<Home />);
  
    const inputEl = screen.getByTestId("nameInput");
    const submit = screen.getByTestId("submit");
  
    fireEvent.change(inputEl, { target: { value: "Raju" } });
  
    expect(submit).not.toHaveClass("Mui-disabled");
  });
})
