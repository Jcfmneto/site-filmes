import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import imageUrl from '../../services/imageUrl'

const MovieInfo = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    api
      .get<Movie>(`/movie/${id}`)
      .then((response) => {
        setMovie(response.data)
      })
      .catch((error) => console.error('Erro ao buscar filmes:' + error))
  }, [id])

  return (
    <main className="bg-gray-900 min-h-screen flex items-center justify-center px-4 py-8">
      <div className="bg-gray-800 w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
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
            <span>⭐ {movie?.vote_average?.toFixed(1)}</span>
            <span>{movie?.release_date}</span>
            <span>{movie?.original_language?.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MovieInfo
