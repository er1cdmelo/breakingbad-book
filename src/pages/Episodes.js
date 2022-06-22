import { useState, useEffect } from "react";
import styles from "./Episodes.module.css";


import Container from "../components/Container";
import Loading from "../components/Loading";
import EpCard from '../card/EpCard'


const Episodes = () => {
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch("https://www.breakingbadapi.com/api/episodes")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setEpisodes(data)
          setLoading(false)
        }, 1500)

      })
      .catch((err) => console.log(err));
  }, []);

  let displayContainer = 'flex'
  if (episodes) displayContainer = 'grid'

  return (
    <div className={styles.global_container}>
      <Container display={displayContainer}>
      {loading ? <Loading /> : (
        episodes.map((ep) => (
          <EpCard
          id={ep.episode_id}
          episode={ep.episode}
          season={ep.season}
          title={ep.title}
          airdate={ep.air_date}
          serie={ep.series}
          />
        ))
      )}
      </Container>
      
    </div>
  );
};

export default Episodes;
