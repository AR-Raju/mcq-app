import React from "react";
import { render, screen } from "@testing-library/react";
import { QuestionInfo } from "../json/QuestionData";
import MultipleChoice from "../components/MultipleChoice";

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
  render(
    <MultipleChoice handleAns={handleAns} isAns={isAns} question={question} />
  );
  const linkElement = screen.getByTestId("choice");
  expect(linkElement).toBeInTheDocument();
});
