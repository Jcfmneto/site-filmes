import imageUrl from '../../services/imageUrl'

const MovieCardItem = ({ movie }: MovieCardItemProps) => {
  return (
    <div
      key={movie.id}
      className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-xl text-shadow-zinc-950 mx-auto"
    >
      <img
        src={`${imageUrl}/${movie.poster_path}`}
        alt={`Imagem do filme ${movie.title}`}
        className="w-full h-[500px] object-cover hover:cursor-pointer"
      />

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full">
        <div className="relative bg-white rounded-xl shadow-lg p-4 flex gap-4 items-start">
          <div className="w-24 h-36 rounded-md overflow-hidden shadow-md flex-shrink-0">
            <img
              src={`${imageUrl}/${movie.poster_path}`}
              alt={`Miniatura do filme ${movie.title}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col flex-grow">
            <h3 className="text-black font-bold text-lg">{movie.title}</h3>
            <span className="text-gray-500 text-sm mb-2">{movie.release_date}</span>
            <p className="text-gray-600 text-sm line-clamp-3">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCardItem
