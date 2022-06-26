import styles from './DeathCard.module.css'
import { Link } from 'react-router-dom'


const Card = ({target, id, killer}) => {

  const name = target.split(' ')[0]

  return (
    <Link to={`/deaths/${name}`}>
      <div className={styles.card_container}>
        <h3>{target}</h3>
        <h5>by {killer}</h5>
    </div>
    </Link>
    
  )
}

export default Card