import React, { useContext } from "react";
import { useLocation } from "wouter";
import Favs from "components/FavsButton/Favs";
import styles from "./styles.module.css";
import useFavs from "hooks/useFavs";


import { ctx as appContext } from "contexts/AppContext";
import { ctx as authContext } from "contexts/authContext";

function GifCard({ imagesrc, title, id, isFav }) {
  const { setAppModalState } = useContext(appContext);
  const { isLogged } = useContext(authContext);

  const { toggleFavorite } = useFavs();

  const [, pushLocation] = useLocation();

  return (
    <div className={styles.card}>
      <div className={styles.card_media}>
        <img
          className={styles.card_images}
          lazy="true"
          // src={imagesrc}
          alt={title}
          onClick={() => pushLocation(`/gifs/single/${id}`)}
        />
      </div>
      <Favs
        isFav={isFav}
        onClick={() => {
          if (!isLogged) return setAppModalState(true);
          toggleFavorite({
            id,
            isFav,
          });
        }}
      />
    </div>
  );
}

export default React.memo(GifCard, (prevProps, nextProps) => {
  return prevProps.isFav !== nextProps.isFav;
});
