import {useEffect, useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';

import '../../App.css';
import './Home.css';
import {CatService} from '../../services/catService';

const SearchBar = ({searchQuery, setSearchQuery, setIsLoading}) => {
    // TODO: Get writing of the search query to url history working

    const handleSubmit = event => {
        event.preventDefault();
        if (searchQuery !== event.target.name.value) {
            setIsLoading(true);
            setSearchQuery(event.target.name.value);
        }
        event.target.name.value = null;
    };

    return (
        <form
            className="search-bar"
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <input
                className="form-control form-control-sm ml-3 w-25"
                type="text"
                id="breed-search"
                placeholder="Search cat breeds"
                name="name"
            />
            <button type="submit">Search</button>
        </form>
    )
}

const CatSearch = () => {

    const [breedResults, setBreedResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    let sortedBreedResults = breedResults.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });

    useEffect(() => {
        if (searchQuery) {
            CatService.searchBreeds(searchQuery)
                .then((data) => {
                        setBreedResults(data);
                        setIsLoading(false);
                    },
                    (error) => {
                        setError(error);
                        setIsLoading(false);
                    })
        }
    }, [searchQuery]);

    return (
        <Container fluid height="100vh">
            <Row className="search-bar">
                <Col>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setIsLoading={setIsLoading}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="cat-search">
                        {error && <p>Something went wrong. Please try again.</p>}
                        {searchQuery && !isLoading ? (
                            <div className="cat-search-results">
                                Showing {breedResults.length} {breedResults.length === 1 ? 'result' : 'results'} for
                                search "{searchQuery}"
                                <ListGroup>
                                    <div className="cat-search-results-list">
                                        {sortedBreedResults.map(breed => (
                                                <ListGroupItem key={breed.id}>
                                                    <Link to={`/breeds/${breed.id}`}>{breed.name}</Link>
                                                </ListGroupItem>
                                            )
                                        )}
                                    </div>
                                </ListGroup>
                            </div>
                        ) : searchQuery && <p>Searching..</p>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CatSearch;
