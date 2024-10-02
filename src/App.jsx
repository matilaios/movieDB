
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './Pages/HomePage';
import GenresPage from './Pages/GenresPage';
import NavBar from './Components/NavBar';
import MovieDetailsPage from './Pages/MovieDetailsPage';
import GenreDetailsPage from './Pages/GenreDetailsPage';
import PeoplePage from './Pages/PeoplePage';
import PeopleDetailPage from './Pages/peopleDetailPage';

function App() {
  

  return <>
  
  <BrowserRouter>
  <NavBar></NavBar>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/Genres' element={<GenresPage/>}/>
    <Route path='/movie/:id' element={<MovieDetailsPage/>}/>
    <Route path='Genres/:id' element={<GenreDetailsPage/>}/>
    <Route path='/People' element={<PeoplePage/>}/>
    <Route path='/PeopleDetail/:id' element={<PeopleDetailPage/>}/>

  </Routes>

  </BrowserRouter>

  </>
    
    }


export default App;
