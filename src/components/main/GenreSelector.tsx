const GenreSelector = ({ genres, selectedGenre, onSelect }: GenreSelectorProps) => {
  return (
    <div className="flex gap-4 justify-center  flex-wrap">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onSelect(selectedGenre === genre.id ? null : genre.id)}
          className={`border-2 border-gray-500 px-6 py-2 rounded transition hover:cursor-pointer duration-500 ${
            selectedGenre === genre.id
              ? 'bg-blue-600 text-white'
              : 'bg-transparent text-gray-300 hover:bg-gray-600'
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  )
}

export default GenreSelector
