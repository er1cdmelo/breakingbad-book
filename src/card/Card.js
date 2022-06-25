import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Card = ({ name, img, id, obj }) => {
  function favorite(card) {
    if (!localStorage.getItem("favoritos")) {
      localStorage.setItem("favoritos", {});
    } else {
      var favoritos = JSON.parse(localStorage.getItem("favoritos"));
      favoritos[name] = card;
      console.log(typeof favoritos);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
    setFavorito(true);
  }

  function favClick() {
    if (!localStorage.getItem("favoritos")) {
      localStorage.setItem("favoritos", "{}");
    } else {
      var favoritos = JSON.parse(localStorage.getItem("favoritos"));
      if (favoritos[name]) {
        delete favoritos[name];
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        setFavorito(false);
      } else favorite(obj);
      console.log("clcik");
    }
  }

  const [favorito, setFavorito] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("favoritos")) {
      var favoritados = JSON.parse(localStorage.getItem("favoritos"));
      if (favoritados[name]) {
        setFavorito(true)
      }
    }
  }, [favorito])
  

  return (
    <div className={styles.global}>
      <Link to={`/characters/${id}`}>
        <div className={styles.card_container}>
          <div className={styles.img_container}>
            <img src={img} alt="pht"></img>
          </div>
          <h3>{name}</h3>
        </div>
      </Link>
      <h4>
        {favorito ? (
          <AiFillStar onClick={favClick} />
        ) : (
          <AiOutlineStar onClick={favClick} />
        )}
      </h4>
    </div>
  );
};

export default Card;
