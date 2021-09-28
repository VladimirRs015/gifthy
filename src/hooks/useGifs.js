import { useState, useEffect, useContext } from "react";
import { getGifs } from "services/getGifs";
import { ctx } from "contexts/gifsContext";
import debounce from "just-debounce";
let INITIAL_PAGE = 0;
// let lastPage = 0;
const AbortAllRequestsOfThisHook = new AbortController();

function useGifs({ keyword } = { keyword: "random" }) {
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const { gifsFromContext, setGifsContext } = useContext(ctx);
  const [isNextPageLoading, setNextPageLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const getGifsParams = {
    keyword,
    page: currentPage,
    limit: 10,
    signal: AbortAllRequestsOfThisHook.signal,
  }

  const nextPage = debounce(() => {
    // console.log(currentPage);
    getGifs({ ...getGifsParams, page: currentPage })
      .then((data) => {
        setNextPageLoading(true);
        if(data)
          setGifsContext([...gifsFromContext, ...data])
        setCurrentPage(currentPage + 1);
      })
      .finally(() => setNextPageLoading(false))
  }, 3000)

  useEffect(() => {
    setLoading(true);
    getGifs()
      .then((data) => {
        setLoading(true);
        data &&
          setGifsContext(
            data
          );
      })
      .catch((error) => {
        setErrorMessage(error);
      })
      .finally(() => setLoading(false));
    return () => AbortAllRequestsOfThisHook.abort();
  }, [keyword, currentPage, setGifsContext]);

  return {
    isLoading,
    gifs: gifsFromContext,
    isError: Boolean(errorMessage),
    errorMessage,
    nextPage,
    isNextPageLoading
  };
}

export default useGifs;
