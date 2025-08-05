interface Genre {
  id: number
  name: string
}

interface GenreSelectorProps {
  genres: Genre[]
  selectedGenre: number | null
  onSelect: (genreId: number | null) => void
}

type CarouselProps = {
  withGenres: number | null
}
