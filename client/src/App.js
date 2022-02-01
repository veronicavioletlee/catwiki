import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import CatDetailsPage from './views/CatDetails/CatDetailsPage';
import HomePage from './views/Home/HomePage';
import CatNav from "./components/CatNav";

function App() {

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/breeds/:breedId">
                        <CatNav/>
                        <CatDetailsPage />
                    </Route>
                    <Route path="/">
                        <CatNav/>
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
