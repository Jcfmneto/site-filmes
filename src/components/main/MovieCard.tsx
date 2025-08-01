import { useEffect, useState } from 'react'
import { imageUrl } from '../../services/api'
import { tmdbApiMovies } from '../../services/api';
import type { Movie } from '../../types/Movie';
import type { IApiResponse } from '../../types/IApiResponse';

const MovieCard = () => {

    const [movies, setMovies] = useState<Movie[]>([])


    useEffect(() => {
        tmdbApiMovies.get<IApiResponse<Movie>>('', {
            params: {
                sort_by: 'popularity.desc',
                page: 1,
                imageUrl: true

            }
        })
            .then((response) => {
                    const formatado = response.data.results.slice(0, 9)
                setMovies(formatado);
                console.log(response)
            })
            .catch((error) => {
                console.error('Erro ao buscar filmes:', error);
            });
    }, []);

    return (
     <>
            {movies.map(movie => (
                <div key={movie.id}>
                    <img src={`${imageUrl}/${movie.poster_path}}`} alt={`Imagem do filme ${movie.title}`} />
                </div>
            )
            )}
   </> )
}

export default MovieCard