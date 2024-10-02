import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const PeopleCard = ({ peopleCard}) => {
    const navigate=useNavigate();

    const navigateTo=()=>{
        navigate("/people/");
    
}

return <>
        <Card style={{ width: '25 rem' }} onClick={()=> {navigateTo(peopleCard)}}>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original"+peopleCard.profile_path} />
            <Card.Body>
                <Card.Title>{peopleCard.name}</Card.Title>
                <Button variant="primary">Voir détails</Button>
            </Card.Body>
        </Card>
    </>;
}
 
export default PeopleCard;