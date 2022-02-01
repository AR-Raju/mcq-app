import { Button } from "@material-ui/core";
import { Chip } from "@mui/material";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import MultipleChoice from "../components/MultipleChoice";
import {
  fillInTheBlank,
  followingMatch,
  getQuestionByLang,
  multipleChoice,
  multiSelect,
  QuestionInfo,
  trueFalse,
} from "../json/QuestionData";
import { UserInfo } from "./Home";
import Question from "./Question";

export interface AnsInfo {
  id: number;
  options: string[];
}

const Exam = () => {
  const history = useHistory();
  const { state } = useLocation();
  const user = state as UserInfo;

  const [ansList, setAnsList] = useState<AnsInfo[]>([]);
  const [questionNo, setQuestionNo] = useState<number>(0);

  const filteredQuestionList: QuestionInfo[] = getQuestionByLang(user.lang);
  const currentQ: QuestionInfo = filteredQuestionList[questionNo];

  const isAns = (option: string) => {
    const ans = ansList.find((a) => a.id === currentQ.id);

    if (!ans) return false;

    return !!ans.options.find((op) => op === option);
  };

  const isQuestonAns = (qId:number) => {
    const ans = ansList.find((a) => a.id === qId);

    if (!ans) return false;

    return ans.options.length > 0;
  };

  const handleAns = (option: string, checked?: boolean) => {
    const find = ansList.find((a) => a.id === currentQ.id);

    if (find) {
      if ([multipleChoice, fillInTheBlank, trueFalse].includes(currentQ.type)) {
        const _ansList = ansList.map((ans) => {
          if (ans.id === currentQ.id) {
            ans = { id: currentQ.id, options: [option] };
          }
          return ans;
        });
        setAnsList(_ansList);

        return;
      }
      if (currentQ.type === multiSelect) {
        const _ansList = ansList.map((ans) => {
          if (ans.id === currentQ.id) {
            if (checked) {
              ans = { id: currentQ.id, options: [...ans.options, option] };
            } else {
              let _options = ans.options.filter((op) => op !== option);
              ans = {
                id: currentQ.id,
                options: _options,
              };
            }
          }
          return ans;
        });
        setAnsList(_ansList);

        return;
      }
      if (currentQ.type === followingMatch) {
        const _ansList = ansList.map((ans) => {
          if (ans.id === currentQ.id) {
            const _left = option.split("->")[0];
            let _options = ans.options.filter((op) => !op.startsWith(_left));
            ans = {
              id: currentQ.id,
              options: [..._options, option],
            };
          }
          return ans;
        });
        setAnsList(_ansList);

        return;
      }
    } else {
      const _ans = { id: currentQ.id, options: [option] };
      setAnsList([...ansList, _ans]);
    }
  };

  const hanldeResult = () => {
    let count: number = 0;
    ansList.forEach((ans) => {
      for (let q of filteredQuestionList) {
        if (ans.id === q.id) {
          if (JSON.stringify(q.ans) === JSON.stringify(ans.options)) {
            count++;
          }
          break;
        }
      }
    });

    history.push("/result", {
      ansCount: count,
      quesCount: filteredQuestionList.length,
    });
  };

  const handleQuestionChange = (qNum: number) => {
    setQuestionNo(qNum);
  };

  return (
    <div
      style={{
        // display: "grid",
        // justifyContent: "center",
        // alignContent: "center",
        // height: "100vh",
        // width: "100%",
        // gap: "20px",
        textAlign: "center",
      }}
      data-testid="exam"
    >
      <h3>Exam</h3>
      {filteredQuestionList.map((q, i) => (
        <Chip
         color={isQuestonAns(q.id)? 'error': 'default'}
          key={q.id}
          label={i + 1}
          onClick={() => handleQuestionChange(i)}
          style={{ margin: "10px", cursor: "pointer" }}
        />
      ))}
      <Question handleAns={handleAns} isAns={isAns} question={currentQ} />
      {questionNo === filteredQuestionList.length - 1 && (
        <Button variant="contained" color="primary" onClick={hanldeResult}>
          Get Result
        </Button>
      )}
    </div>
  );
};

export default Exam;
