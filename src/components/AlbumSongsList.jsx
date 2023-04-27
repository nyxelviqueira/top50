import AlbumSong from "./AlbumSong";
import React, { useState, useRef } from "react";

import "./styles/albumSongList.css";

const AlbumSongsList = ({ songs }) => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const previousAudioRef = useRef(null);
  const handlePlay = (e, previewUrl) => {
    if (previousAudioRef.current && currentPlaying !== previewUrl) {
      previousAudioRef.current.pause();
    }
    setCurrentPlaying(previewUrl);
    previousAudioRef.current = e.target;
  };
  return (
    <>
      <ul className="album-song-list">
        {songs.map((song) => {
          const { trackId, trackName, previewUrl } = song;
          return (
            <li key={trackId}>
              <AlbumSong
                trackName={trackName}
                previewUrl={previewUrl}
                onPlay={(e) => handlePlay(e, previewUrl)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AlbumSongsList;
