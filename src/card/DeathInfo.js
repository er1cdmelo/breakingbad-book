import styles from "./DeathInfo.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const DeathInfo = () => {
  

  const { name } = useParams();
  const [death, setDeath] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://www.breakingbadapi.com/api/death?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        data = data[0];
        console.log(data);
        setDeath(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <div className={styles.global_container}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.card_container}>
          <Link to="/deaths">
            <h3>
              <AiFillCloseCircle />
            </h3>
          </Link>
          <div className={styles.first_info}>
            <span>
              <span className={styles.label}>TARGET</span>
              <br />
              {death.death}
            </span>
            <span>
              <span className={styles.label}>KILLED BY</span>
              <br />
              {death.responsible}
            </span>
            <span>
              <span className={styles.label}>EPISODE </span>
              <br />
              SEASON {death.season} EPISODE {death.episode}
            </span>
          </div>
          <div className={styles.other_info}>
            <span>
              <span className={styles.label}>CAUSE </span>
              <br />
              {death.cause}
            </span>
            <span>
              <span className={styles.label}>LAST WORDS </span>
              <br />
              {death.last_words ? death.last_words : 'UNKNOWN'}
            </span>
            <span>
              <span className={styles.label}>NUMBER OF DEATHS </span>
              <br />
              {death.number_of_deaths}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeathInfo;
