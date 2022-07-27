import React from 'react'

function Card(movie) {
  return (
    <>
        <div className='movie'>
            <img src='images/poster.jpg' className='poster'></img>
            <div className='movie-details'>
                <div className='box'>
                    <h4 className='title'>Movie Title</h4>
                    <p className='rating'>9,5</p>
                </div>
                <div className='overview'>
                    <h1>
                        overview
                    </h1>
                    lorem   impus   dolar   sit    amet,
                </div>
            </div>
        </div>
    </>
  )
}

export default Card