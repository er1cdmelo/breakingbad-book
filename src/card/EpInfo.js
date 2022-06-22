import styles from "./EpInfo.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const EpInfo = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://www.breakingbadapi.com/api/episodes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data = data[0];
        console.log(data);
        setEpisode(data);
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
          <Link to="/episodes">
            <h3>
              <AiFillCloseCircle />
            </h3>
          </Link>
          <div className={styles.first_info}>
            <div className={styles.img_container}>
              <img
                src={
                  episode.series === "Breaking Bad"
                    ? "https://www.themoviedb.org/t/p/original/9PVfHEBXFeCBGvy4NVQLwh43iDt.jpg"
                    : "https://www.themoviedb.org/t/p/original/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg"
                }
              />
            </div>
            <span>
              <span className={styles.label}>TITLE</span>
              <br />
              {episode.title}
            </span>
            <span>
              <span className={styles.label}>EPISODE </span>
              <br />
              SEASON {episode.season} EPISODE {episode.episode}
            </span>
          </div>
          <div className={styles.other_info}>
            <span>
              <span className={styles.label}>DATE </span>
              <br />
              {episode.air_date}
            </span>
            <span>
              <span className={styles.label}>CHARACTERS </span>
              <br />
              <ul>
                {episode.characters
                  ? episode.characters.map((cha) => <li>{cha}</li>)
                  : ""}
              </ul>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EpInfo;
