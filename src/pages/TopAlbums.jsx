import React, { useEffect } from "react";
import ErrorMessage from "../components/errorMessage";
import LoadingIcon from "../components/LoadingIcon";
import AlbumInfo from "../components/AlbumInfo";
import useTopAlbums from "../hooks/useTopAlbums";
import { Link } from "react-router-dom";
import "./styles/topAlbums.css";
import AOS from "aos";
import "aos/dist/aos.css";

const TopAlbums = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, startEvent: "DOMContentLoaded" });
  }, []);
  const { albums, loading, error } = useTopAlbums();

  if (loading) {
    return <LoadingIcon />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <ul className="album-list">
      {albums.map((album) => {
        /**Propiedad del objeto = artworkUrl100; variable como le llamo yo = artwork */
        const { id, name, artistName, artworkUrl100: artwork } = album;
        /**Pintamos cada álbum como un li */
        /**Cada vez que hacemos un map en React, tenemos que hacer una key a cada elemento que debe ser un identificador único
         * En este caso ponemos el id del álbum
         */
        return (
          <li
            key={id}
            className="album-top"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            {/**Pasamos por props cada elemento */}
            <Link to={`/album/${id}`}>
              <AlbumInfo
                name={name}
                artistName={artistName}
                artwork={artwork}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TopAlbums;
