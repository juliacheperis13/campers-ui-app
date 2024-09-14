import styles from "./ChipsList.module.css";

const ChipsList = ({ items }) => {
  return (
    <div className={styles.chipListWrapper}>
      {items.map((item) => (
        <div key={item.name} className={styles.chipItem}>
          <svg className={styles.icon}>
            <use href={`/icons.svg#${item.icon}`}></use>
          </svg>
          <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
        </div>
      ))}
    </div>
  );
};

export default ChipsList;
