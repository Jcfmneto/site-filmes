import { Link } from 'react-router-dom'

export default function NavLinks({ items }: NavLinksProps) {
  return (
    <nav aria-label="Navegação principal">
      <ul className="flex flex-col items-center gap-2 font-medium">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="text-yellow-300 hover:text-yellow-600 transition text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl font-bold"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
