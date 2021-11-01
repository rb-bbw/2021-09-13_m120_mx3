import {Image, Nav} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import ShowSearch from "./ShowSearch";

function ShowHeader({location, query, setQuery}) {
    const isSearch = location.pathname.startsWith("/search");

    return (
        <>
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="home" href="/">
                        <Image src="/mx3-logo.png" rounded alt="logo"/>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="search" href="/search">Search</Nav.Link>
                </Nav.Item>
                {isSearch &&
                    <Nav.Item>
                        <ShowSearch query={query} search={setQuery} />
                    </Nav.Item>
                }
            </Nav>
        </>
    );
}

export default withRouter(ShowHeader); // so location.pathname is available in ShowHeader()