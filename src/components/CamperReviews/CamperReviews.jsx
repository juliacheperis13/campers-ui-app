import styles from "./CamperReviews.module.css";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";

const CamperReviews = ({ camper }) => {
  const mappedReviews = camper.reviews.map((review) => ({
    id: uuidv4(),
    ...review,
  }));
  const totalStars = 5;

  return (
    <div className={clsx([styles.reviewsTabContainer, "flex", "column"])}>
      {mappedReviews.map((review) => (
        <div key={review.id} className={styles.reviewContainer}>
          <div className={clsx([styles.infoContainer, "flex", "gap24"])}>
            <div className={styles.userIcon}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div className="flex column gap4">
              <p className={styles.userName}>{review.reviewer_name}</p>
              <div className={styles.rating}>
                {[...Array(totalStars)].map((_, index) => (
                  <svg
                    key={index}
                    className={clsx([
                      index < review.reviewer_rating && styles.filledStar,
                      styles.star,
                    ])}
                  >
                    <use href="/icons.svg#rating"></use>
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="titleSmall">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CamperReviews;
