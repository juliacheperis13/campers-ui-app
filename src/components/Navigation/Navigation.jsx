import clsx from "clsx";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.navLink, isActive && styles.active);
};

const Navigation = () => {
  return (
    <nav className="fullWidth">
      <ul className="gap32 flex justifyCenter itemsCenter">
        <li>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
