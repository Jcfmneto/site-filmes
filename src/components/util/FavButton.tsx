import React from 'react'
import { BookmarkIcon } from '@heroicons/react/24/outline'

const FavButton = () => {
  return (
    <button className="flex items-center gap-2 px-3 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white transition hover:cursor-pointer">
      <BookmarkIcon className="w-5 h-5" />
      <span>Add to Favorites</span>
    </button>
  )
}

export default FavButton
