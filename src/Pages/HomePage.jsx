import { Container } from "react-bootstrap";
import MovieCard from "../Components/MovieCard";
import MoviesService from "../Services/MoviesService";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [movies, setMovies] = useState([]);


    const fetchMovies = async () => {
        try {
            const response = await MoviesService.getAllMovies();
            setMovies(response.data.results);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchMovies();
    }, [])
    // 

    return <Container className="d-flex flex-column align-items-center ">
        <h1>Page d'accueil</h1>
        <div className="d-flex flex-column justify-content-center col-4 gap-5">

        {movies.map((movie) => {
            return <MovieCard  movieCard={movie} key={movie.id}/>

        })}
</div>
    
    </Container>;
}

export default HomePage;