import { useState, useEffect } from "react";
import styles from "./Deaths.module.css";


import Container from "../components/Container";
import Loading from "../components/Loading";
import DeathCard from '../card/DeathCard'


const Deaths = () => {
  const [deaths, setDeaths] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch("https://www.breakingbadapi.com/api/deaths")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setDeaths(data)
          setLoading(false)
        }, 1500)

      })
      .catch((err) => console.log(err));
  }, []);

  let displayContainer = 'flex'
  if (deaths) displayContainer = 'grid'

  return (
    <div className={styles.global_container}>
      <Container display={displayContainer}>
      {loading ? <Loading /> : (
        deaths.map((de) => (
          <DeathCard
          id={de.death_id}
          target={de.death}
          killer={de.responsible}
          />
        ))
      )}
      </Container>
      
    </div>
  );
};

export default Deaths;
