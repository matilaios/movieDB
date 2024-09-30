
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './Pages/HomePage';
import GenresPage from './Pages/GenresPage';
import NavBar from './Components/NavBar';

function App() {
  

  return <>
  
  <BrowserRouter>
  <NavBar></NavBar>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/Genres' element={<GenresPage/>}/>
    

  </Routes>

  </BrowserRouter>

  </>
    
    }


export default App;
