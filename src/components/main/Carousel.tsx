import { useEffect, useState } from 'react'
import api from '../../services/api'
import MovieCardItem from './MovieCardItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css/pagination'

const Carousel = ({ withGenres }: CarouselProps) => {
  const [carousel, setCarousel] = useState<Movie[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    setCarousel([])
    setPage(1)
  }, [withGenres])

  const fetchMovies = (currentPage: number) => {
    api
      .get<apiResponse<Movie>>('/discover/movie', {
        params: {
          sort_by: 'popularity.desc',
          page: currentPage,
          ...(withGenres ? { with_genres: withGenres } : {}),
        },
      })
      .then((response) => {
        setCarousel((prev) => {
          const newMovies = response.data.results.filter(
            (newMovie) => !prev.some((movie) => movie.id === newMovie.id)
          )
          return [...prev, ...newMovies]
        })
      })
      .catch((error) => {
        console.error('Erro ao buscar filmes:', error)
      })
  }

  useEffect(() => {
    fetchMovies(page)
  }, [page, withGenres])

  return (
    <div className="bg-gray-900">
      <Swiper
        key={withGenres ?? 'all'}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 8,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 18,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1536: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
          1920: {
            slidesPerView: 6,
            spaceBetween: 28,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode]}
        className="w-full"
        onReachEnd={() => setPage((prev) => prev + 1)}
      >
        {carousel.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="mb-12 mt-8">
              <MovieCardItem movie={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
