import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.svg";
import React from "react";

const CatNav = () => {

    return (
        <header className="App-header">
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="/">
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
    )
}

export default CatNav;