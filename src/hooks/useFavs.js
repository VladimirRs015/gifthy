import { useState, useEffect, useContext } from "react";
import { getFavs } from "../services/getFavs";
import { ctx as gifsContext } from "contexts/gifsContext";
import { ctx as authContext } from "contexts/authContext";

import { addToFav, removeFromFavs } from "services/getFavs";

function useFavs() {
  const { favsFromCtx, setFavsFromCtx } = useContext(gifsContext);
  const { jwt, isLogged } = useContext(authContext);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    if (isLogged)
      getFavs({ jwt })
        .then((data) => {
          setLoading(true);
          setFavsFromCtx(data);
        })
        .catch((error) => {
          setErrorMessage(error);
        })
        .finally(() => setLoading(false));
  }, [jwt, isLogged, setFavsFromCtx]);

  const isFavorite = (id) => {
    return !errorMessage && favsFromCtx.includes(id);
  };

  const toggleFavorite = ({ id, isFav }) => {
    if (isLogged) {
      isFav
        ? removeFromFavs({ id, jwt })
            .then(({ favs }) => setFavsFromCtx(favs))
            .catch((error) => setErrorMessage(error))
        : addToFav({ id, jwt })
            .then(({ favs }) => setFavsFromCtx(favs))
            .catch((error) => setErrorMessage(error));
    } else alert("show modal");
  };

  return {
    isLoading,
    favs: favsFromCtx,
    toggleFavorite,
    isFavorite,
    isError: Boolean(errorMessage),
    errorMessage,
  };
}

export default useFavs;
