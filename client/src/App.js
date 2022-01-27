import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from "./logo.svg";
import './App.css';
import Home from './views/Home/Home';
import CatDetails from './views/CatDetails/CatDetails';
import CatNav from "./components/CatNav";

function App() {
    const [breeds, setBreeds] = useState(null);
    const [error, setError] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);

    let getBreeds = () => {
        fetch('/api/breeds')
            .then((res) => res.json())
            .then((data) => {
                    setBreeds(data);
                    // setIsLoading(false);
                },
                (error) => {
                    // setIsLoading(false);
                    setError(error);
                })
    }

    useEffect(() => {
        // setIsLoading(true);
        getBreeds();
    }, []);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/breeds/:breedId">
                        <CatNav/>
                        <CatDetails error={error} breeds={breeds}/>
                    </Route>
                    <Route path="/">
                        <CatNav/>
                        <Home />
                    </Route>
                </Switch>
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                {/*<p>{!data ? "Loading..." : data}</p>*/}

            </div>
        </Router>
    );
}

export default App;
