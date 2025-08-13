import { BookmarkIcon } from '@heroicons/react/24/outline'
import useUserStore from '../../store/useUserStore'

const FavoriteButton = ({ id }: FavoriteButtonProps) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn)
  const userEmail = useUserStore((state) => state.user?.email)

  const savedUsers = localStorage.getItem('users')
  const users = savedUsers ? JSON.parse(savedUsers) : {}

  const favorites: number[] = (userEmail && users[userEmail]?.favorites) ?? []

  const favoriteNow = favorites.includes(id)

  function toggleFavorite() {
    if (!userEmail) return

    const newFavorites = favoriteNow
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id]

    users[userEmail] = {
      ...users[userEmail],
      favorites: newFavorites,
    }

    localStorage.setItem('users', JSON.stringify(users))
  }

  function handleClick() {
    if (!isLoggedIn) {
      alert('Você precisa estar logado para favoritar!')
      return
    }

    toggleFavorite()

    alert(favoriteNow ? 'Removido dos favoritos' : 'Adicionado aos favoritos')
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-3 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white transition hover:cursor-pointer"
    >
      <BookmarkIcon className={`w-5 h-5 ${favoriteNow ? 'text-yellow-400' : 'text-white'}`} />
      <span>{favoriteNow ? 'Remove from Favorites' : 'Add to Favorites'}</span>
    </button>
  )
}

export default FavoriteButton
