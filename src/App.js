import './App.css';
import Home from './components/Home'
import {Route, Switch} from 'react-router-dom'
import Description from './components/Description';


function App() {

  const data = [
    {
      id : 1,
      title : 'Just Mercy',
      description : 'Just Mercy dramatizes a real-life injustice with solid performances, a steady directorial hand, and enough urgency to overcome a certain degree of earnest advocacy',
      posterURL  : 'https://m.media-amazon.com/images/M/MV5BYmM4YzA5NjUtZGEyOS00YzllLWJmM2UtZjhhNmJhM2E1NjUxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      rating    : '5',
      videoURL  : 'https://www.youtube.com/embed/GVQbeG5yW78'
    },
    {
      id : 2,
      title : 'The Revenant',
      description : 'The Revenant (2015), based on a true story, chronicles the travails of Hugh Glass, a fur trapper (Leonardo DiCaprio) whose companions murder his son and leave him for dead following an attack by a bear.',
      posterURL  : 'https://i1.wp.com/diacritik.com/wp-content/uploads/2016/02/the-revenant-2015-poster1.jpg?ssl=1',
      rating    : '4',
      videoURL : 'https://www.youtube.com/embed/LoebZZ8K5N0'
    },
    {
      id : 3,
      title : 'Tanet',
      description : 'This is a science fiction-action-thriller film starring John David Washington, Robert Pattinson, Elizabeth Debicki, and Kenneth Branagh, among others. It\'s the story of a secret agent who learns to manipulate the flow of time to prevent an attack from the future that threatens to annihilate the present.',
      posterURL  : 'https://images-na.ssl-images-amazon.com/images/I/51acC5xSLZL._AC_.jpg',
      rating    : '3',
      videoURL  : 'https://www.youtube.com/embed/AZGcmvrTX9M'
    }
  ]

    

  return (
    <div className="container">
        <Switch>
            <Route  path='/' exact >
                <Home data = {data}/>
            </Route>
            <Route path = '/:movieId' >
                <Description data = {data}/>
            </Route>
        </Switch>
        
      </div>
  );
}

export default App;
