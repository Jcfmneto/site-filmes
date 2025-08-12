import { useEffect, useState } from 'react'
import api from '../../services/api'
import useUserStore from '../../store/useUserStore'
import { useNavigate } from 'react-router-dom'

const FavoriteList = () => {
  const userEmail = useUserStore((state) => state.user?.email)
  const navigate = useNavigate()

  const [favorites, setFavorites] = useState<number[]>([])
  const [favMoviesDetails, setFavMoviesDetails] = useState<Movie[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (!userEmail) {
      setFavorites([])
      return
    }

    const savedUsers = localStorage.getItem('users')
    if (!savedUsers) {
      setFavorites([])
      return
    }

    const users = JSON.parse(savedUsers)
    const favs: number[] = users[userEmail]?.favorites ?? []
    setFavorites(favs)
  }, [userEmail])

  useEffect(() => {
    if (favorites.length === 0) {
      setFavMoviesDetails([])
      return
    }

    Promise.all(
      favorites.map((movieId) => api.get(`/movie/${movieId}`).then((response) => response.data))
    ).then((moviesData) => {
      setFavMoviesDetails(moviesData)
    })
  }, [favorites])

  const filteredMovies = favMoviesDetails.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const [currentPage, setCurrentPage] = useState(1)
  const ITEMS_PER_PAGE = 5

  const totalPages = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const pagedMovies = filteredMovies.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  function toggleFavorite(id: number) {
    if (!userEmail) return

    const savedUsers = localStorage.getItem('users')
    if (!savedUsers) return

    const users = JSON.parse(savedUsers)

    const userFavorites: number[] = users[userEmail]?.favorites ?? []

    let newFavorites: number[]
    if (userFavorites.includes(id)) {
      newFavorites = userFavorites.filter((favId) => favId !== id)
    } else {
      newFavorites = [...userFavorites, id]
    }

    users[userEmail] = {
      ...users[userEmail],
      favorites: newFavorites,
    }

    localStorage.setItem('users', JSON.stringify(users))
    setFavorites(newFavorites)
  }

  function handleRemoveFavorite(movieId: number) {
    toggleFavorite(movieId)
  }

  function handleOpenMovieDetails(movieId: number) {
    navigate(`/movie/${movieId}`)
  }

  return (
    <div className="bg-gray-800 rounded p-4 max-w-[900px] w-full mx-auto">
      <h1 className="text-white text-4xl font-bold mb-6 text-center sm:text-left">
        Favorite Movies
      </h1>

      <input
        type="text"
        placeholder="Search favorite movies"
        value={searchQuery}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(event.target.value)
        }
        className="w-full mb-6 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {pagedMovies.length === 0 ? (
        <p className="text-gray-400 text-center">No favorite movies found.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-600">
            {pagedMovies.map((movie) => (
              <li
                key={movie.id}
                className="flex justify-between items-center bg-gray-700 px-6 py-2 cursor-pointer hover:bg-gray-600"
              >
                <span
                  className="text-white flex-grow"
                  onClick={() => handleOpenMovieDetails(movie.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e: React.KeyboardEvent<HTMLSpanElement>) =>
                    e.key === 'Enter' && handleOpenMovieDetails(movie.id)
                  }
                >
                  {movie.title}
                </span>

                <button
                  className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-1 rounded"
                  onClick={() => handleRemoveFavorite(movie.id)}
                  aria-label={`Remove ${movie.title} from favorites`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-6">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className={`px-5 py-2 rounded ${
                  currentPage === 1
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gray-700 hover:bg-gray-600'
                } text-white`}
              >
                Previous
              </button>
              <span className="text-white self-center">
                {currentPage} / {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className={`px-5 py-2 rounded ${
                  currentPage === totalPages
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gray-700 hover:bg-gray-600'
                } text-white`}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default FavoriteList
