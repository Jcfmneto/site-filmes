import Logo from "./Logo";
import SearchInput from "./SearchInput";
import NavHamburger from "./NavHamburger";
import type { NavLinkItem } from "./NavLinks";

const navItems: NavLinkItem[] = [{ label: "Login", path: "/login" }, {label: "Register", path: "/register"}];

const Header = () => {
  return (
    <header className="bg-gray-950 shadow-lg flex items-center justify-between px-4 py-2 w-full flex-nowrap relative sm:sticky">
      <Logo />

      <div
        role="search"
        className="hidden sm:block flex-1 mx-2 sm:mx-4 shrink min-w-0"
      >
        <SearchInput />
      </div>

      <nav
        className="flex items-center gap-6 flex-shrink-0"
        aria-label="Menu principal"
      >
        <NavHamburger items={navItems} />
      </nav>
    </header>
  );
};

export default Header;
