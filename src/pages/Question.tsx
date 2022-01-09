import { Container } from "@material-ui/core";
import React from "react";
import FollowingMatch from "../components/FollowingMatch";
import MultipleChoice from "../components/MultipleChoice";
import MultiSelect from "../components/MultiSelect";
import {
  fillInTheBlank,
  followingMatch,
  multipleChoice,
  multiSelect,
  QuestionInfo,
  trueFalse,
} from "../json/QuestionData";

interface Iprops {
  handleAns(option: string, checked?: boolean): void;
  isAns(option: string): boolean;
  question: QuestionInfo;
}

const Question: React.FC<Iprops> = ({ handleAns, isAns, question }) => {
  return (
    <Container data-testid="ques">
      <h3>Question</h3>
      <h4>{question?.title}</h4>
      {[multipleChoice, fillInTheBlank, trueFalse].includes(question?.type) && (
        <MultipleChoice
          handleAns={handleAns}
          isAns={isAns}
          question={question}
        />
      )}
      {question?.type === multiSelect && (
        <MultiSelect handleAns={handleAns} isAns={isAns} question={question} />
      )}
      {question?.type === followingMatch && (
        <FollowingMatch
          handleAns={handleAns}
          isAns={isAns}
          question={question}
        />
      )}
    </Container>
  );
};

export default Question;
