import styles from './EpCard.module.css'
import { Link } from 'react-router-dom'



const EpCard = ({id, episode, season, title, airdate, serie}) => {

  let imgcard = 'https://www.themoviedb.org/t/p/original/chw44B2VnLha8iiTdyZcIW0ZELC.png'
  if(serie === 'Better Call Saul') imgcard = 'https://www.themoviedb.org/t/p/original/hwxBWyoeTefjafeqkIONxl0mXUV.png'

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