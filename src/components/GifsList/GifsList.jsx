import React, { useContext } from "react";

import GifCard from "../GifsCard/GifsCard";
import useFavs from "hooks/useFavs";
import { ctx as gifContext } from "contexts/gifsContext";
import "./styles.css";
import Modal from "components/AppModal/index";
import LoginForm from "components/Auth/LoginForm/index";
import { ctx as AppContext } from "contexts/AppContext";

function GifsList() {
  const { gifsFromContext: gifs } = useContext(gifContext);
  const { isAppModalActive, setAppModalState } = useContext(AppContext);

  // useEffect(() => {
  //   setMounted(true);
  //   return () => {
  //     setMounted(false);
  //   };
  // }, [setMounted]);

  const { isFavorite } = useFavs();

  return (
    <div className="gifslist">
      {!gifs || gifs.length < 1 ? (
        <h3>We couldn't any gif </h3>
      ) : (
        gifs.map(({ id, title, images }) => {
          return (
            <GifCard
              key={id}
              title={title}
              imagesrc={images.original.webp}
              id={id}
              isFav={isFavorite(id)}
            />
          );
        })
      )}
      <Modal
        isVisible={true}
        isActive={isAppModalActive}
        onClose={() => setAppModalState(false)}
      >
        <LoginForm />
      </Modal>
    </div>
  );
}

export default GifsList;
