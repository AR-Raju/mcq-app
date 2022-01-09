import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";
import { QuestionInfo } from "../json/QuestionData";

interface Iprops {
  handleAns(option: string, checked?: boolean): void;
  isAns(option: string): boolean;
  question: QuestionInfo;
}

const MultipleChoice: React.FC<Iprops> = ({ handleAns, isAns, question }) => {
  return (
    <RadioGroup
      name="radio-buttons-group"
      onChange={(e) => handleAns(e.target.value)}
      data-testid="choice"
    >
      {question.options.map((op) => (
        <FormControlLabel
          key={op}
          value={op}
          control={<Radio checked={isAns(op)} />}
          label={op}
        />
      ))}
    </RadioGroup>
  );
};

export default MultipleChoice;
