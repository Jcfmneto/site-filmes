import { useEffect, useState } from 'react'
import tmdbApiSearch from '../../services/api'
import MovieCardItem from './MovieCardItem'

const MovieCard = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    tmdbApiSearch
      .get<apiResponse<Movie>>('/discover/movie', {
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
