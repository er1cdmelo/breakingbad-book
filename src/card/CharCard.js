import styles from "./CharCard.module.css";
import { AiFillCloseCircle } from "react-icons/ai"
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const CharCard = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [kills, setKills] = useState(0)

  useEffect(() => {
    setLoading(true);

    fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data = data[0];
        console.log(data);
        setCharacter(data);
        setLoading(false);
        killsSet(data.name)
      })
      .catch((err) => console.log(err));
  }, [id]);

  

  function killsSet (name) {
    let nameSplited = name.split(' ')
    if(name === 'Walter White Jr.') {nameSplited = 'Walter+White+Jr'}
    fetch(`https://www.breakingbadapi.com/api/death-count?name=${nameSplited[0]}`)
        .then(res => res.json())
        .then(data => {
          data = data[0]
          console.log(data)
          setKills(data.deathCount)
        })
        .catch(err => console.log(err))
  }

  return (
    <div className={styles.global_container}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.card_container}>
          <Link to='/'><h3><AiFillCloseCircle /></h3></Link>
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
              <ul>
                {character.occupation
                  ? character.occupation.map((occ) => <li>{occ}</li>)
                  : ""}
              </ul>
            </span>
            <span>
              <span className={styles.label}>KILLS </span>
              <h5 style={{color:'red', fontSize:'1.2em'}}>{kills}</h5>
            </span>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default CharCard;
