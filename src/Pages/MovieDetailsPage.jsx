import { Await, useParams } from "react-router-dom";
import MoviesService from "../Services/MoviesService";
import { useEffect } from "react";

const MovieDetailsPage = () => {
//récupérer les parametres dynamiques d'une URL
const{id}=useParams();

const fetchMoviebyID=async ()=>{
    try{
        const response = await MoviesService.getMovieByID(id);
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
useEffect(()=>{
    fetchMoviebyID();
}, [])

    return <>
    <h1>Détail page {id}</h1>
    
    </>;
}
 
export default MovieDetailsPage;