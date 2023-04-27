const getTopAlbums = async (id) => {
  /*Con all origin nos aseguramos que no va a haber problemas al retornar la api en json*/
  const res = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://rss.applemarketingtools.com/api/v2/es/music/most-played/50/albums.json"
    )}`
  );

  if (!res.ok) {
    throw new Error("No se han podido cargar los álbums. Prueba más tarde.");
  }

  const body = await res.json();

  const fetchedAlbums = JSON.parse(body.contents).feed.results;

  return fetchedAlbums;
};

export default getTopAlbums;
