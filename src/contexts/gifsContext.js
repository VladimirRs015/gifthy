import { createContext, useState } from "react";
// import { ctx as authContext } from "context/authContext";

const ctx = createContext({});
export default function GifsContext({ children }) {
  const [gifs, setGifs] = useState([]);
  const [favs, setFavs] = useState([]);

  return (
    <ctx.Provider
      value={{
        gifsFromContext: gifs,
        setGifsContext: setGifs,
        favsFromCtx: favs,
        setFavsFromCtx: setFavs,
      }}
    >
      {children}
    </ctx.Provider>
  );
}

export { ctx };
