const AlbumSong = ({ trackName, previewUrl, onPlay }) => {
  const handlePause = (e) => {
    e.target.currentTime = 0;
  };

  return (
    <div className="album-song-list-container">
      <h2>{trackName}</h2>
      <audio src={previewUrl} controls onPlay={onPlay} onPause={handlePause}>
        Tu navegador no soporta la etiqueta audio de HTML5
      </audio>
    </div>
  );
};

export default AlbumSong;
