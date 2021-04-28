import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchQuiz, useQuizState } from '../../contexts/QuizContext';
import ActiveQuiz from '../../components/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz';
import Loader from '../../components/shared/Loader';

const Quiz = () => {
  const fetchById = useFetchQuiz();
  const { loading, isFinished } = useQuizState();
  const { id } = useParams();

  useEffect(() => {
    fetchById(id);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="quiz-wrapper">
      <h2>{isFinished ? 'Результат' : 'Ответьте на вопросы'}</h2>
      {isFinished ? <FinishedQuiz /> : <ActiveQuiz />}
    </div>
  );
};

export default Quiz;
