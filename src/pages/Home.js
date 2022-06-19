import { useState, useEffect } from "react";
import styles from "./Home.module.css";


import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import Card from "../card/Card";

const Home = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setCharacters(data)
          setLoading(false)
        }, 3000)

      })
      .catch((err) => console.log(err));
  }, []);

  let displayContainer = 'flex'
  if (characters) displayContainer = 'grid'

  return (
    <div className={styles.global_container}>
      <Container display={displayContainer}>
      {loading ? <Loading /> : (
        characters.map((char) => (
          <Card 
          name={char.name}
          img={char.img}
          id={char.char_id}
          />
        ))
      )}
      </Container>
      
    </div>
  );
};

export default Home;
