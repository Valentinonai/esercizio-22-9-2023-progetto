import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import Player from "./components/Player";
import Topbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col xs={2}>
              <Topbar />
            </Col>
            <Col xs={12} md={9} className="offset-md-3 mainPage">
              <Routes>
                <Route path="/" />
                <Route path="/artist_page" />
                <Route path="album_page" />
              </Routes>
              <Player />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
