import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
      <NavLink to="/" className={styles.logoNavLink}>
        <span>Travel</span><span className="textMiddleDarkGrey">Trucks</span>
      </NavLink>
  );
};

export default Logo;
