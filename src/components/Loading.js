import styles from './Loading.module.css'

const Loading = () => {

  console.log('loading...')  

  return (
    <div className={styles.loader}></div>
  )
}

export default Loading