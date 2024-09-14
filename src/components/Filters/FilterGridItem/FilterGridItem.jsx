import styles from "./FilterGridItem.module.css";
import clsx from "clsx";

const FilterGridItem = ({ label, icon, value, isSelected, handleClick }) => {
  return (
    <button
      className={clsx(styles.filterGridButton, isSelected && styles.filterGridButtonActive)}
      onClick={() => handleClick(value)}
    >
      <svg className={styles.icon}>
        <use href={`/icons.svg${icon}`}></use>
      </svg>
      <p>{label}</p>
    </button>
  );
};

export default FilterGridItem;
