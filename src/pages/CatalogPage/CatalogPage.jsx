import clsx from "clsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import CampersList from "../../components/CampersList/CampersList";
import FilterGrid from "../../components/Filters/FilterGrid/FilterGrid";
import Search from "../../components/Filters/Search/Search";
import { equipmentsDefault, typesDefault } from "../../constants/filters";
import { fetchCampers } from "../../redux/campers/campersOps";
import { selectFilteredCampers } from "../../redux/campers/campersSelectors";
import { resetCampers } from "../../redux/campers/campersSlice";
import { applyFilters, resetFilters } from "../../redux/filters/filtersSlice";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [location, setLocation] = useState("");
  const [itemsNumber, setItemsNumber] = useState(5);

  const dispatch = useDispatch();
  const campers = useSelector(selectFilteredCampers);

  const handleEquipmentChange = (value) => {
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
  };

  const handleSearchChange = (value) => {
    setLocation(value);
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

  useEffect(() => {
    dispatch(fetchCampers());

    return () => {
      dispatch(resetCampers());
      dispatch(resetFilters());
    }; // <-- reset when unmounting
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
        <Button kind="primary" clickHandler={handleSearch}>
          Search
        </Button>
      </div>
      <div className="flex column itemsCenter">
        {campers.length === 0 ? (
          <p className="titleSmall">No campers available</p>
        ) : (
          <CampersList campers={campers.slice(0, itemsNumber)} />
        )}
        {itemsNumber < campers.length && (
          <Button kind="ghost" clickHandler={handleLoadMore}>
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
