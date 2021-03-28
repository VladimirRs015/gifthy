import { useState, useEffect, useContext } from "react";
import { getGifs } from "services/getGifs";
import { ctx } from "contexts/gifsContext";
let INITIAL_PAGE = 0;
// let lastPage = 0;

function useGifs({ keyword } = { keyword: "random" }) {
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const { gifsFromContext, setGifsContext } = useContext(ctx);
  const [errorMessage, setErrorMessage] = useState("");

  function nextPage() {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  }

  useEffect(() => {
    const abortRequestController = new AbortController();
    setLoading(true);
    getGifs({
      keyword,
      page: currentPage,
      limit: 10,
      signal: abortRequestController.signal,
    })
      .then((data) => {
        setLoading(true);
        data &&
          setGifsContext(
            currentPage > 1 ? [...gifsFromContext, ...data] : data
          );

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error);
        setLoading(false);
      });
    // .finally(() => setLoading(false));
    return () => abortRequestController.abort();
  }, [keyword, currentPage, setGifsContext]);

  return {
    isLoading,
    gifs: gifsFromContext,
    isError: Boolean(errorMessage),
    errorMessage,
    nextPage,
  };
}

export default useGifs;
