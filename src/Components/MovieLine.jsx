import React, { useState } from 'react'
import Movie from './Movie'

function MovieLine(object) {    
    return (
        <div className='card-grid' style={{ display: 'flex', gap: '20px' }}>
            {
            object.cityNames.map((v, i) => (
                <Movie title={v.titleName} age={v.titleAge} url={v.imageURL} wikiURL={v.wikiURL} />))
            }
        </div>
    )
}
export default MovieLine