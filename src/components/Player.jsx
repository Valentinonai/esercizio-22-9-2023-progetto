import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import next from "../playerbuttons/Next.png";
import play from "../playerbuttons/Play.png";
import previus from "../playerbuttons/Previous.png";
import repeat from "../playerbuttons/Repeat.png";
import shuffle from "../playerbuttons/Shuffle.png";

const Player = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={10} className="offset-lg-2">
          <Row>
            <Col xs={6} md={4} lg={2} className="offset-3 offse-md-4 offset-lg-5 playerControls mt-1">
              <div className="d-flex justify-content-between">
                <Link style={{ textDecoration: "none" }} to={""}>
                  <img src={shuffle} alt="playerImg" />
                </Link>
                <Link style={{ textDecoration: "none" }} to={""}>
                  {" "}
                  <img src={previus} alt="playerImg" />
                </Link>
                <Link style={{ textDecoration: "none" }} to={""}>
                  {" "}
                  <img src={play} alt="playerImg" />
                </Link>
                <Link style={{ textDecoration: "none" }} to={""}>
                  {" "}
                  <img src={next} alt="playerImg" />
                </Link>
                <Link style={{ textDecoration: "none" }} to={""}>
                  {" "}
                  <img src={repeat} alt="playerImg" />
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6}>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Player;
