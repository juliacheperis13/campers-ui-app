import CampersListItem from "../CampersListItem/CampersListItem";
import { useSelector } from "react-redux";
import { selectFavoriteCampers } from "../../redux/favoriteCampers/favoriteCampersSelectors";

const CampersList = ({ campers }) => {
  const favorites = useSelector(selectFavoriteCampers);

  return (
    <div>
      {campers.length > 0 &&
        campers.map((camper) => (
          <CampersListItem
            key={camper.id}
            camper={camper}
            isFavorite={!!favorites[camper.id]}
          />
        ))}
    </div>
  );
};

export default CampersList;
