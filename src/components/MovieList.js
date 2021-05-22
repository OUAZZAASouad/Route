import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({data}) => {
    // console.log(data)
    return(
        <div style = {{display : 'flex', flexWrap : 'wrap', justifyContent : 'space-between'}}>
            {data.map(item => 
                <MovieCard {...item}/>
                )}
        </div>
    )
}

export default MovieList;