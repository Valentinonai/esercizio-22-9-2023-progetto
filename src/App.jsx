import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Player from "./components/Player";
import Topbar from "./components/Navbar";
import Home from "./components/Home";
import ArtistPage from "./components/Artist_Page";
import AlbumPage from "./components/Album_Page";

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
                <Route path="/" element={<Home />} />
                <Route path="/artist_page.html" element={<ArtistPage />} />
                <Route path="/album_page.html" element={<AlbumPage />} />
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
