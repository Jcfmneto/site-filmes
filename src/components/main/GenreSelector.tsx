const GenreSelector = ({ genres, selectedGenre, onSelect }: GenreSelectorProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-full px-4">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onSelect(selectedGenre === genre.id ? null : genre.id)}
          className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300 whitespace-nowrap border-2 hover:cursor-po
            ${
              selectedGenre === genre.id
                ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/50'
                : 'bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 hover:text-white'
            }`}
          aria-pressed={selectedGenre === genre.id}
          type="button"
        >
          {genre.name}
        </button>
      ))}
    </div>
  )
}

export default GenreSelector
