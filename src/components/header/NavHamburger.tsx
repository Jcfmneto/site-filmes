import { useState } from "react";
import NavLinks, { type NavLinkItem } from "./NavLinks";

interface NavHamburgerProps {
  items?: NavLinkItem[];
}

const NavHamburger = ({ items }: NavHamburgerProps) => {
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

      <div
        className={`absolute w-screen flex flex-col items-center bg-gray-950 p-5 left-0 top-full transition-all duration-300 ease-out transform ${
          openMenu
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <NavLinks items={items} />
      </div>
    </div>
  );
};

export default NavHamburger;
