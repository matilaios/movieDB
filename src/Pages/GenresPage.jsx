import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import GenreService from "../Services/GenreService";


const GenresPage = () => {
    const [genres, setGenres] = useState([]);

    const fetchGenres = async () => {
        try {
            const response = await GenreService.getAllGenres();
            setGenres(response.data.genres);

        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchGenres()
    }, [])

    return <Container className="d-flex flex-column align-items-center">
        <h1>Genres</h1>
        <div className="d-flex justify-content-center flex-wrap gap-3">
            {genres.map((genre) => {
                return <Button variant="primary" size="lg" key={genre.id}>{genre.name}</Button>
            })}
        </div>
    </Container>;

}
export default GenresPage;



