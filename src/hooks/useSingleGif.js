import { useContext, useEffect, useState } from "react";
import { ctx } from "contexts/gifsContext";
import getSingleGifs from "services/getSingleGif";

function useSingleGif(id) {
  const [gif, setGif] = useState({});
  const [isTheresAnError, setTheresAnError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { gifsFromContext } = useContext(ctx);

  useEffect(() => {
    let foundGif = gifsFromContext.find((element) => {
      return element.id === id;
    });

    if (foundGif) {
      setGif(foundGif);
      setIsLoading(false);
    } else {
      getSingleGifs(id)
        .then((res) => {
          setGif(res);
        })
        .catch((error) => {
          setTheresAnError(true);
          setErrorMessage(error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [id, gifsFromContext]);

  return {
    gif,
    isTheresAnError,
    errorMessage,
    isLoading,
  };
}

export default useSingleGif;
