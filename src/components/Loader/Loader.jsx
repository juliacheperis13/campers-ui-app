import { PropagateLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <PropagateLoader color="#3dd5ba"/>
    </div>
  );
};

export default Loader;
