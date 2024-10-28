import React from 'react';
import parseImg from 'utils/images';

const arrowLeft = parseImg('ic_pagination_arrow_left.svg');
const arrowRight = parseImg('ic_pagination_arrow_right.svg');

function Pagination({ dataLength, setStartIndex, children }) {
  const handlePrev = () => {
    setStartIndex(prevIndex => {
      const newIndex = (prevIndex - 1 + dataLength) % dataLength;
      console.log('Prev Index:', newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex(prevIndex => {
      const newIndex = (prevIndex + 1) % dataLength;
      console.log('Next Index:', newIndex);
      return newIndex;
    });
  };

  return (
    <div className="pagination-container">
      <img src={arrowLeft} alt="" onClick={handlePrev} className="pagination-icon" />
      {children}
      <img src={arrowRight} alt="" onClick={handleNext} className="pagination-icon" />
    </div>
  );
}

export default Pagination;