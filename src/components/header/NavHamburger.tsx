import { useState } from "react";
import NavLinks, { type NavLinkItem } from "./NavLinks";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface NavHamburgerProps {
  items?: NavLinkItem[];
}

const NavHamburger = ({ items }: NavHamburgerProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setOpenMenu((prev) => !prev);
      setAnimate(false);
    }, 500);
  };

  return (
    <div className="flex items-center">
      <button
        className="hover:cursor-pointer"
        aria-label="Abrir menu"
        type="button"
        onClick={handleClick}
      >
        {openMenu ? (
          <XMarkIcon
            className={`text-amber-50 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 ${
              animate ? "animate-spin-slow" : ""
            }`}
          />
        ) : (
          <Bars3Icon
            className={`text-amber-50 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 ${
              animate ? "animate-bounce" : ""
            }`}
          />
        )}
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
