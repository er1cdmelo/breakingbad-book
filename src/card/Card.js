import styles from './Card.module.css'
import { Link } from 'react-router-dom'


const Card = ({name, img, id}) => {

  

  return (
    <Link to={`/characters/${id}`}>
      <div className={styles.card_container}>
        <div className={styles.img_container}>
          <img src={img} alt='pht'></img>
        </div>
        <h3>{name}</h3>
    </div>
    </Link>
    
  )
}

export default Card