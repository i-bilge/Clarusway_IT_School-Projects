import React from 'react'

function Card({movieData, search}) {
return (
    <div className='movie'>
        <img src='images/poster.jpg' alt="poster" className='poster' />
        <div className='movie-details'>
            <div className='box'>
                <h4 className='title'>{movieData.original_title}</h4>
                <p className='rating'>{movieData.vote_average}</p>
            </div>
            <div className='overview'>
                <h1>
                    overview
                </h1>
                {movieData.overview}
            </div>
        </div>
    </div>
)
}

export default Card