import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { QuestionInfo } from "../json/QuestionData";

interface Iprops {
  handleAns(option: string, checked?: boolean): void;
  isAns(option: string): boolean;
  question: QuestionInfo;
}

const FollowingMatch: React.FC<Iprops> = ({ handleAns, isAns, question }) => {
  return (
    <Table
      style={{ maxWidth: "400px", margin: "auto" }}
      data-testid="following"
    >
      <TableBody>
        <TableRow>
          <TableCell />
          {question.matchAns?.map((ans) => (
            <TableCell key={ans}>{ans}</TableCell>
          ))}
        </TableRow>
        {question.options.map((op) => (
          <TableRow key={op}>
            <TableCell key={op}>{op}</TableCell>
            {question.ans.map((a) => (
              <TableCell key={a}>
                <input
                  type="radio"
                  value={a}
                  name={op}
                  onChange={(e) => handleAns(op + "->" + e.target.value)}
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FollowingMatch;
