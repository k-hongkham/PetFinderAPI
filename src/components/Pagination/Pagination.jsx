import React, { useState } from "react";

const Pagination = ({
  listItemsPerPage,
  totalUsers,
  setCurrentPage,
  currentPage,
  setListItemsPerPage,
}) => {
  const pageNumbers = [];

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handleLoadMoreContacts = () => {
    const increasedItemsPerPage = listItemsPerPage + 3;
    console.log("listItems#: ", increasedItemsPerPage);
    setListItemsPerPage(increasedItemsPerPage);
  };

  for (let i = 1; i <= Math.ceil(totalUsers / listItemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="container">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className="page-link"
            onClick={(e) => handlePrev(e)}
            disabled={currentPage === pageNumbers[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {minPageNumberLimit >= 1 ? (
          <li className="page-item">
            <button
              className="page-link"
              onClick={(e) => handlePrev(e)}
              disabled={currentPage === pageNumbers[0] ? true : false}
            >
              &hellip;
            </button>
          </li>
        ) : null}
        {pageNumbers.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li
                key={number}
                className={`${
                  currentPage === number ? "active" : null
                } page-item`}
              >
                <a
                  onClick={(e) => paginate(e, number)}
                  href="!#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            );
          } else {
            return null;
          }
        })}
        {pageNumbers.length > maxPageNumberLimit ? (
          <li className="page-item " onClick={handleNext}>
            <button
              className="page-link"
              disabled={
                currentPage === pageNumbers[pageNumbers.length - 1]
                  ? true
                  : false
              }
              onClick={(e) => handleNext(e)}
            >
              &hellip;
            </button>
          </li>
        ) : null}
        <li className="page-item">
          <button
            className="page-link"
            disabled={
              currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
            }
            onClick={(e) => handleNext(e)}
          >
            Next
          </button>
        </li>
      </ul>
      <div className="justify-content-center">
        <button
          className="page-link"
          onClick={() => {
            handleLoadMoreContacts();
          }}
        >
          Load More Contacts
        </button>
      </div>
    </div>
  );
};

export default Pagination;
