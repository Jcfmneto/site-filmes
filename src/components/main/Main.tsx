import { useState } from 'react'
import Carousel from './Carousel'
import GenreSelector from './GenreSelector'
import MovieCard from './MovieCard'

const Main = () => {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null)

  const genres = [
    { id: 28, name: 'Action Movies' },
    { id: 35, name: 'Comedy Movies' },
    { id: 18, name: 'Drama Movies' },
  ]

  return (
    <main className="bg-gray-900 overflow-x-hidden w-full pt-68 sm:pt-32">
      <div aria-label="Genre Buttons" className="flex flex-col items-center gap-12">
        <h2 className="text-base sm:text-md md:text-lg lg:text-2xl text-white">Pick a genre</h2>
        <GenreSelector genres={genres} selectedGenre={selectedGenre} onSelect={setSelectedGenre} />
      </div>

      <section aria-label="Featured Movies" className="mt-10">
        <h3 className="sr-only">Featured Movies</h3>
        <Carousel withGenres={selectedGenre} />
      </section>

      <div className="pt-20 sm:pt-16 pb-12 text-center font-semibold text-gray-400 px-4">
        <h2>Most Popular Movies</h2>
      </div>

      <section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 mb-4 px-3"
        aria-label="Popular Movies List"
      >
        <MovieCard />
      </section>
    </main>
  )
}

export default Main
