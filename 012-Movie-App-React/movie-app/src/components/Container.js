import React from 'react'
import Card from './Card'

function Container({imageBaseUrl,movieData, search}) {
  if ({search}!=="") {
    movieData = movieData.filter(movie => movie.original_title.toLowerCase().includes(search.toLowerCase()));
  }
  return (
    <div className='container'>
        {
          (movieData.length===0)?<p className='notfound'>Not Found</p>:
          movieData.map((e)=> {
            return(
                <Card 
                movieData={e}
                search={search}
                imageBaseUrl={imageBaseUrl}
                />
            )
          })
        }
    </div>
  )
}

export default Container