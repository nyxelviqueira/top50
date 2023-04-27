import { useEffect, useState } from "react";
import getAlbumComplete from "../services/getAlbumComplete";

const useAlbumComplete = (id) => {
  /**Es recomendable empezar el estado con el valor que vamos a emplear en el futuro. Ejemplo ->
   * {} si vamos a empezar con un objeto
   * [] si vamos a empezar con un array
   * "" si vamos a empezar con un string
   * Por eso el useState lo empiezo con {}, empezamos con un objeto vacío en info y [] para empezar con array vacío en songs
   */
  const [album, setAlbum] = useState({ info: {}, songs: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    /**Recibe el id del álbum del cual quiere descargar las canciones */
    const fetchAlbum = async () => {
      try {
        setLoading(true);

        const fetchedAlbum = await getAlbumComplete(id);

        setAlbum(fetchedAlbum);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAlbum();
  }, [id]);

  return { album, loading, error };
};
export default useAlbumComplete;
