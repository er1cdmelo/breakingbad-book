import styles from './EpCard.module.css'
import { Link } from 'react-router-dom'

const posters = {
  brba: [
    "https://m.media-amazon.com/images/M/MV5BMTk0MDAxNTIwMV5BMl5BanBnXkFtZTcwMDE2MzQ1MQ@@._V1_FMjpg_UX450_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMGUyM2I3NTQtYjc5YS00ZmJjLTg2YjUtYmUyMTM1MDIxOTE0XkEyXkFqcGdeQXVyMTA3MzQ4MTcw._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTM3MDc3MjA1OF5BMl5BanBnXkFtZTcwMjY1NDAyMw@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjY1Mzc5YjgtMTEyNS00ZDU3LWE3MWYtYWNjNWExZDY2YzBkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMDIwMGZkZWEtMGE4ZC00M2NhLTg5ZDMtM2E4YWY3ZDU5OGFmXkEyXkFqcGdeQXVyMTEwOTA4NTg4._V1_.jpg",
  ],
  bcs: ['https://m.media-amazon.com/images/M/MV5BMTAxOTQ0MjUzMzJeQTJeQWpwZ15BbWU4MDY0NTAxNzMx._V1_.jpg', 'https://m.media-amazon.com/images/M/MV5BNjk5MjYwNjg4NV5BMl5BanBnXkFtZTgwNzAzMzc5NzE@._V1_.jpg', 'https://m.media-amazon.com/images/M/MV5BODY2ODU0MTY5Nl5BMl5BanBnXkFtZTgwNjQ0OTc2MTI@._V1_.jpg', 'https://m.media-amazon.com/images/M/MV5BNjIxMDE5NDk1OF5BMl5BanBnXkFtZTgwMzQwNDM4NTM@._V1_.jpg', 'https://m.media-amazon.com/images/M/MV5BMGE4YzY4NGEtOWYyYS00ZDk2LWExMmMtZDIyODhiMmNlMGE0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg', 'https://m.media-amazon.com/images/M/MV5BMTMxOGM0NzItM2E0OS00YWYzLWEzNzUtODUzZTBjM2I4MTZkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg'],
};

const EpCard = ({id, episode, season, title, airdate, serie}) => {

  let imgcard = posters.brba[season - 1]
  
  if(serie === 'Better Call Saul') imgcard = posters.bcs[season - 1]

  return (
    <Link to={`/episodes/${id}`}>
      <div className={styles.card_container}>
        <div className={styles.img_container}>
          <img src={imgcard} alt='pht' />
        </div>
        <span>S{season}EP{episode}</span>
        <h3>{title}</h3>
    </div>
    </Link>
    
  )
}

export default EpCard