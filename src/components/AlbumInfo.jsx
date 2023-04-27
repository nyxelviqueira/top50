import "./styles/albumInfo.css";

const AlbumInfo = ({ name, artistName, artwork }) => {
  return (
    <article className="album-info">
      <img src={artwork} alt={`${name} artwork`} />
      <h2>{artistName}</h2>
      <h3>{name}</h3>
    </article>
  );
};

export default AlbumInfo;
