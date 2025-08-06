import { useState } from 'react'
import Carousel from './Carousel'
import GenreSelector from './GenreSelector'
import MovieCard from './MovieCard'
import banner from '../../../assets/banner.png'

const Main = () => {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null)

  const genres = [
    { id: 28, name: 'Action Movies' },
    { id: 12, name: 'Adventure Movies' },
    { id: 16, name: 'Animation Movies' },
    { id: 35, name: 'Comedy Movies' },
    { id: 80, name: 'Crime Movies' },
    { id: 99, name: 'Documentary Movies' },
    { id: 18, name: 'Drama Movies' },
    { id: 10751, name: 'Family Movies' },
    { id: 14, name: 'Fantasy Movies' },
    { id: 36, name: 'History Movies' },
    { id: 27, name: 'Horror Movies' },
    { id: 10402, name: 'Music Movies' },
    { id: 9648, name: 'Mystery Movies' },
    { id: 10749, name: 'Romance Movies' },
    { id: 878, name: 'Science Fiction Movies' },
    { id: 10770, name: 'TV Movie Movies' },
    { id: 53, name: 'Thriller Movies' },
    { id: 10752, name: 'War Movies' },
    { id: 37, name: 'Western Movies' },
  ]

  return (
    <main className="bg-gray-900 overflow-x-hidden w-full pt-68 sm:pt-32">
      <div
        aria-label="Genre Buttons"
        className="relative flex flex-col items-center gap-8 max-w-5xl mx-auto px-6 py-8 rounded-lg shadow-lg overflow-hidden"
      >
        <img
          src={banner}
          alt="Banner com óculos 3D e pipoca"
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
        />
        <div className="relative z-10">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-wide select-none">
            Pick a genre
          </h2>
        </div>

        <div className="relative z-10">
          <GenreSelector
            genres={genres}
            selectedGenre={selectedGenre}
            onSelect={setSelectedGenre}
          />
        </div>
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
