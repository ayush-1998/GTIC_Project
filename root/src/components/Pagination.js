import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav style={{ position: "relative", left: "300px", paddingTop: "20px" }}>
      <ul className="pagination justify-content-center">
        <li className="">
          <button className="prev-page" onClick={prevPage}>
            Previous
          </button>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li key={pgNumber} className="">
            <button
              onClick={() => setCurrentPage(pgNumber)}
              className={`page-number ${
                currentPage == pgNumber ? "page-number-active" : ""
              } `}
              href="#"
            >
              {pgNumber}
            </button>
          </li>
        ))}
        <li className="">
          <button className="next-page" onClick={nextPage} href="#">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
