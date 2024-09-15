import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-hot-toast";
import Button from "../../components/Button/Button";
import styles from "./CamperBookForm.module.css";

const CamperBookForm = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const initialValues = {
    name: "",
    email: "",
    bookingDate: [null, null],
    comment: "",
  };

  const submitHandler = () => {
    toast.success('Thank you for the booking!')
  };

  return (
    <div className={clsx([styles.formTabContainer, "flex", "column", "gap24"])}>
      <div className="flex column gap8">
        <h3>Book your campervan now</h3>
        <p className={styles.subTitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ setFieldValue }) => (
          <Form className="flex column gap24">
            <div className="flex column gap12">
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
                    calendarStartDay={1}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                      setDateRange(update);
                      setFieldValue("bookingDate", update);
                    }}
                    placeholderText="Booking date*"
                    dateFormat="dd/MM/yyyy"
                    formatWeekDay={nameOfDay => nameOfDay.toUpperCase().slice(0,3)}
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
            </div>
            <div className="selfCenter">
              <Button kind="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CamperBookForm;
