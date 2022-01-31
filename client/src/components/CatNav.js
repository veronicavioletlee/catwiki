import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.svg";

const CatNav = () => {

    return (
        <header className="App-header">
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>
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
                        </Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}

export default CatNav;