import styles from "./CampersListItem.module.css";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import ChipsList from "../../components/ChipsList/ChipsList";
import CamperInfo from "../../components/CamperInfo/CamperInfo";
import CamperGallery from "../../components/CamperGallery/CamperGallery";
import CamperDescription from "../../components/CamperDescription/CamperDescription";
import clsx from "clsx";

const featuredList = [
  { name: "AC", icon: "ac" },
  { name: "bathroom", icon: "bathroom" },
  { name: "kitchen", icon: "kitchen" },
  { name: "TV", icon: "tv" },
  { name: "radio", icon: "radio" },
];

const CampersListItem = ({ camper, isFavorite }) => {
  const features = featuredList.filter((feature) => camper[feature.name]);
  const transmission = { name: camper.transmission, icon: "transmission" };
  const engine = { name: camper.engine, icon: "fuel" };

  return (
    <div className={clsx([styles.itemContainer, "flex"])}>
      <CamperGallery
        gallery={camper.gallery}
        description={camper.description}
        isCover={true}
      />
      <div className="flex column overflowHidden">
        <div className={clsx([styles.itemInfoWrapper, "flex", "column"])}>
          <CamperInfo camper={camper} isFavShown={true} isFav={isFavorite}/>
          <CamperDescription
            description={camper.description}
            isMultiLine={false}
          />
          <ChipsList items={[transmission, engine, ...features]} />
        </div>
        <NavLink to={`/catalog/${camper.id}`}>
          <Button type="primary">Show more</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default CampersListItem;
