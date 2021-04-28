import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useQuizState, useRetryHandler } from '../../contexts/QuizContext';

const FinishedQuiz = () => {
  const { results, quiz } = useQuizState();
  const retryHandler = useRetryHandler();

  const count = Object.keys(results).reduce((total, key) => {
    if (results[key] === 'success') total++;
    return total;
  }, 0);

  return (
    <div className="finish-item">
      <ListGroup>
        {quiz.map((quizItem, index) => {
          const variant =
            results[quizItem.id] === 'error' ? 'danger' : 'success';
          return (
            <ListGroup.Item key={index} variant={variant}>
              {quizItem.question}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <p>
        Правильно {count} из {quiz.length}
      </p>
      <Button variant="primary" onClick={retryHandler}>
        Повторить
      </Button>{' '}
      <Link to="/">
        <Button type="success">Перейти в список тестов</Button>
      </Link>
    </div>
  );
};

export default FinishedQuiz;
