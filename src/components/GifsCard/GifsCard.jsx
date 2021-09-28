import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Image, Card, CardMedia } from "./styles";
import { useLocation } from "wouter";
import Fav from "components/FavsButton/Favs";
import styles from "./styles.module.css";

function GifCard({ imagesrc, title, id, isFav, onClick }) {
  const [, pushLocation] = useLocation();

  return (
    <Card>
      <CardMedia>
        <Image
          className={styles.card_images}
          loading="lazy"
          src={imagesrc}
          alt={title}
          onClick={() => pushLocation(`/gifs/single/${id}`)}
        />
      </CardMedia>
      <Fav onClick={onClick}>
        {isFav ? <FaHeart size="28" /> : <FaRegHeart size="28" />}
      </Fav>
    </Card>
  );
}

export default React.memo(GifCard, (prevProps, nextProps) => {
  return false;
});
