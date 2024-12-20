export const Header = ({ title, page }) => {
  return (
    <div className="max-w-full flex flex-col justify-center items-center py-3 gap-3">
      <div className="font-bold text-2xl text-main-secondary">{title}</div>
      <div className="px-4 flex justify-center items-center text-lg bg-main-accent w-8 border-2 border-main-black rounded-md">
        {page}
      </div>
    </div>
  );
};
export default Header;
