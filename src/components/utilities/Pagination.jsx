export const Pagination = ({ page, totalPage, setPage, btnNext, btnPrev, scrollTop }) => {

  const increasePageValue = () => {
    setPage((prev) => prev + 1);
    scrollTop();
  };
  const decreasePageValue = () => {
    scrollTop();
    setPage((prev) => prev - 1);
  };

  return (
    <div className="max-w-full flex items-center justify-center gap-5 text-center rounded-md text-lg py-5">
      <div className="">{btnNext}</div>
      <button
        className="border-2 border-main-shadow shadow-lg rounded-lg px-2 bg-main-accent text-main-shadow drop-shadow-lg hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
        onClick={() => {
          increasePageValue();
        }}
      >
        Next
      </button>
      <p className="border-2 border-main-black bg-main-accent px-1.5 rounded-md font-semibold">
        {page} of {totalPage}
      </p>
      {page > 1 ? (
        <button
          className="border-2 border-main-shadow shadow-lg rounded-lg px-2 bg-main-accent text-main-shadow drop-shadow-lg hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
          onClick={() => {
            decreasePageValue();
          }}
        >
          Prev
        </button>
      ) : (
        <button
          className=" border-2 border-main-border rounded-md bg-main-border px-1.5"
          disabled
        >
          Prev
        </button>
      )}
      <div className="">{btnPrev}</div>
    </div>
  );
};
export default Pagination;
