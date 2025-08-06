interface BelongsToCollection {
  id: number
  name: string
  poster_path: string | null
  backdrop_path: string | null
}

interface Genre {
  id: number
  name: string
}

interface Movie {
  id: number
  title: string
  poster_path: string | null
  overview: string
  adult: boolean
  genre_ids: number[]
  genres?: Genre[]
  popularity: number
  video: boolean
  release_date: string
  backdrop_path?: string | null
  belongs_to_collection?: BelongsToCollection | null
  budget?: number
  homepage?: string | null
  imdb_id?: string | null
  origin_country?: string[]
  original_language?: string
  original_title?: string
  revenue?: number
  runtime?: number
  status?: string
  tagline?: string | null
  vote_average?: number
  vote_count?: number
}

interface MovieCardItemProps {
  movie: Movie
}
