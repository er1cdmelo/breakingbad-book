import styles from './EpCard.module.css'
import { Link } from 'react-router-dom'



const EpCard = ({id, episode, season, title, airdate, serie}) => {

  let imgcard = 'https://www.themoviedb.org/t/p/original/9PVfHEBXFeCBGvy4NVQLwh43iDt.jpg'
  if(serie === 'Better Call Saul') imgcard = 'https://www.themoviedb.org/t/p/original/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg'

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