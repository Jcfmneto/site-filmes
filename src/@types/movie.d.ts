type BelongsToCollection = {
  id: number
  name: string
  poster_path: string | null
  backdrop_path: string | null
}

type CarouselProps = {
  withGenres: number | null
}

type Genre = {
  id: number
  name: string
}

type ProductionCompany = {
  id: number
  name: string
  logo_path: string | null
  origin_country: string
}

type ProductionCountry = {
  iso_3166_1: string
  name: string
}

type SpokenLanguage = {
  english_name: string
  iso_639_1: string
  name: string
}

type Movie = {
  id: number
  title: string
  original_title: string
  poster_path: string | null
  backdrop_path: string | null
  overview: string
  tagline?: string | null
  adult: boolean
  genre_ids?: number[]
  genres?: Genre[]
  popularity: number
  vote_average: number
  vote_count: number
  release_date: string
  original_language: string
  video: boolean
  belongs_to_collection?: BelongsToCollection | null
  budget?: number
  revenue?: number
  runtime?: number
  status?: string
  homepage?: string
  imdb_id?: string
  origin_country?: string[]
  production_companies?: ProductionCompany[]
  production_countries?: ProductionCountry[]
  spoken_languages?: SpokenLanguage[]
}

type MovieCardItemProps = {
  movie: Movie
}
