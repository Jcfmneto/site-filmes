import { useEffect, useState } from 'react'
import { imageUrl, tmdbApiMovies } from '../../services/api'
import type { Movie } from '../../types/Movie'
import type { IApiResponse } from '../../types/IApiResponse'

const MovieCard = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    tmdbApiMovies
      .get<IApiResponse<Movie>>('', {
        params: {
          sort_by: 'popularity.desc',
          page: 1,
        },
      })
      .then((response) => {
        const formatado = response.data.results.slice(0, 9)
        setMovies(formatado)
      })
      .catch((error) => {
        console.error('Erro ao buscar filmes:', error)
      })
  }, [])

  return (
    <>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-xl mx-auto"
        >
          <img
            src={`${imageUrl}/${movie.poster_path}`}
            alt={`Imagem do filme ${movie.title}`}
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full">
            <div className="relative bg-white rounded-xl shadow-lg p-4 flex gap-4 items-start">
              <div className="w-24 h-36 rounded-md overflow-hidden shadow-md flex-shrink-0">
                <img
                  src={`${imageUrl}/${movie.poster_path}`}
                  alt={`Miniatura do filme ${movie.title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-black font-bold text-lg">{movie.title}</h3>
                <span className="text-gray-500 text-sm mb-2">
                  {movie.release_date}
                </span>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {movie.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default MovieCard
