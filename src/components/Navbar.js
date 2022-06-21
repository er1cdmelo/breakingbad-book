import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";


const Navbar = () => {
  
  const [dropdown, setDropdown] = useState(true);

  return (
    <nav className={styles.navbar_container}>
      <h1>
        <span>Br</span>
        <span>Ba</span> Book
      </h1>
      {dropdown && (
        <ul>
          <Link to="/">
            <li>Characters</li>
          </Link>
          <Link to="/episodes">
            <li>Episodes</li>
          </Link>
          <li>Soon</li>
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
