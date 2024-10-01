import { Await, useParams } from "react-router-dom";
import { Button, Container, Pagination } from "react-bootstrap";
import GenreService from "../Services/GenreService";
import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";


const GenreDetailsPage = () => {
    const {id}=useParams();

    const [movies, setMovies]=useState({})
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(500);

    const fetchGetMoviesByGenreID=async ()=>{  
       try{
        const response=await GenreService.getMoviesByGenreID(1, id)
    console.log(response)
    
       } catch (error){
        console.log(error)
       }
    }

    useEffect(()=>{
        fetchGetMoviesByGenreID();
    }, [currentPage])
        
  
    return <>
    
    <h1>movies Genre {id}</h1>
    <p>{id.genres}</p>

    <div className="d-flex justify-content-center gap-3">
            {id.genres && id.genres.map((id) => {
                
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

    
    </>;
}
 
export default GenreDetailsPage;