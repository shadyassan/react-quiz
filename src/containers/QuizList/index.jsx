import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { initialState, QuizDispatchContext } from '../../contexts/QuizContext';

const QuizList = () => {
  const quizes = [1, 2];
  const dispatch = useContext(QuizDispatchContext);

  useEffect(() => {
    dispatch(initialState);
  }, [dispatch]);

  return (
    <div>
      <h2>Список тестов</h2>
      <ListGroup variant="flush">
        {quizes.map((item) => (
          <ListGroup.Item key={item}>
            <Link to={`/quiz/${item}`}>{`Test #${item}`}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default QuizList;
