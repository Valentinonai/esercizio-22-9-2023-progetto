import { Col, Row } from "react-bootstrap";
import MainLinks from "./MainLinks";

const AlbumPage = () => {
  return (
    <>
      <MainLinks />
      <Row>
        <Col md={3} className="pt-5 text-center" id="img-container"></Col>
        <Col md={8} className="p-5">
          <Row>
            <Col md={10} className="mb-5" id="trackList"></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default AlbumPage;
