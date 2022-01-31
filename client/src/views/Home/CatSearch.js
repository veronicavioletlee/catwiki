import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

import '../../App.css';
import './Home.css';

const SearchBar = ({ searchQuery, setSearchQuery, setIsLoaded }) => {
    // TODO: Get writing of the search query to url history working
    // const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        if (searchQuery !== event.target.name.value) {
            setIsLoaded(false);
            setSearchQuery(event.target.name.value);
        }
        // history.push(`?s=${searchQuery}`);
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
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (searchQuery) {
            fetch(`/api/breeds/search?name=${searchQuery}`)
                .then((res) => res.json())
                .then((data) => {
                        setBreedResults(data);
                        setIsLoaded(true);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    })
        }
    }, [searchQuery]);

    return (
        <div>
            <div>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setIsLoaded={setIsLoaded} />
            </div>
            <div className="CatSearch">
                    { error && <p>Something went wrong. Please try again.</p> }
                    { searchQuery && isLoaded ? (
                        <ul>
                            Showing {breedResults.length} results for search "{searchQuery}"
                            {breedResults.map(breed => (
                                    <li key={breed.id}>
                                        <Link to={`/breeds/${breed.id}`}>{breed.name}</Link>
                                    </li>
                                )
                            )}
                        </ul>
                    ) : searchQuery && <p>Searching..</p>
                    }
            </div>
        </div>
    );
}

export default CatSearch;
