import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";

const NotFoundPage = () => {
  return (
    <div className="container flex column gap24 itemsCenter my24">
      <div>
        <h2>Page is not found</h2>
      </div>
      <NavLink to="/">
        <Button kind="primary">Go back to start</Button>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
