import clsx from "clsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CamperBookForm from "../../components/CamperBookForm/CamperBookForm";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import CamperReviews from "../../components/CamperReviews/CamperReviews";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { fetchCamper } from "../../redux/campers/campersOps";
import { selectCamper } from "../../redux/campers/campersSelectors";
import { resetCamper } from "../../redux/campers/campersSlice";
import styles from "./CatalogItemPage.module.css";

const CatalogItemPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchCamper(id));
  }, [id, dispatch]);

  useEffect(() => {
    return () => dispatch(resetCamper()); // <-- reset when unmounting
  }, [dispatch]);

  return (
    <div
      className={clsx([
        "container",
        "flex",
        "column",
        styles.container,
        styles.catalogItemPageContainer,
      ])}
    >
      <ScrollToTop />
      {camper && (
        <div>
          <div className={styles.detailsContainer}>
            <CamperDetails camper={camper} />
          </div>
          <Tabs>
            <TabList>
              <Tab>Features</Tab>
              <Tab>Reviews</Tab>
            </TabList>

            <div className={clsx([styles.tabsContainer])}>
              <div>
                <TabPanel>
                  <CamperFeatures camper={camper} />
                </TabPanel>
                <TabPanel>
                  <CamperReviews camper={camper} />
                </TabPanel>
              </div>
              <CamperBookForm />
            </div>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default CatalogItemPage;
