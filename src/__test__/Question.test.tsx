import React from "react";
import { render, screen } from "@testing-library/react";
import Question from "../pages/Question";
import { QuestionInfo } from "../json/QuestionData";

test("Question render test", () => {
  const handleAns = () => {
    console.log("hello handleAns");
  };
  const isAns = () => {
    return true;
  };
  const question: QuestionInfo = {
    id: 2,
    title: "",
    type: "",
    options: [],
    ans: [],
    matchAns: [],
    lang: "",
  };
  render(<Question handleAns={handleAns} isAns={isAns} question={question} />);
  const linkElement = screen.getByTestId("ques");
  expect(linkElement).toBeInTheDocument();
});
