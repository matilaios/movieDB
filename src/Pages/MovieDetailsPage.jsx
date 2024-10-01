import { Await, useParams } from "react-router-dom";
import MoviesService from "../Services/MoviesService";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const MovieDetailsPage = () => {
//récupérer les parametres dynamiques d'une URL
const{id}=useParams();
const [movie, setMovie]=useState({});

const fetchMoviebyID=async ()=>{
    try{
        const response = await MoviesService.getMovieByID(id);
        console.log(response.data);

        setMovie(response.data);
    }catch(error){
        console.log(error);
    }
}
useEffect(()=>{
    fetchMoviebyID();
}, [])
console.log(movie)
    return (<Container className="d-flex flex-column align-items-center gap-3">
    <h1>{movie.title}</h1>
    <p>Budget : {movie.budget}$</p>
    <p>Pays d'origine : {movie.origin_country}</p>
    <div className="d-flex flex-row gap-3">
    {movie.genres && movie.genres.map((genre)=>{
        return <Button className="btn-perso" key={genre.id} size="lg">{genre.name}</Button>
    })}
    </div>
    <img src={"https://image.tmdb.org/t/p/original"+movie.poster_path}/>
    </Container>
    )
}
 
export default MovieDetailsPage;