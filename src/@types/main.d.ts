type GenreSelectorProps = {
  genres: Genre[]
  selectedGenre: number | null
  onSelect: (genreId: number | null) => void
}
