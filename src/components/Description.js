import {useParams, Link} from 'react-router-dom'
import NavBar from './NavBar'

const Description = ({data}) =>{
    const movieId = useParams()
    const movie   = data.find(item => item.id === parseInt(movieId.movieId))

    return(
        <div style = {{display :'grid', gridTemplateRows : '1fr 7fr', gridColumnStart :'1', gridColumnEnd : 'span 3', gridTemplateColumns : '1fr 1fr 1fr', height : '100%'}}>
            <NavBar/>
            <div style = {{gridColumnStart :'2', gridColumnEnd : 'span 1', gridRowStart :'2', gridRowEnd : 'span 1', display : 'flex', flexDirection : 'column', justifyContent : 'center'}}>
                <p>{movie.description}</p>
                <iframe width="560" height="315" src= {movie.videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        
    )

}

export default Description