import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5x font-bold text-yellow-300 hover:text-yellow-600 transition"
    >
      Movies
    </Link>
  );
};

export default Logo;
