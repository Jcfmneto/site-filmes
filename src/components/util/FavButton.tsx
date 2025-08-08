import { BookmarkIcon } from '@heroicons/react/24/outline'
import useUserStore from '../../store/useUserStore'

const FavoriteButton = ({ id }: FavoriteButtonProps) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn)
  const favorites = useUserStore((state) => state.favorites)
  const toggleFavorite = useUserStore((state) => state.setFavorites)

  const isFavorite = favorites.includes(id)

  function handleClick() {
    if (!isLoggedIn) {
      window.alert('Você precisa estar logado para favoritar!')
      return
    }

    toggleFavorite(id)

    window.alert(isFavorite ? 'Removido dos favoritos' : 'Adicionado aos favoritos')
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-3 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white transition hover:cursor-pointer"
    >
      <BookmarkIcon className={`w-5 h-5 ${isFavorite ? 'text-yellow-400' : 'text-white'}`} />
      <span>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</span>
    </button>
  )
}

export default FavoriteButton
