import styles from "./CamperFeatures.module.css";
import clsx from "clsx";
import ChipsList from "../../components/ChipsList/ChipsList";

const vehicleDetailsAttributes = [
  "form",
  "length",
  "width",
  "height",
  "tank",
  "consumption",
];

const featuredList = [
  { name: "AC", icon: "ac" },
  { name: "bathroom", icon: "bathroom" },
  { name: "kitchen", icon: "kitchen" },
  { name: "TV", icon: "tv" },
  { name: "radio", icon: "radio" },
];

const CamperFeatures = ({ camper }) => {
  const features = featuredList.filter((feature) => camper[feature.name]);
  const transmission = { name: camper.transmission, icon: "transmission" };
  const engine = { name: camper.engine, icon: "fuel" };

  return (
    <div className={clsx([styles.featuresTabContainer, "flex", "column"])}>
      <div className="featuresContainer">
        <ChipsList items={[transmission, engine, ...features]} />
      </div>
      <div className="detailsContainer">
        <h3>Vehicle details</h3>
        <div className="divider"></div>
        <div className="detailsList">
          {vehicleDetailsAttributes.map((attribute) => (
            <div key={attribute} className={clsx([styles.detailsItem, "flex", "spaceBetween"])}>
              <span>
                {attribute.charAt(0).toUpperCase() + attribute.slice(1)}
              </span>
              <span>
                {camper[attribute].charAt(0).toUpperCase() + 
                  camper[attribute].slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CamperFeatures;
