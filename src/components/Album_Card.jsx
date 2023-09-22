import { Link } from "react-router-dom";

const AlbumCard = ({ elem }) => {
  return (
    <>
      <div class="col text-center" id={elem.id}>
        <Link to={`/album_page.html?id=${elem.album.id}`}>
          <img class="img-fluid" src={elem.album.cover_medium} alt="1" />
        </Link>
        <p>
          <Link to={`/album_page.html?id=${elem.album.id}`}>
            Album: "${elem.album.title.length < 16 ? `${elem.album.title}` : `${elem.album.title.substring(0, 16)}...`}"
          </Link>

          <Link to={`/artist_page.html?id=${elem.artist.id}`}> Artist: ${elem.artist.name}</Link>
        </p>
      </div>
    </>
  );
};
export default AlbumCard;
