import styles from "./CamperBookForm.module.css";
import { Field, Form, Formik } from "formik";
import Button from "../../components/Button/Button";
import DatePicker from "react-datepicker";
import clsx from "clsx";
import { useState } from "react";

const CamperBookForm = ({ handleSubmit }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const initialValues = {
    name: "",
    email: "",
    bookingDate: [null, null],
    comment: "",
  };

  const submitHandler = () => {};

  return (
    <div className={clsx([styles.formTabContainer, "flex", "column", "gap24"])}>
      <div className="flex column gap8">
        <h3>Book your campervan now</h3>
        <p className={styles.subTitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      {/* <div className="flex column gap12"> */}
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ setFieldValue }) => (
          <Form className="flex column gap12">
            <div className="inputContainer">
              <div className="inputWrapper">
                <Field
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                />
              </div>
            </div>
            <div className="inputContainer">
              <div className="inputWrapper">
                <Field
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                />
              </div>
            </div>

            <div className="inputContainer">
              <div className="inputWrapper">
                <DatePicker
                  selectsRange
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    setDateRange(update);
                    setFieldValue("bookingDate", update);
                  }}
                  placeholderText="Booking date*"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>
            <div className="inputContainer">
              <div className="inputWrapper">
                <Field
                  as="textarea"
                  name="comment"
                  placeholder="Comment"
                  className="input"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className="selfCenter">
        <Button type="primary" clickHandler={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CamperBookForm;
