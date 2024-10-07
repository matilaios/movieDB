import { Button, Container } from "react-bootstrap";
import MovieCard from "../Components/MovieCard";
import MoviesService from "../Services/MoviesService";
import { useEffect, useState } from "react";
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form'


const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(500);
    const [searchValue, setSearchValue]=useState('');

    const fetchMovies = async () => {
        try {
            const response = await MoviesService.getAllMovies(currentPage);
            // setMaxPage(response.data.total_pages);

            setMovies(response.data.results);
            
            setTimeout(() => {
                window.scrollTo(0, 0);
        
            },10)   

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchMovies();
    }, [currentPage])
    // 

    return <Container className="d-flex flex-column align-items-center mt-3">
    <h1>Page d'accueil</h1>

<div>
<Form>
      
        <Form.Label htmlFpr="search">Chercher un film</Form.Label>
        <Form.Control
        type="text"
        id="search"
        aria-describedby="searc"
        placeholder="ex:DeaPool"
        className="mb-3"
        value={searchValue}
        onChange={(e)=> {
            console.log(e);
        }}
        
        />
       <Button variant="primary" className="col-12 mb-3">Rechercher</Button>
     
    </Form>
</div>


    <div  className="d-flex justify-content-center flex-wrap gap-4 my-5">
        {movies.map((movie) => {
            return <div style={{ width: '23%' }}><MovieCard movieCard={movie} key={movie.id}></MovieCard>
</div>
            })}
        </div>
        <Pagination className="mt-5">
            {currentPage > 1 && <>
                <Pagination.First onClick={() => { setCurrentPage(1) }} />
                <Pagination.Prev onClick={() => { setCurrentPage(currentPage - 1) }} />
                <Pagination.Item onClick={() => { setCurrentPage(1) }}>{1}</Pagination.Item>

            </>}
            {currentPage - 5 > 0 && <>
                <Pagination.Ellipsis onClick={() => { setCurrentPage(currentPage - 5) }} />
            </>}

            {(currentPage != 2 && currentPage > 1) && <>
                <Pagination.Item onClick={() => { setCurrentPage(currentPage - 1) }}>{currentPage - 1}</Pagination.Item>
            </>}

            <Pagination.Item active>{currentPage}</Pagination.Item>


                {currentPage + 1 < maxPage && <> 
            <Pagination.Item onClick={() => { setCurrentPage(currentPage + 1) }}> {currentPage + 1}</Pagination.Item>
            </>}
            
           
{currentPage + 5 <=  maxPage &&<>
    <Pagination.Ellipsis onClick={() => { setCurrentPage(currentPage + 5) }} />
</>}

            {currentPage < maxPage && <>
                <Pagination.Item onClick={() => { setCurrentPage(maxPage) }}>{maxPage}</Pagination.Item>
                <Pagination.Next onClick={() => { setCurrentPage(currentPage + 1) }} />
                <Pagination.Last onClick={() => { setCurrentPage(maxPage) }} />
            </>}
        </Pagination>

    </Container>;
}

export default HomePage;