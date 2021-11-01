import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import ShowBands from "./components/ShowBands";
import ShowProfile from "./components/ShowProfile";
import ShowHeader from "./components/ShowHeader";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useState} from "react";

function App() {
    const [searchQuery, setSearchQuery] = useState()

    return (
        <Container>
            <Router>
                <ShowHeader query={searchQuery} setQuery={setSearchQuery}/>
                <Route exact path="/search" component={
                    () => <ShowBands query={searchQuery} setQuery={setSearchQuery}/>
                }/>
                <Route exact path="/profile/:name" component={ShowProfile}/>
            </Router>
        </Container>
    );
}

export default App;
