import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import SearchBands from "./components/SearchBands";
import ShowProfile from "./components/ShowProfile";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";

function App() {
    return (
        <Container>
            <Router>
                <Route exact path="/" render={() => {
                    return ( <Redirect to="/search" /> )
                }}/>
                <Route exact path="/search" component={SearchBands}/>
                <Route exact path="/profile/:name" component={ShowProfile}/>
            </Router>
        </Container>
    );
}

export default App;
