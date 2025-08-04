import React, { useEffect, useState } from 'react'
import type { IApiResponse } from '../../types/IApiResponse'
import { tmdbApiMovies } from '../../services/api'
import type { Movie } from '../../types/Movie'
import MovieCardItem from './MovieCardItem'

const Carousel = () => {

    const [carousel, setCarousel] = useState<Movie[]>([])
    const [index, setIndex] = useState(0)


    useEffect(() => {
        tmdbApiMovies
            .get<IApiResponse<Movie>>('', {
                params: {
                    sort_by: 'popularity.desc',
                    page: 1,
                },
            })
            .then((response) => {
                const formatado = response.data.results.slice(0, 9)
                setCarousel(formatado)
            })
            .catch((error) => {
                console.error('Erro ao buscar filmes:', error)
            })
    }, [])

     
    return (
        <div className=' relative flex overflow-hidden'>
            {carousel.map(movie => (
                <div key={movie.id} className="w-full flex-shrink-0 flex justify-center items-center px-4">

                    <MovieCardItem movie={movie} />

                </div>
            ))}
        </div>
    )
}

export default Carousel