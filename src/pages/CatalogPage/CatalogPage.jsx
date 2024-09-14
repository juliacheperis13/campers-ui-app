import clsx from "clsx";
import styles from "./CatalogPage.module.css";
import Search from "../../components/Filters/Search/Search";
import FilterGrid from "../../components/Filters/FilterGrid/FilterGrid";
import Button from "../../components/Button/Button";
import CampersList from "../../components/CampersList/CampersList";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/campers/campersOps";
import { selectFilteredCampers } from "../../redux/campers/campersSelectors";
// import { selectIsLoading } from "../../redux/campers/campersSelectors";
import // selectEquipmentList,
// selectTypeList,
"../../redux/filters/filtersSelectors";
import {
  // setEquipmentList,
  // setEquipment,
  // setTypeList,
  // setType,
  // setLocation,
  applyFilters,
} from "../../redux/filters/filtersSlice";

const equipmentsDefault = [
  { label: "AC", icon: "#ac", value: "AC", isSelected: false },
  {
    label: "Automatic",
    icon: "#transmission",
    value: "automatic",
    isSelected: false,
  },
  { label: "Kitchen", icon: "#kitchen", value: "kitchen", isSelected: false },
  { label: "TV", icon: "#tv", value: "TV", isSelected: false },
  {
    label: "Bathroom",
    icon: "#bathroom",
    value: "bathroom",
    isSelected: false,
  },
];

const typesDefault = [
  { label: "Van", icon: "#van", value: "van", isSelected: false },
  {
    label: "Fully Integrated",
    icon: "#fullyIntegrated",
    value: "fullyIntegrated",
    isSelected: false,
  },
  { label: "Alcove", icon: "#alcove", value: "alcove", isSelected: false },
];

const CatalogPage = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [location, setLocation] = useState("");
  const [itemsNumber, setItemsNumber] = useState(5);

  const handleEquipmentChange = (value) => {
    // dispatch(setEquipment(value));
    setEquipmentList(
      equipmentList.map((equipment) => ({
        ...equipment,
        isSelected:
          equipment.value === value
            ? !equipment.isSelected
            : equipment.isSelected,
      }))
    );
  };
  const handleTypeChange = (value) => {
    setTypeList(
      typeList.map((equipment) => ({
        ...equipment,
        isSelected: equipment.value === value ? !equipment.isSelected : false,
      }))
    );
    // dispatch(setType(value));
  };

  const handleSearchChange = (value) => {
    setLocation(value);
    // dispatch(setLocation(value));
  };

  const handleSearch = () => {
    setItemsNumber(5);
    dispatch(
      applyFilters({
        location,
        equipmentList,
        typeList,
      })
    );
  };

  const handleLoadMore = () => {
    setItemsNumber(itemsNumber + 5);
  };

  const dispatch = useDispatch();

  const campers = useSelector(selectFilteredCampers);
  // const equipments = useSelector(selectEquipmentList);
  // const types = useSelector(selectTypeList);

  useEffect(() => {
    // dispatch(setEquipmentList(equipmentsDefault));
    // dispatch(setTypeList(typesDefault));
    dispatch(fetchCampers());
  }, [dispatch]);

  useEffect(() => {
    setEquipmentList(equipmentsDefault);
    setTypeList(typesDefault);
  }, []);

  return (
    <div
      className={clsx([
        "container",
        "flex",
        styles.container,
        styles.catalogPageContainer,
      ])}
    >
      <ScrollToTop />
      <div className={styles.sideContainer}>
        <Search
          icon="map"
          title="Location"
          placeholder="City"
          handleChange={handleSearchChange}
        />
        <span className={styles.filtersTitle}>Filters</span>
        <FilterGrid
          options={equipmentList}
          title="Vehicle equipment"
          handleClick={handleEquipmentChange}
        />
        <FilterGrid
          options={typeList}
          title="Vehicle type"
          handleClick={handleTypeChange}
        />
        <Button type="primary" clickHandler={handleSearch}>
          Search
        </Button>
      </div>
      <div className="flex column items-center">
        <CampersList campers={campers.slice(0, itemsNumber) } />
        {itemsNumber < campers.length && (
          <Button type="ghost" clickHandler={handleLoadMore}>
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
