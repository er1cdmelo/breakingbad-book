import styles from "./CharCard.module.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const CharCard = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data = data[0];
        console.log(data);
        setCharacter(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={styles.global_container}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.card_container}>
          <div className={styles.first_info}>
            <div className={styles.img_container}>
              <img src={character.img} />
            </div>
            <span>
              <span className={styles.label}>NAME</span>
              <br />
              {character.name}
            </span>
            <span>
              <span className={styles.label}>AKA </span>
              <br />
              {character.nickname}
            </span>
          </div>
          <div className={styles.other_info}>
            <span>
              <span className={styles.label}>STATUS </span>
              <br />
              {character.status}
            </span>
            <span>
              <span className={styles.label}>PLAYED BY </span>
              <br />
              {character.portrayed}
            </span>
            <span>
              <span className={styles.label}>OCCUPATION </span>
              <br />
              <ul>
                {character.occupation
                  ? character.occupation.map((occ) => <li>{occ}</li>)
                  : ""}
              </ul>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharCard;