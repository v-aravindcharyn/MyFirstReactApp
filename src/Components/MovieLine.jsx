import React from 'react' 
import Movie from './Movie' 
function MovieLine() 
{ 
    return ( 
    <div className='MovieLine' style={{display:'flex',gap:'20px'}}> <Movie /> <Movie /> <Movie /> <Movie /> </div> 
) 
} 
export default MovieLine