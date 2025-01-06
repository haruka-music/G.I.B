import React from "react";
import classes from "@/app/components/elements/button/button.module.css";

const button = () => {
  return (
    <>
      <button className={classes.button} type="submit">
        Submit
      </button>
    </>
  );
};

export default button;