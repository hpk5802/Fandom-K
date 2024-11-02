import parseImg from 'utils/images';

const arrowLeft = parseImg('ic_pagination_arrow_left.svg');
const arrowRight = parseImg('ic_pagination_arrow_right.svg');

function Pagination({isDesktop, cursor, currentPage, totalPages, onPageChange, fetchMoreDonations, children, title}) {
  const canGoNext = cursor || currentPage + 1 < totalPages;
  const canGoPrev = currentPage > 0;

  const handleNextPage = () => {
    if (currentPage + 1 >= totalPages) fetchMoreDonations();
    onPageChange(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };
  return (
    <div className="pagination-container">
      {isDesktop && canGoPrev && (
        <button type="button" className="pagination-icon prev" onClick={handlePreviousPage}>
          <img src={arrowLeft} alt="" />
        </button>
      )}
      <h2 className="pagination-title">{title}</h2>
      {children}
      {isDesktop && canGoNext && (
        <button type="button" className="pagination-icon next" onClick={handleNextPage}>
          <img src={arrowRight} alt="" />
        </button>
      )}
    </div>
  );
}

export default Pagination;
