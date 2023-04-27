import ErrorMessage from "../components/errorMessage";
import LoadingIcon from "../components/LoadingIcon";

import { useParams } from "react-router-dom";
import useAlbumComplete from "../hooks/useAlbumComplete";
import AlbumInfo from "../components/AlbumInfo";
import { Link } from "react-router-dom";
import AlbumSongsList from "../components/AlbumSongsList";

import "./styles/albumComplete.css";

const AlbumComplete = () => {
  const { id } = useParams();
  const { album, loading, error } = useAlbumComplete(id);
  console.log(album);

  if (loading) {
    return <LoadingIcon />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }

  /**Hacemos destructuring de album.info para traer los valores y ahorrar código.
   */
  const {
    info: { name, artistName, artwork },
    songs,
  } = album;

  return (
    <>
      <div className="album-complete">
        {name && (
          <AlbumInfo name={name} artistName={artistName} artwork={artwork} />
        )}
        {songs?.length > 0 ? (
          <AlbumSongsList songs={songs} />
        ) : (
          <p>No hay canciones disponibles</p>
        )}
        <Link to="/">
          <span>Presiona para volver</span>
        </Link>
      </div>
    </>
  );
};

export default AlbumComplete;
