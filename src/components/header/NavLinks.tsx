import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

const NavItems: React.FC = () => {
  const items: NavItem[] = [
    { label: "Login/Sign In", path: "/login" },
  ];

  return (
    <ul className="flex items-center gap-2 font-medium">
      {items.map(({ label, path }) => (
        <li key={label}>
          <Link
            to={path}
            className="text-yellow-300 hover:text-yellow-600 transition text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
