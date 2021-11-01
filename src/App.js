import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import ShowBands from "./components/ShowBands";
import ShowProfile from "./components/ShowProfile";
import Header from "./components/ShowHeader";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
        <Container>
            <Router>
                <Header/>
                <Route exact path="/search" component={ShowBands}/>
                <Route exact path="/profile/:name" component={ShowProfile}/>
            </Router>
        </Container>
    );
}

export default App;
