import React from 'react'
import Movie from './Movie'
function MovieLine(object) {
    
    return (
        <div className='MovieLine' style={{ display: 'flex', gap: '20px' }}>
            {
            object.cricketerNames.map((v, i) => (
                <Movie title={v.titleName} age={v.titleAge} url={v.imageURL} />))
            }
        </div>
    )
}
export default MovieLine