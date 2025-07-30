import { Link } from "react-router-dom";

export interface NavLinkItem {
  label: string;
  path: string;
}

interface NavLinksProps {
  items: NavLinkItem[];
}

export default function NavLinks({ items }: NavLinksProps) {
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
}
