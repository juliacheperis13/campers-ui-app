import styles from "./CamperGallery.module.css";

const CamperGallery = ({ gallery, isCover }) => {
  const items = isCover ? gallery.slice(0, 1) : gallery;

  return (
    <div className={styles.galleryContainer}>
      {items.map((item) => (
        <div key={item.thumb} className={styles.itemImageContainer}>
          <img className="fullImage" src={item.thumb} />
        </div>
      ))}
    </div>
  );
};

export default CamperGallery;
