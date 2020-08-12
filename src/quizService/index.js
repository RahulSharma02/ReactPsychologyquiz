const qBank = [
  {
    question:
      " Little interest or pleasure in doing things  ",
    answers: ["Not at all", "Several days", "More than half the days", "Nearly Everyday"],
    correct: "Richard Branson",
    questionId: "099099"
  },
  {
    question:"Feeling down, depressed, or hopeless",
    answers: ["Not at all", "Several days", "More than half the days", "Nearly Everyday"],
    correct: "Wales",
    questionId: "183452"
  },
  {
    question:
      " Trouble falling or staying asleep, or sleeping too much",
    answers: ["Not at all", "Several days", "More than half the days", "Nearly Everyday"],
    correct: "HTC",
    questionId: "267908"
  },
  {
    question: "Feeling tired or having little energy",
    answers: ["Not at all", "Several days", "More than half the days", "Nearly Everyday"],
    correct: "Thomas & Martha",
    questionId: "333247"
  },
  {
    question: "Feeling bad about yourself or that you are a failure or have let yourself or your family down",

    answers: ["Not at all", "Several days", "More than half the days", "Nearly Everyday"],
    correct: "Jones",
    questionId: "496293"
  },

  {
    question: "Trouble concentrating on things, such as reading the newspaper or watching television",
    answers: ["Not at all", "Several days", "More than half the days", "Nearly Everyday"],
    correct: "Thomas & Martha",
    questionId: "333247"
  },
  {
    question: "Thoughts that you would be better off dead, or of hurting yourself",
    answers: ["Not at all", "Several days", "More than half the days", "Nearly Everyday"],
    correct: "Thomas & Martha",
    questionId: "333247"
  },
  {
    question: "Poor appetite or overeating",
    answers: ["Not at all", "Several days", "More than half the days", "Nearly Everyday"],
    correct: "Thomas & Martha",
    questionId: "333247"
  },
 
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
