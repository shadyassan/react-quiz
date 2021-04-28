import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="container">{children}</div>
    </div>
  );
};

export default Wrapper;
