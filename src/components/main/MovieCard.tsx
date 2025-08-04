import { useEffect, useState } from 'react'
import { tmdbApiMovies } from '../../services/api'
import type { Movie } from '../../types/Movie'
import type { IApiResponse } from '../../types/IApiResponse'
import MovieCardItem from './MovieCardItem'

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
        <MovieCardItem key={movie.id} movie={movie} />
      ))}
    </>
  )
}

export default MovieCard
