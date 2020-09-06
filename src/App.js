import React from "react";
import "./styles.css";
import DatePicker from "./components/DatePicker";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function App(props) {
  const formik = useFormik({
    initialValues: {
      date: new Date().toLocaleDateString()
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Required")
    }),
    onSubmit: (values, errors) => {
      console.log("form values", values);
    }
  });

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <DatePicker name="date" {...formik.getFieldProps("date")} />
        <p>{JSON.stringify(formik.getFieldProps("date"), null, 2)}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
