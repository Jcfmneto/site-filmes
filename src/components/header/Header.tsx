import Logo from "./Logo";
import SearchInput from "./SearchInput";
import NavHamburger from "./NavHamburger"; 
import NavLinks from "./NavLinks";        

const navItems = [
  { label: "Home", path: "/" },
  { label: "Sobre", path: "/about" },
  { label: "Contato", path: "/contact" },
];

const Header = () => {
  return (
    <header className="bg-gray-950 shadow-lg flex items-center justify-between px-4 py-2 w-full flex-nowrap relative sm:fixed">
      <Logo />

      <div role="search" className="flex-1 mx-2 sm:mx-4 shrink min-w-0">
        <SearchInput />
      </div>

      <nav className="flex items-center gap-6 flex-shrink-0" aria-label="Menu principal">
        <div className="hidden sm:flex">
          <NavLinks items={navItems} />
        </div>

        <div className="sm:hidden">
          <NavHamburger items={navItems} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
