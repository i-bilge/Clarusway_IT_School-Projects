import React from 'react'

function Card() {
  return (
    <>
        <div className='movie'>
            <img src='images/poster.jpg' className='poster'></img>
            <div className='movie-details'>
                <div className='box'>
                    <h4 className='title'>Movie Title</h4>
                    <p className='rating'>info here</p>
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