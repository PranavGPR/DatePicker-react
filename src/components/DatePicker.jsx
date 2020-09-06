import React from "react";
import styles from "./datepicker.module.scss";

export default function DatePicker(props) {
  return (
    <div>
      <h1>Hi! I'm DatePicker</h1>
      <input
        className={styles.box}
        {...props}
        // defaultValue="2000-01-01"
        type="date"
      />
    </div>
  );
}
