import React from 'react';
import './arrow.css';

const ArrowRight = ({ condition = true }) => {
  const classNameSuffix = condition ? 'yes' : 'no';

  return (
    <div className={`arrow-right-co ${classNameSuffix}`}>
      <div className={`arrow-right-stick-co ${classNameSuffix}`} />
      <div className={`arrow-right-stick-co ${classNameSuffix}`} />
    </div>
  );
};
export default ArrowRight;
