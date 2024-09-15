import clsx from "clsx";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import CamperDescription from "../../components/CamperDescription/CamperDescription";
import CamperGallery from "../../components/CamperGallery/CamperGallery";
import CamperInfo from "../../components/CamperInfo/CamperInfo";
import ChipsList from "../../components/ChipsList/ChipsList";
import { equipments } from '../../constants/equipments';
import styles from "./CampersListItem.module.css";

const CampersListItem = ({ camper, isFavorite }) => {
  const features = equipments.filter((feature) => camper[feature.name]);
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
