import CamperDescription from "../../components/CamperDescription/CamperDescription";
import CamperGallery from "../../components/CamperGallery/CamperGallery";
import CamperInfo from "../../components/CamperInfo/CamperInfo";

const CamperDetails = ({ camper }) => {
  return (
    <div className="flex column gap32">
      <CamperInfo camper={camper} isFavShown={false} />
      <CamperGallery gallery={camper.gallery} isCover={false} />
      <CamperDescription description={camper.description} isMultiline={true} />
    </div>
  );
};

export default CamperDetails;
