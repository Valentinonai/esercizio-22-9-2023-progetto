import { Col, Row } from "react-bootstrap";
import MainLinks from "./MainLinks";

const ArtistPage = () => {
  return (
    <>
      <MainLinks />
      <Row>
        <Col xs={12} md={10} lg={10} className="mt-5">
          {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
          <h2 class="titleMain"></h2>
          <div id="followers"></div>
          <div class="d-flex justify-content-center" id="button-container">
            <button class="btn btn-success mr-2 mainButton d-none" id="playButton">
              PLAY
            </button>
            <button class="btn btn-outline-light mainButton d-none" id="followButton">
              FOLLOW
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10} md={10} lg={10} className="offset-1 p-0">
          <div class="mt-4 d-flex justify-content-start">
            <h2 class="text-white font-weight-bold">Tracks</h2>
          </div>
          <div class="pt-5 mb-5">
            <div class="row" id="apiLoaded"></div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default ArtistPage;
