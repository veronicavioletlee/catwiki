import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import logo from "./logo.svg";
import "./App.css";
import CatSearch from './catSearch/CatSearch';

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <>
            <header className="App-header">
                <Navbar bg="light">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="App-logo"
                                alt="logo"
                                // className="d-inline-block align-top"
                            />{' '}
                            CatWiki
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </header>
            <Router>
                <div className="App">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>{!data ? "Loading..." : data}</p>
                    <CatSearch/>
                </div>
            </Router>
        </>
    );
}

export default App;
