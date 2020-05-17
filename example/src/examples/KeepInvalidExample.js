/* eslint-disable no-console */
import React, { useRef } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function KeepInvalidExample({ noHr = false }) {
  const pickerRef = useRef();
  return (
    <>
      <div>
        <h2 id="keep-invalid">
          <a className={styles.fragmentLink} href="#keep-invalid">
            Keep Invalid
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            pickerRef={pickerRef}
            keepInvalid
            defaultDate={new Date()}
            onChange={e => console.log("onChange", e.date)}
            onError={e => console.log("onError", e.date)}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              pickerRef.current.datetimepicker(
                "date",
                "Blah blah blah, not a valid date..."
              );
            }}
          >
            Set invalid date
          </button>
        </div>
        <PrismCode language="jsx" lineHighlight="1-2, 5, 7-24">
          {`import React, { useRef } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => {
  const pickerRef = useRef();
  return (
    <DateTimePicker
      pickerRef={pickerRef}
      keepInvalid
      defaultDate={new Date()}
      onChange={e => console.log("onChange", e.date)}
      onError={e => console.log("onError", e.date)}
    />
    <button
      className="btn btn-primary"
      onClick={() => {
        pickerRef.current.datetimepicker(
          "date",
          "Blah blah blah, not a valid date..."
        );
      }}
    >
      Set invalid date
    </button>
  );
};`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
