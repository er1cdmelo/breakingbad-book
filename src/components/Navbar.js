import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BiMenu } from "react-icons/bi";
import { useState, useEffect } from "react";


const Navbar = () => {
  
  const location = useLocation()
  const [dropdown, setDropdown] = useState(true);
  const [selected, setSelected] = useState()

  useEffect(() => {
    let endereco = location.pathname
    endereco = endereco.split('/')
    if(endereco[1] === '') {
      setSelected('characters')
    }else setSelected(endereco[1])
    
  }, [location])

  return (
    <nav className={styles.navbar_container}>
      <h1>
        <span>Br</span>
        <span>Ba</span> Book
      </h1>
      {dropdown && (
        <ul>
          <Link to="/">
            <li className={selected === 'characters' ? styles.selected : ''}>Characters</li>
          </Link>
          <Link to="/episodes">
            <li className={selected === 'episodes' ? styles.selected : ''}>Episodes</li>
          </Link>
          <Link to="/deaths">
            <li className={selected === 'deaths' ? styles.selected : ''}>Deaths</li>
          </Link>
        </ul>
      )}
      <button
        onClick={() => (dropdown ? setDropdown(false) : setDropdown(true))}
      >
        <BiMenu />
      </button>
    </nav>
  );
};

export default Navbar;
