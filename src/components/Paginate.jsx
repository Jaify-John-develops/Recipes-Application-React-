import ReactPaginate from "react-paginate";

const ReactPaginateComponent = ReactPaginate.default ?? ReactPaginate;

const Pagination = ({ pageCount, handlePageChange }) => {
  return (
    <ReactPaginateComponent
      pageCount={pageCount}
      onPageChange={handlePageChange}
      containerClassName="pagination"
      activeClassName="selected"
      disabledClassName="disabled"
      nextLabel={"Next"}
      previousLabel={"Previous"}
    />
  );
};
export default Pagination;