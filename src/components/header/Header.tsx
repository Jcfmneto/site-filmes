import NavLinks from "./NavLinks";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
const Header = () => {
  return (
    <div className="bg-black min-h-screen">
     <header className="bg-gray-950 shadow-lg flex items-center justify-between px-4 h-16  mx-auto w-full">
      <Logo />

      <div className="flex-1 mx-4">
        <SearchInput />
      </div>

      <div className="hidden sm:flex gap-6 flex-shrink-0">
        <NavLinks />
      </div>

      <button className="sm:hidden text-white text-2xl hover:cursor-pointer">☰</button>
    </header>
    </div>
  );
};

export default Header;
