const AlbumArt = ({ album }) => {
  return (
    <>
      <img src={album.cover} class="card-img img-fluid" alt="Album" />
      <div class="mt-4 text-center">
        <p class="album-title">{album.title}</p>
      </div>
      <div class="text-center">
        <p class="artist-name">{album.artist.name}</p>
      </div>
      <div class="mt-4 text-center">
        <button id="btnPlay" class="btn btn-success" type="button">
          Play
        </button>
      </div>
    </>
  );
};
export default AlbumArt;
