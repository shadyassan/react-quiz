import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useAnswerClick } from '../../../../contexts/QuizContext';

const AnswerItem = ({ answer }) => {
  const onAnswerClick = useAnswerClick();

  return (
    <ListGroup.Item action onClick={() => onAnswerClick(answer.id)}>
      {answer.text}
    </ListGroup.Item>
  );
};

export default AnswerItem;
