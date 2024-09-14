import CampersListItem from "../CampersListItem/CampersListItem";

const CampersList = ({ campers }) => {
  console.log(campers);
  return (
    <div>
      {campers.length > 0 &&
        campers.map((camper) => (
          <CampersListItem key={camper.id} camper={camper} />
        ))}
    </div>
  );
};

export default CampersList;
