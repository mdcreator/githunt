import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-between border-b-2 border-teal-800 items-center h-[50px] px-20 m-20 text-white">
      <h3 className="font-bold">Github Search</h3>

      <span className="uppercase text-sm">
        <Link to="/" className="mr-5 hover:text-yellow-400">
          Home
        </Link>
        <Link to="/favourite" className="hover:text-yellow-400">
          Favourite
        </Link>
      </span>
    </nav>
  );
};

export default Navigation;
