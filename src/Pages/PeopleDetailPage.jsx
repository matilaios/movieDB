import PeopleService from "../Services/PeopleService";
import { useNavigate, useParams } from 'react-router-dom';
import PeopleCard from "../Components/PeopleCard";
import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import { Pagination } from "react-bootstrap";


const PeopleDetailPage =  () => {
    const {id} =  useParams();
    const [people, setPeople] = useState({});
    const [movie, setMovie]= useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(20);
    const navigate = useNavigate();
    const navigateTo=(genre)=>{
        navigate("/PeopleDetail/"+movie.id,{state : {"movie" : movie}});
    }
    //await promise promesse de réponse. le console log va attendre que le await soit terminé pour s'afficher
    //pour faire appel a une API, utiliser try and catch

const fetchPeopleByID = async () => {
try {const response = await PeopleService.getAllPeopleDetail(id, currentPage);
    console.log(response.data);
    setPeople(response.data)
} catch (error) {
    console.log(error);
}
}

//une fois la constante fetchpeople by id : on fait le useSate/setPeople

useEffect(() => {
    fetchPeopleByID();
   
}, [])


useEffect(()=>{
    fetchMovieByPeople();
},[currentPage])

const fetchMovieByPeople=async ()=>{
    try {const response = await PeopleService.getAllMovieByPeople(id, currentPage);
        console.log(response.data)
        setMovie(response.data.results)
        setMaxPage(response.data.total_pages);
        
    } catch (error) {
        console.log(error);
        
    }
}


    return <>

    
    <h1>Acteur : {people.name}</h1>
    <p className="d-flex justify-content-center">Date of birth : {people.birthday}</p>
    <div className="d-flex flex-column align-items-center">
    <img style={{ width: '23%' }} className="mt-3" src={"https://image.tmdb.org/t/p/original"+people.profile_path}/>

    </div>
    <div className="d-flex justify-content-center">  
     <p className="resume" >{people.biography}</p>     
    </div>
    
    <div  className="d-flex justify-content-center flex-wrap gap-4 my-5">
        {movie.map((movie) => {
            return <div style={{ width: '23%' }}><MovieCard movieCard={movie} key={movie.id}></MovieCard>
</div>     

})}
   </div>

   <Pagination className="d-flex justify-content-center mt-5">
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
 
export default PeopleDetailPage;