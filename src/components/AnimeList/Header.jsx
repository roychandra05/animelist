import Link from "next/link";
export const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="py-3 bg-main-background">
      <div className="px-3 flex justify-between">
        <h1 className="font-semibold text-main-secondary">{title}</h1>
        {linkHref && linkTitle && (
          <Link
            href={linkHref}
            className="border-2 border-main-secondary shadow-lg rounded-lg px-2 bg-main-accent text-main-shadow drop-shadow-lg hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
          >
            {linkTitle}
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
