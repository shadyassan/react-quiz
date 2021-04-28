import React, { useState, useCallback, useEffect } from 'react';
import { useQuizState } from '../../contexts/QuizContext';
import AnswersList from './AnswersList/AnswersList';
import { useAnswerClick } from '../../contexts/QuizContext';

const ActiveQuiz = () => {
  const { quiz, activeQuestion } = useQuizState();
  const onAnswerClick = useAnswerClick();
  const [seconds, setSeconds] = useState(0);

  const question = quiz[activeQuestion];
  const time = question.time;
  const answers = question.answers;
  const quest = question.question;
  const answerNumber = activeQuestion + 1;
  const quizLength = quiz.length;

  // const timeoutFn = useCallback(() => {
  //   onAnswerClick(question.id, true);
  // }, [onAnswerClick, question.id]);

  // useEffect(() => {
  //   function tick() {
  //     if (seconds === time) {
  //       clearInterval(timer);
  //       setSeconds(0);
  //       timeoutFn();
  //     } else {
  //       setSeconds((prev) => prev + 1);
  //     }
  //   }
  //   const timer = setInterval(() => tick(), 1000);

  //   return () => clearInterval(timer);
  // }, [seconds, time]);

  // let timeLeft = time - seconds;

  return (
    <div className="question-group">
      <p className="question-item">
        <span>
          <strong>{answerNumber}.</strong>&nbsp;
          {quest}
        </span>
        <small>
          {answerNumber} из {quizLength}
        </small>
      </p>
      <AnswersList answers={answers} />
    </div>
  );
};

export default ActiveQuiz;
