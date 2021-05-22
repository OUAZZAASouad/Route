import {Link} from 'react-router-dom'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const NavBar = () =>{
    return(
        
        <div style = {{backgroundColor : '#333333', gridColumnStart :'1', gridColumnEnd : 'span 3',gridRowStart :'1', gridRowEnd : 'span 1', display :'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div style = {{gridColumnEnd : 'span 1', display : 'flex', justifyContent : 'space-around', alignItems : 'center'}}>
                <Link to = '/' style = {{color : 'white'}}><FontAwesomeIcon icon = {faHome}/> Home</Link> 
                <a href = '#'  style = {{color : 'white'}}></a>
                <a href = '#'  style = {{color : 'white'}}>Login</a>
                <a href = '#'  style = {{color : 'white'}}>SignIn</a>
            </div>
            
        </div>
    )
}

export default NavBar;