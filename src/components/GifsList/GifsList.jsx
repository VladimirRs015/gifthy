import React, { useContext, useState } from "react";

import GifCard from "../GifsCard/GifsCard";
import useFavs from "hooks/useFavs";
import { ctx as gifContext } from "contexts/gifsContext";
import "./styles.css";
import Modal from "components/AppModal/index";
import LoginForm from "components/Auth/LoginForm/index";

function GifsList() {
  const { gifsFromContext: gifs } = useContext(gifContext);
  const [modalState, setModalState] = useState(false);
  const { isFavorite, toggleFavorite } = useFavs();
  function handleLikeFail() {
    setModalState(true);
  }
  return (
    <div className="gifslist">
      {!gifs || gifs.length < 1 ? (
        <h3>We couldn't any gif </h3>
      ) : (
        gifs.map(({ id, title, images }) => {
          const isFav = isFavorite(id);
          return (
            <GifCard
              key={id}
              title={title}
              imagesrc={images.original.webp}
              id={id}
              isFav={isFav}
              onClick={() =>
                toggleFavorite({ id, isFav, onFail: handleLikeFail })
              }
            />
          );
        })
      )}
      <Modal
        isVisible={true}
        isActive={modalState}
        onClose={() => setModalState(false)}
      >
        <LoginForm />
      </Modal>
    </div>
  );
}

export default GifsList;
