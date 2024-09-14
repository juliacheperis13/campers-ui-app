import clsx from "clsx";
import styles from "./CatalogPage.module.css";
import Search from "../../components/Filters/Search/Search";
import FilterGrid from "../../components/Filters/FilterGrid/FilterGrid";
import Button from "../../components/Button/Button";
import CampersList from "../../components/CampersList/CampersList";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/campersOps";
import { selectFilteredCampers } from "../../redux/campers/campersSelectors";
// import { selectIsLoading } from "../../redux/campers/campersSelectors";
import {
  selectEquipmentList,
  selectTypeList,
} from "../../redux/filters/filtersSelectors";
import {
  setEquipmentList,
  setEquipment,
  setTypeList,
  setType,
  setLocation,
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
  const handleEquipmentChange = (value) => {
    dispatch(setEquipment(value));
  };
  const handleTypeChange = (value) => {
    dispatch(setType(value));
  };

  const handleSearchChange = (value) => {
    dispatch(setLocation(value));
  };

  const handleSearch = () => {
    dispatch(applyFilters());
  };

  const handleLoadMore = () => {};

  const isLoadMoreAvailable = true;

  // const campers = [];

  const dispatch = useDispatch();

  const campers = useSelector(selectFilteredCampers);
  const equipments = useSelector(selectEquipmentList);
  const types = useSelector(selectTypeList);

  useEffect(() => {
    dispatch(fetchCampers());
    dispatch(setEquipmentList(equipmentsDefault));
    dispatch(setTypeList(typesDefault));
  }, [dispatch]);

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
          options={equipments}
          title="Vehicle equipment"
          handleClick={handleEquipmentChange}
        />
        <FilterGrid
          options={types}
          title="Vehicle type"
          handleClick={handleTypeChange}
        />
        <Button type="primary" clickHandler={handleSearch}>
          Search
        </Button>
      </div>
      <div className="flex column items-center">
        <CampersList campers={campers} />
        <Button type="ghost" clickHandler={handleLoadMore}>
          Load more
        </Button>
      </div>
    </div>
  );
};

export default CatalogPage;
