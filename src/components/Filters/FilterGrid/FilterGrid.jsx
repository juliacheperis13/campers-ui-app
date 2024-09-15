import FilterGridItem from "../FilterGridItem/FilterGridItem";
import styles from "./FilterGrid.module.css";

const FilterGrid = ({ title, options, handleClick }) => {
  return (
    <div>
      <p className={styles.filterGridTitle}>{title}</p>
      <div className="divider"></div>
      <div className={styles.filterGridContainer}>
        {options?.length > 0 &&
          options.map((option) => (
            <FilterGridItem
              key={option.label}
              icon={option.icon}
              label={option.label}
              value={option.value}
              isSelected={option.isSelected}
              handleClick={handleClick}
            />
          ))}
      </div>
    </div>
  );
};

export default FilterGrid;
