import styles from "./CamperDescription.module.css";
import clsx from "clsx";

const CamperDescription = ({ description, isMultiline }) => {
  return (
    <p className={clsx(styles.description, !isMultiline && styles.noWrap)}>
      {description}
    </p>
  );
};

export default CamperDescription;
