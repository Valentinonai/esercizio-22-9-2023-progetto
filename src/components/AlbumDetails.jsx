import { Link, useSearchParams } from "react-router-dom";
import { addFav, addLike, removeFav, removeLike, selectSong } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const AlbumDetails = ({ album }) => {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.Like.songs);
  const fav = useSelector((state) => state.favourites.songs);
  return (
    album &&
    album.tracks.data.map((elem, i) => (
      <div className="py-3 trackHover d-flex" key={`track${i}`}>
        {likes.find((x) => x === elem.id) ? (
          <div
            onClick={() => {
              dispatch(removeLike(elem.id));
            }}
            style={{ color: "red" }}
          >
            <i class="bi bi-heart-fill"></i>{" "}
          </div>
        ) : (
          <div
            onClick={() => {
              dispatch(addLike(elem.id));
            }}
            style={{ color: "white" }}
          >
            <i class="bi bi-heart"></i>
          </div>
        )}
        <Link
          to={""}
          className="card-title trackHover text-white px-3"
          onClick={() => {
            dispatch(selectSong(elem.title, elem.album.title, elem.album.cover_medium));
          }}
        >
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

        <div className="ms-3">
          {fav.find((x) => x.songId === elem.id) ? (
            <div
              style={{ color: "white" }}
              onClick={() => {
                dispatch(removeFav(elem.id));
              }}
            >
              {" "}
              <i class="bi bi-dash-lg"></i>
            </div>
          ) : (
            <div
              style={{ color: "white" }}
              onClick={() => {
                dispatch(addFav(elem.title, elem.id, elem.album.cover_medium));
              }}
            >
              {" "}
              <i class="bi bi-plus-lg"></i>
            </div>
          )}
        </div>
      </div>
    ))
  );
};
export default AlbumDetails;
