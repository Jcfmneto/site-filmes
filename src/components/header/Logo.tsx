import { Link } from "react-router-dom";
import { CameraIcon } from "@heroicons/react/24/outline";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-yellow-300 hover:text-yellow-600 transition flex  justify-between gap-1.5 items-center"
    >
      <CameraIcon className="h-5 w-5 text-blue-400 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 hover:text-blue-200" />
      Movies
    </Link>
  );
};

export default Logo;
