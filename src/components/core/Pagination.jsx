import React from 'react';
import Button from './Button';
import '../../styles/Pagination.scss';

const Pagination = ({ totalPages = 1, currentPage = 1, onPageChange = () => {} }) => {
  const handleClickPrev = e => {
    const pageNum = currentPage > 1 ? currentPage - 1 : 1;
    onPageChange(e, pageNum);
  };

  const handleClickNext = e => {
    const pageNum = currentPage < totalPages ? currentPage + 1 : totalPages;
    onPageChange(e, pageNum);
  };

  return (
    <div className="pagination">
      {currentPage !== 1 && (
        <Button onClick={handleClickPrev} disabled={currentPage === 1}>
          Previous
        </Button>
      )}
      <div className="page-count">
        Page {currentPage} of {totalPages}
      </div>
      <Button onClick={handleClickNext} disabled={currentPage === totalPages}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
