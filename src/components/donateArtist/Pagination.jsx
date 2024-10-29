import React from 'react';
import parseImg from 'utils/images';

const arrowLeft = parseImg('ic_pagination_arrow_left.svg');
const arrowRight = parseImg('ic_pagination_arrow_right.svg');

function Pagination({onNext, onPrevious, canGoNext, canGoPrevious, children}) {
  return (
    <div className="pagination-container">
      {canGoPrevious && (
        <button type="button" className="pagination-icon prev" onClick={onPrevious}>
          <img src={arrowLeft} alt="" />
        </button>
      )}
      {children}
      {canGoNext && (
        <button type="button" className="pagination-icon next" onClick={onNext}>
          <img src={arrowRight} alt="" />
        </button>
      )}
    </div>
  );
}

export default Pagination;
