import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./HomePage.module.css";
import clsx from "clsx";

const HomePage = () => {
  return (
    <div className={clsx([styles.heroImageContainer, styles.container, "container"])}>
      <div className={styles.descriptionContainer}>
        <h1>Campers of your dreams</h1>
        <h2>You can find everything you want in our catalog</h2>
      </div>
      <NavLink to="/catalog">
        <Button type="primary">View Now</Button>
      </NavLink>
    </div>
  );
};

export default HomePage;
