import { Link } from "react-router-dom";

const AlbumDetails = ({ album }) => {
  return album.tracks.data.map((elem, i) => (
    <div className="py-3 trackHover" key={`track${i}`}>
      <Link to={""} className="card-title trackHover text-white px-3">
        {elem.title}
      </Link>
      <small className="duration" style={{ color: "white" }}>
        {Math.floor(
          parseInt(elem.duration) / 60 // setting the duration minutes
        )}
        :
        {parseInt(elem.duration) % 60 < 10
          ? "0" + (parseInt(elem.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
          : parseInt(elem.duration) % 60}
      </small>
    </div>
  ));
};
export default AlbumDetails;
