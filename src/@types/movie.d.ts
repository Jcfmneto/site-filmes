interface Movie {
  id: number
  title: string
  poster_path: string
  overview: string
  adult: boolean
  genre_ids: number[]
  popularity: number
  video: boolean
  release_date: string
}

interface MovieCardItemProps {
  movie: Movie
}
