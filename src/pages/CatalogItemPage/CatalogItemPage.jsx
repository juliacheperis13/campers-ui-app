import CamperDetails from "../../components/CamperDetails/CamperDetails";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import CamperReviews from "../../components/CamperReviews/CamperReviews";
import CamperBookForm from "../../components/CamperBookForm/CamperBookForm";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import clsx from "clsx";
import styles from "./CatalogItemPage.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const CatalogItemPage = () => {
  const camper = {
    id: "3",
    name: "Britz 4 Berth",
    price: 9000,
    rating: 4.4,
    location: "Ukraine, Dnipro",
    description:
      "Experience luxury on the road with the Britz 4 Berth motorhome. Perfect for couples or small families, this alcove-style RV combines style, comfort, and functionality to provide an unforgettable travel experience. Whether you're exploring scenic landscapes or camping under the stars, the Britz 4 Berth offers a home-like atmosphere wherever your adventures take you.",
    form: "alcove",
    length: "6.4m",
    width: "2.65m",
    height: "3.65m",
    tank: "208l",
    consumption: "30l/100km",
    transmission: "manual",
    engine: "petrol",
    AC: true,
    bathroom: true,
    kitchen: true,
    TV: true,
    radio: true,
    refrigerator: true,
    microwave: true,
    gas: false,
    water: true,
    gallery: [
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/3-1.webp",
        original: "https://ftp.goit.study/img/campers-test-task/3-1.webp",
      },
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/3-2.webp",
        original: "https://ftp.goit.study/img/campers-test-task/3-2.webp",
      },
    ],
    reviews: [
      {
        reviewer_name: "Alice",
        reviewer_rating: 5,
        comment:
          "The Britz 4 Berth is a fantastic choice for a comfortable and stylish road trip. The interior design is impressive, and the amenities provided a luxury touch. Highly recommended for couples seeking a premium RV experience.",
      },
      {
        reviewer_name: "Bob",
        reviewer_rating: 3,
        comment:
          "Decent motorhome overall. The Britz 4 Berth provided a comfortable stay, but the lack of gas for cooking was a downside. The entertainment options were good, and the bed was comfortable. Worth considering for a short trip.",
      },
    ],
  };

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
  );
};

export default CatalogItemPage;
