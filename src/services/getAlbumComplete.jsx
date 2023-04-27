const getAlbumComplete = async (id) => {
  /*Con all origin nos aseguramos que no va a haber problemas al retornar la api en json*/
  const res = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      /**Indicamos con entity que queremos la entidad de canciones */
      `https://itunes.apple.com/lookup?id=${id}&entity=song`
    )}`
  );

  if (!res.ok) {
    throw new Error("No se han podido cargar el álbum. Prueba más tarde.");
  }

  const body = await res.json();
  /**En la primera variable hacemos destructuring de info para coger lo que nos interesa,
   * se guarda en la variable info y el resto del array en la songs, ya que la primera posición del array
   * es información sobre el álbum
   */

  console.log(body);

  const data = JSON.parse(body.contents).results;

  if (!data || data.length === 0) {
    throw new Error(
      "No se han podido cargar los datos del álbum. Prueba más tarde."
    );
  }
  const [
    { collectionName: name, artistName, artworkUrl100: artwork },
    ...songs
  ] = JSON.parse(body.contents).results;

  return { info: { name, artistName, artwork }, songs };
};
export default getAlbumComplete;
