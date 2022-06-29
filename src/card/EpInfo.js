import styles from "./EpInfo.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const EpInfo = () => {
  const posters = {
    brba: [
      "https://m.media-amazon.com/images/M/MV5BMTk0MDAxNTIwMV5BMl5BanBnXkFtZTcwMDE2MzQ1MQ@@._V1_FMjpg_UX450_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMGUyM2I3NTQtYjc5YS00ZmJjLTg2YjUtYmUyMTM1MDIxOTE0XkEyXkFqcGdeQXVyMTA3MzQ4MTcw._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTM3MDc3MjA1OF5BMl5BanBnXkFtZTcwMjY1NDAyMw@@._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjY1Mzc5YjgtMTEyNS00ZDU3LWE3MWYtYWNjNWExZDY2YzBkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMDIwMGZkZWEtMGE4ZC00M2NhLTg5ZDMtM2E4YWY3ZDU5OGFmXkEyXkFqcGdeQXVyMTEwOTA4NTg4._V1_.jpg",
    ],
    bcs: [
      "https://m.media-amazon.com/images/M/MV5BMTAxOTQ0MjUzMzJeQTJeQWpwZ15BbWU4MDY0NTAxNzMx._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BNjk5MjYwNjg4NV5BMl5BanBnXkFtZTgwNzAzMzc5NzE@._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BODY2ODU0MTY5Nl5BMl5BanBnXkFtZTgwNjQ0OTc2MTI@._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BNjIxMDE5NDk1OF5BMl5BanBnXkFtZTgwMzQwNDM4NTM@._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMGE4YzY4NGEtOWYyYS00ZDk2LWExMmMtZDIyODhiMmNlMGE0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTMxOGM0NzItM2E0OS00YWYzLWEzNzUtODUzZTBjM2I4MTZkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
    ],
  };

  const clicavel = {
    color: 'blue'
  };

  const { id } = useParams();
  const [episode, setEpisode] = useState([]);
  const [loading, setLoading] = useState(false);
  const [elementos, setElementos] = useState([]);
  const [permElements, setPermElements] = useState(true)

  const getCharacterLink = (char) => {
    console.log("GETCHARACTERLINK");
    const nameSplit = char.split(" ");
    let nameFormated = nameSplit[0];
    if(nameSplit[0] === 'Hank') nameFormated = 'Henry'
    for (var i = 0; i < nameSplit.length; i++) {
      if (i !== 0) {
        nameFormated += `+${nameSplit[i]}`;
      }
    }
    fetch(`https://breakingbadapi.com/api/characters?name=${nameFormated}`)
      .then((res) => res.json())
      .then((data) => {
        data = data[0];
        console.log(data);
        if (data) {
          const charId = data.char_id;
          setElementos((arr) => [
            ...arr,
            <Link to={`/characters/${charId}`}>
              <li className="jorge">{char}</li>
            </Link>,
          ]);
        } else {
          setElementos((arr) => [...arr, <li>{char}</li>]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  useEffect(() => {
    if (episode && episode.characters) {
      var personagens = episode.characters;
      if (permElements) {
        console.log(elementos)
        setPermElements(false)
        personagens.map((pers) => {
          console.log("mandando pra funcao");
          getCharacterLink(pers);
        });
      }
    }
  }, [episode]);

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
                    ? posters.brba[episode.season - 1]
                    : posters.bcs[episode.season - 1]
                }
                alt="poster"
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
                {elementos ? elementos.map((char) => char) : "nao tem nada"}
              </ul>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EpInfo;
