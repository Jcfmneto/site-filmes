import { BookmarkIcon } from '@heroicons/react/24/outline'
import useUserStore from '../../store/useUserStore'

const FavoriteButton = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn)

  function handleClick() {
    if (isLoggedIn) {
      window.alert('Ok')
    } else {
      window.alert('Bad')
    }
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-3 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white transition hover:cursor-pointer"
    >
      <BookmarkIcon className="w-5 h-5" />
      <span>Add to Favorites</span>
    </button>
  )
}

export default FavoriteButton
