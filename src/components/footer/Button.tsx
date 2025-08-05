import { Link } from 'react-router-dom'

const baseClasses =
  'bg-transparent text-white border-2 border-gray-500 px-6 py-2 rounded hover:bg-gray-600 transition hover:cursor-pointer duration-500'

const Button = ({ path = '/login', className = '', children }: FooterButtonProps) => {
  return (
    <Link to={path}>
      <button className={`${baseClasses} ${className}`}>{children}</button>
    </Link>
  )
}

export default Button
