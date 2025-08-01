import React from 'react'
import { imageUrl } from '../../services/api'

const MovieCard = () => {
    return (
        <div className='flex flex-wrap justify-between items-center'>

            <img className="max-w-full max-h-full  rounded-2xl" src={`${imageUrl}/omoMXT3Z7XrQwRZ2OGJGNWbdeEl.jpg`} />

        </div>

    )
}

export default MovieCard