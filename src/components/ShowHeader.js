import {Nav, Navbar} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import ShowSearch from "./ShowSearch";

function ShowHeader({location, query, setQuery}) {
    const isSearch = location.pathname.startsWith("/search");

    return (
        <>
            <Navbar>
                <Navbar.Brand href="/">
                    <img
                        alt="logo"
                        src={"/mx3-logo.png"}
                        height="50"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/search">Search</Nav.Link>
                    </Nav>
                    {isSearch &&
                    <Nav className="me-auto">
                        <ShowSearch query={query} search={setQuery}/>
                    </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default withRouter(ShowHeader); // so location.pathname is available in ShowHeader()