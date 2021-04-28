import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = ({ answers }) => {
  return (
    <ListGroup>
      {answers.map((answer, index) => (
        <AnswerItem key={index} answer={answer} />
      ))}
    </ListGroup>
  );
};

export default AnswersList;
