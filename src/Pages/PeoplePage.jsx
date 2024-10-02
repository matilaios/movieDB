import { useEffect, useState } from "react";
import PeopleService from "../Services/PeopleService";
import { Await } from "react-router-dom";
import PeopleCard from "../Components/PeopleCard";
import Pagination from 'react-bootstrap/Pagination';


const PeoplePage = () => {
    // const {id} = useParams();
    const [people,setPeople] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(500);
    // console.log (people)

    const fetchPeople = async ()=>{
        try{
            const response = await PeopleService.getAllPeople(currentPage);
            // console.log(response.data.results)
            setPeople(response.data.results)

            setTimeout(() => {
                window.scrollTo(0, 0);
        
            },10)
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPeople();
    }, [currentPage])


    return <>
    <h1>People</h1>
    <div  className="d-flex justify-content-center flex-wrap gap-4 my-5">
        {people.map((people) => {
            return <div style={{ width: '23%' }}><PeopleCard peopleCard={people} key={people}></PeopleCard>
</div>
            })}
        </div>
        <Pagination className=" d-flex justify-content-center mt-5">
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

    </>
}
 
export default PeoplePage;