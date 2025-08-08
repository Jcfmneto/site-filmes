import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import imageUrl from '../../services/imageUrl'
import Carousel from '../../components/main/Carousel'
import MovieCardItem from '../../components/main/MovieCardItem'
import { StarIcon } from '@heroicons/react/24/outline'
import FavButton from '../../components/util/FavButton'

const MovieInfo = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)
  const [collectionMovies, setCollectionMovies] = useState<Movie[]>([])
  const [genreList, setGenreList] = useState<Genre[]>([])

  useEffect(() => {
    if (!id) return

    setMovie(null)
    setCollectionMovies([])
    setGenreList([])

    api
      .get<Movie>(`/movie/${id}`)
      .then((response) => {
        const movieData = response.data
        setMovie(movieData)

        const hasCollection = movieData.belongs_to_collection?.id

        if (hasCollection) {
          api.get(`/collection/${hasCollection}`).then((response) => {
            const filtered = response.data.parts
              .filter((movie: Movie) => movie.id !== movieData.id && movie.poster_path)
              .slice(0, 10)
            setCollectionMovies(filtered)
          })
        }

        if (Array.isArray(movieData.genres) && movieData.genres.length > 0) {
          setGenreList(movieData.genres.slice(0, 2))
        }
      })
      .catch((err) => console.error('Erro ao buscar filme:', err))
  }, [id])

  return (
    <main className="bg-gray-900 min-h-screen px-4 py-8">
      <div className="bg-gray-800 w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row mx-auto">
        <div className="w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center">
          <img
            src={`${imageUrl}/${movie?.poster_path}`}
            alt={movie?.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center gap-4 text-white">
          <h1 className="text-3xl font-bold">{movie?.title}</h1>
          <p className="text-sm opacity-70">{movie?.overview}</p>
          <div className="flex gap-4 text-sm text-gray-300">
            <div className="flex justify-center items-center gap-2">
              <StarIcon className="w-5 mb-1 sm:w-7" />
              {movie?.vote_average?.toFixed(1)}

              <span>{movie?.release_date}</span>
              <span>{movie?.original_language?.toUpperCase()}</span>
              {movie?.id && <FavButton id={movie?.id} />}
            </div>
          </div>
        </div>
      </div>

      {movie?.poster_path && collectionMovies.length > 0 && (
        <section className="mt-12 w-full max-w-6xl mx-auto px-4">
          <h2 className="text-white text-2xl font-semibold mb-6">
            Part of the{' '}
            <span className="text-bold text-yellow-400">{movie.belongs_to_collection?.name}</span>
          </h2>
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {collectionMovies.map((item) => (
              <MovieCardItem key={item.id} movie={item} />
            ))}
          </div>
        </section>
      )}

      {movie?.poster_path &&
        genreList.map((genre) => (
          <section key={genre.id} className="mt-12 w-full mx-auto">
            <h2 className="text-white text-2xl font-semibold mb-4 px-4">Top {genre.name} Movies</h2>
            <Carousel withGenres={genre.id} />
          </section>
        ))}
    </main>
  )
}

export default MovieInfo
