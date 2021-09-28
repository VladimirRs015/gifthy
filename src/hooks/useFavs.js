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
    const AbortAllRequestController = new AbortController()
    const signal = AbortAllRequestController.signal
    setLoading(true);
    if (isLogged)
      getFavs({ jwt, signal })
        .then((data) => {
          setLoading(true);
          setFavsFromCtx(data);
        })
        .catch((error) => {
          setErrorMessage(error);
        })
        .finally(() => setLoading(false));
    return () => AbortAllRequestController.abort()
  }, [jwt, isLogged, setFavsFromCtx]);

  const isFavorite = (id) => {
    // return !errorMessage && favsFromCtx.includes(id);
    // console.log(favsFromCtx)
    return false
  };

  const toggleFavorite = ({ id, isFav , onFail}) => {
    if (isLogged) {
      isFav
        ? removeFromFavs({ id, jwt })
          .then(({ favs }) => setFavsFromCtx(favs))
          .catch((error) => setErrorMessage(error))
        : addToFav({ id, jwt })
          .then(({ favs }) => setFavsFromCtx(favs))
          .catch((error) => setErrorMessage(error));
    } 
    else onFail()
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
