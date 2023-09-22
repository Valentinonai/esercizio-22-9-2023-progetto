import { useDispatch, useSelector } from "react-redux";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { removeFav } from "../redux/actions";

const Favs = () => {
  const fav = useSelector((state) => state.favourites.songs);
  const dispatch = useDispatch();
  return (
    <Container style={{ marginBottom: "100px" }}>
      {console.log(fav)}
      <ListGroup>
        {fav.map((elem, i) => (
          <>
            <ListGroup.Item key={`fav${i}`}>
              <Row>
                <Col xs={3}>
                  <div style={{ overflow: "hidden" }}>
                    <img src={elem.albumCover} alt="albumCover" width="100%" />
                  </div>
                </Col>
                <Col xs={8}>
                  <h4>{elem.songTitle}</h4>
                </Col>
                <Col xs={1}>
                  <div
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      dispatch(removeFav(elem.songId));
                    }}
                  >
                    <i class="bi bi-trash"></i>
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
          </>
        ))}
      </ListGroup>
    </Container>
  );
};
export default Favs;
