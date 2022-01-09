export const multipleChoice = "multipleChoice";
export const fillInTheBlank = "fillInTheBlank";
export const trueFalse = "trueFalse";
export const multiSelect = "multiSelect";
export const followingMatch = "followingMatch";

export interface QuestionInfo {
  id: number;
  type: string;
  title: string;
  options: string[];
  matchAns?: string[];
  ans: string[];
  lang: string;
}

export const qList: QuestionInfo[] = [
  {
    id: 1,
    type: multipleChoice,
    title:
      "Which of the followings acts as the input of a class-based component?",
    options: ["Class", "Factory", "Render", "Props"],
    ans: ["Props"],
    lang: "React",
  },
  {
    id: 2,
    type: fillInTheBlank,
    title: "A valid React component can return ___ number of elements?",
    options: ["1", "2", "8", "5"],
    ans: ["1"],
    lang: "React",
  },
  {
    id: 3,
    type: trueFalse,
    title: "8080 is the default port for running webpack server",
    options: ["true", "false"],
    ans: ["true"],
    lang: "React",
  },
  {
    id: 4,
    type: multiSelect,
    title: "Which of the followings are the correct name of React.js?",
    options: ["React.js", "ReactJS", "React", "None of the above"],
    ans: ["React.js", "ReactJS", "React"],
    lang: "React",
  },
  {
    id: 5,
    type: multipleChoice,
    title: "Which of the followings statement execute the code of sample.js",
    options: [
      "Node.js sample.js",
      "Node sample.js",
      "sample.js",
      "None of the above",
    ],
    ans: ["Node sample.js"],
    lang: "NodeJS",
  },
  {
    id: 6,
    type: fillInTheBlank,
    title: "Node.js is ___ language",
    options: ["server side", "client side", "Both"],
    ans: ["server side"],
    lang: "NodeJS",
  },
  {
    id: 7,
    type: trueFalse,
    title: "Node.js is multithread",
    options: ["true", "false"],
    ans: ["false"],
    lang: "NodeJS",
  },
  {
    id: 8,
    type: multiSelect,
    title: "Node.js is written in",
    options: ["C", "C++", "python", "None of the above"],
    ans: ["C", "C++"],
    lang: "NodeJS",
  },
  {
    id: 9,
    type: followingMatch,
    title: "Match the following for React and Node",
    options: ["React", "Node"],
    matchAns: ["server-side", "client-side"],
    ans: ["React->server-side", "Node->client-side"],
    lang: "NodeJS",
  },
  {
    id: 10,
    type: followingMatch,
    title: "Match the following for React and Node",
    options: ["React", "Node"],
    matchAns: ["server-side", "client-side"],
    ans: ["React->server-side", "Node->client-side"],
    lang: "React",
  },
];

export const getQuestionByLang = (lang: string): QuestionInfo[] => {
  return qList.filter((q) => q.lang === lang);
};
