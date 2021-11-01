import {Image, Nav} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import SearchBands from "./SearchBands";

function ShowHeader(props) {
    const { location } = props;

    const isSearch = (location.pathname === "/search");

    return (
        <>
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="home" href="/">
                        <Image src="mx3-logo.png" rounded />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="search" href="/search">Search</Nav.Link>
                </Nav.Item>
                {isSearch &&
                    <Nav.Item>
                        <SearchBands/>
                    </Nav.Item>
                }
            </Nav>
        </>
    );
}

export default withRouter(ShowHeader); // so location.pathname is available in ShowHeader()