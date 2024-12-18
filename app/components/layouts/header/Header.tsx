import React from "react";
import Styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className={Styles.header}>Goshi.Inoue</div>
      {/* <div style={{ width: "10%" }}>
        <div style={{ margin: "10px", fontSize: "x-large" }}>
          <FontAwesomeIcon icon={faHouse} />
        </div>
      </div> */}
    </>
  );
};

export default Header;
