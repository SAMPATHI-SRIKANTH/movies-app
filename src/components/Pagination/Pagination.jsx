import React, { useState } from "react";

import "./Pagination.css";

const Pagination = ({ activePage, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 10; i++) {
      pageNumbers.push(
        <li key={i}>
          <button
            onClick={() => handlePageChange(i)}
            className={i === activePage ? "active" : null}
          >
            {i}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <ul className="pages">{renderPageNumbers()}</ul>
    </div>
  );
};

export default Pagination;
