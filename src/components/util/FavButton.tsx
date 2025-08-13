import { useState, useEffect } from 'react'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import useUserStore from '../../store/useUserStore'

interface FavoriteButtonProps {
  id: number
}

const FavoriteButton = ({ id }: FavoriteButtonProps) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn)
  const userEmail = useUserStore((state) => state.user?.email)

  const [favoriteNow, setFavoriteNow] = useState(false)

  useEffect(() => {
    if (!userEmail) return

    const savedUsers = localStorage.getItem('users')
    const users = savedUsers ? JSON.parse(savedUsers) : {}
    const favorites: number[] = users[userEmail]?.favorites ?? []

    setFavoriteNow(favorites.includes(id))
  }, [userEmail, id])

  function toggleFavorite() {
    if (!userEmail) return

    const savedUsers = localStorage.getItem('users')
    const users = savedUsers ? JSON.parse(savedUsers) : {}
    const favorites: number[] = users[userEmail]?.favorites ?? []

    const newFavorites = favoriteNow
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id]

    users[userEmail] = {
      ...users[userEmail],
      favorites: newFavorites,
    }

    localStorage.setItem('users', JSON.stringify(users))
    setFavoriteNow(!favoriteNow)
  }

  function handleClick() {
    if (!isLoggedIn) {
      alert('You need to be logged in to favorite!')
      return
    }

    toggleFavorite()
    alert(favoriteNow ? 'Removed from favorites' : 'Added to favorites')
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
