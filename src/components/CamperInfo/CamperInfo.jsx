import styles from "./CamperInfo.module.css";
import clsx from "clsx";

const CamperInfo = ({
  camper: { name, price, rating, reviews, location },
  isFavShown,
  isFav
}) => {
  return (
    <div
      className={clsx([
        "flex",
        "spaceBetween",
        "fullWidth",
        "gap8",
        !isFavShown && "column",
      ])}
    >
      <div className="flex column gap8">
        <h2>{name}</h2>
        <div className="flex gap16">
          <span className={styles.rating}>
            <svg>
              <use href="/icons.svg#rating"></use>
            </svg>
            {rating}({reviews.length} Reviews)
          </span>
          <span className={styles.location}>
            <svg>
              <use href="/icons.svg#map"></use>
            </svg>
            {location.split(", ").reverse().join(", ")}
          </span>
        </div>
      </div>
      <div className="flex gap12">
        {/* TO DO: add price formatting */}
        <span className={styles.price}>€{price}.00</span>
        {/* TO DO: add fav */}
        {isFavShown && (
          <button className={styles.favoritesButton}>
            <svg className={clsx([styles.icon, isFav && styles.isFavorite])}>
              <use href="/icons.svg#favorites"></use>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default CamperInfo;
