import {useState} from 'react'
import Filter from './Filter'
import AddMovie from './AddMovie'
import MovieList from './MovieList'
import React from 'react'
const Home = ({data}) => {

    const [movies, setMovies] = useState(data)
    const [status, setStatus] = useState(false)
    const [filtredMovies, setfiltredMovies] = useState(data)

    const handleMovies = (newData) =>{
      setMovies(newData)
      setfiltredMovies(newData)
      setStatus(false)
      }
    
    const handleStatus = () => {
      setStatus(true)
    }

    const handleFiltredMovies = (newData) =>{
      setfiltredMovies(newData)
      }
    return (
      <div className="content" style = {{display :'grid', gridTemplateRows : '1fr 7fr'}}>
            <Filter data = {movies} handleStatus = {handleStatus} handleFiltredMovies = {handleFiltredMovies} />
            {status ? <AddMovie handleMovies = {handleMovies} data = {movies}/> : <></>}
            <div style = {{display : 'flex', flexDirection : 'column', justifyContent : 'space-around', height : '100%'}}>
              <MovieList data = {filtredMovies}/>
            </div>
        </div>
         )
}
export default Home;