import clsx from "clsx";

const CamperDescription = ({ description, isMultiline }) => {
  return (
    <p className={clsx("titleSmall", !isMultiline && "noWrap")}>
      {description}
    </p>
  );
};

export default CamperDescription;
