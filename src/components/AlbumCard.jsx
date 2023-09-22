import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectSong } from "../redux/actions";

const AlbumSingleCard = ({ songInfo }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Link to={`/album_page.html?id=${songInfo.album.id}`}>
        <img
          className="img-fluid"
          src={
            songInfo.album.cover_medium // creating the album image anchor
          }
          alt="1"
        />
      </Link>
      <p>
        <Link
          to={""}
          onClick={() => {
            dispatch(selectSong(songInfo.title, songInfo.album.title, songInfo.album.cover_medium));
          }}
        >
          Track: "
          {
            songInfo.title.length < 16 ? `${songInfo.title}` : `${songInfo.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
          }
          "
        </Link>
        <Link to={`/album_page.html?id=${songInfo.album.id}`}>
          Album: "
          {
            songInfo.album.title.length < 16 ? `${songInfo.album.title}` : `${songInfo.album.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
          }
          "
        </Link>
      </p>
    </>
  );
};
export default AlbumSingleCard;
