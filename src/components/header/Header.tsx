import Logo from "./Logo";
import SearchInput from "./SearchInput";
import NavHamburger, { NavLinks } from "./NavLinks";

const Header = () => {
  return (
    <header className="bg-gray-950 shadow-lg flex items-center justify-between px-4 py-2 w-full flex-nowrap relative">
      <Logo />

      <form role="search" className="flex-1 mx-2 sm:mx-4 shrink min-w-0">
        <SearchInput />
      </form>

      <nav className="flex items-center gap-6 flex-shrink-0" aria-label="Menu principal">
        <div className="hidden sm:flex">
          <NavLinks />
        </div>

        <div className="sm:hidden">
          <NavHamburger />
        </div>
      </nav>
    </header>
  );
};

export default Header;
