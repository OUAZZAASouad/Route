import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const MovieCard = ({...others}) => {
    const myStyle = {
        textDcoration: 'none !important',
        color:'inherit'
    }
    const len = others.rating/2 ;
    const arr = new Array(5).fill(0);
    return(
        <Link to={`/${others.id}`} style = {myStyle}>
            <div style = {{display : 'flex', flexDirection : 'column', width : '220px', justifyContent : 'space-between', alignItems : 'center', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} >
                    <img src = {others.posterURL} width = '100%' height = '300px'/>
                    <p style = {{color : '#333333'}}>{others.title}</p>
                    <div>{arr.map((item, index) => <FontAwesomeIcon icon = { len % 1 !== 0 && index + 1 === Math.round(len) ? faStarHalf : faStar} color = {index + 1 <= Math.round(len) ? 'yellow' : 'gray'}/>)}</div>
            </div>
        </Link>
    )
}

export default MovieCard;