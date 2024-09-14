import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  const location = useLocation();

  return (
    <div className={clsx([styles.header, "container", "flex", location.pathname !== '/' && "bc-light-grey"])}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
