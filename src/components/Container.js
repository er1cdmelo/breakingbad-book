import './Container.css'

const Container = (props) => {

  let display;

  if (props.display === 'grid') {
    display = 'container_grid'
  } else display = 'container_component'

  return (
    <div className={display}>
        {props.children}
    </div>
  )
}

export default Container