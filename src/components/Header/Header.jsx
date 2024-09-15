import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import clsx from "clsx";

const Header = () => {
  const location = useLocation();

  return (
    <div className={clsx(["bbMiddleGrey", "container", "flex", location.pathname !== '/' && "bcLightGrey"])}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
