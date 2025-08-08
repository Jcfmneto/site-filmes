import Logo from './Logo'
import SearchInput from './SearchInput'
import NavHamburger from './NavHamburger'
import useUserStore from '../../store/useUserStore'

const navItems: NavLinkItem[] = [
  { label: 'Login', path: '/login' },
  { label: 'Register', path: '/register' },
]

const navItemsLoggin: NavLinkItem[] = [
  { label: 'Account', path: '/account' },
  { label: 'Favorites', path: '/favorites' },
]

const Header = () => {
  const isLoggedIn = useUserStore((user) => user.isLoggedIn)
  const currentNavItems = isLoggedIn ? navItemsLoggin : navItems

  return (
    <header className="bg-gray-950 shadow-lg flex items-center justify-between px-4 py-2 w-full flex-nowrap relative h-16">
      <Logo />
      <div role="search" className="hidden sm:block flex-1 mx-2 sm:mx-4 shrink min-w-0">
        <SearchInput />
      </div>
      <nav className="flex items-center gap-6 flex-shrink-0" aria-label="Menu principal">
        <NavHamburger items={currentNavItems} />
      </nav>
    </header>
  )
}

export default Header
