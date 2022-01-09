import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import React from "react";
import { QuestionInfo } from "../json/QuestionData";

interface Iprops {
  handleAns(option: string, checked?: boolean): void;
  isAns(option: string): boolean;
  question: QuestionInfo;
}

const MultiSelect: React.FC<Iprops> = ({ handleAns, isAns, question }) => {
  return (
    <FormGroup data-testid="select">
      {question.options.map((op) => (
        <FormControlLabel
          key={op}
          value={op}
          control={
            <Checkbox
              checked={isAns(op)}
              onChange={(e) => handleAns(op, e.target.checked)}
            />
          }
          label={op}
        />
      ))}
    </FormGroup>
  );
};

export default MultiSelect;
