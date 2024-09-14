import styles from "./CamperInfo.module.css";
import { useDispatch } from "react-redux";
import {
  addFavoriteCamper,
  removeFavoriteCamper,
} from "../../redux/favoriteCampers/favoriteCampersSlice";
import clsx from "clsx";

const CamperInfo = ({
  camper: { name, price, rating, reviews, location, id },
  isFavShown,
  isFav,
}) => {
  const dispatch = useDispatch();

  const handleToggleFav = () => {
    if (!isFav) {
      dispatch(addFavoriteCamper(id));
    } else {
      dispatch(removeFavoriteCamper(id));
    }
  };

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
        <span className={styles.price}>€{price}.00</span>
        {isFavShown && (
          <button className={styles.favoritesButton} onClick={handleToggleFav}>
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
