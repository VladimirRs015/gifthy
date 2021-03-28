import React, { useRef,useCallback } from "react";
import useObserver from "hooks/useObjserver";
import useGifs from "hooks/useGifs";
import debounce from "just-debounce";
import HomePage from "./page";

export default function Home() {
  const reference = useRef();

  const { isNeerScreen } = useObserver({
    externalRef: reference,
    once: false,
    distance: "100px",
  });

  const { isLoading, nextPage } = useGifs({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getNextPage = useCallback(debounce(nextPage, 400));

  if (isNeerScreen) !isLoading && getNextPage();

  return (
    <HomePage isLoading={isLoading} reference={reference} nextPage={getNextPage} />
  );
}
