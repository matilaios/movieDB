import { useEffect, useState } from "react";
import PeopleService from "../Services/PeopleService";
import { Await } from "react-router-dom";
import PeopleCard from "../Components/PeopleCard";


const PeoplePage = () => {
    // const {id} = useParams();
    const [people,setPeople] = useState([]);
    // console.log (people)

    const fetchPeople = async ()=>{
        try{
            const response = await PeopleService.getAllPeople();
            // console.log(response.data.results)
            setPeople(response.data.results)
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPeople();
    }, [])


    return <>
    <h1>People</h1>
    <div  className="d-flex justify-content-center flex-wrap gap-4 my-5">
        {people.map((people) => {
            return <div style={{ width: '23%' }}><PeopleCard peopleCard={people} key={people}></PeopleCard>
</div>
            })}
        </div>

    </>
}
 
export default PeoplePage;