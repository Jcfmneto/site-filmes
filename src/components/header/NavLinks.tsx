import { useState } from "react";
import { Link } from "react-router-dom";

export const NavLinks = () => {
  const items = [{ label: "Get Started", path: "/login" }];

  return (
    <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-2 font-medium">
      {items.map(({ label, path }) => (
        <li key={label}>
          <Link
            to={path}
            className="text-yellow-300 hover:text-yellow-600 transition text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl font-bold"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const NavHamburger = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        className="text-white text-2xl hover:cursor-pointer"
        aria-label="Abrir menu"
        type="button"
        onClick={() => setOpenMenu(!openMenu)}
      >
        ☰
      </button>

      {openMenu && (
        <div className=" absolute w-screen flex flex-col items-center bg-gray-950 p-5 left-0 top-full">
          <NavLinks />
        </div>
      )}
    </div>
  );
};

export default NavHamburger;
