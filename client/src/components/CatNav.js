import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.svg";

const CatNav = () => {

    return (
            <Navbar className="Navbar" bg="light" expand="lg">
                <Navbar.Brand>
                    <Link to="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="App-logo"
                            alt="logo"
                        />{' '}
                        CatWiki
                    </Link>
                </Navbar.Brand>
            </Navbar>
    )
}

export default CatNav;