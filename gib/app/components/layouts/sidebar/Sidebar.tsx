import React from "react";
import Styles from "./Sidbar.module.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPerson } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={Styles.Sidebar}>
      <ul className={Styles.SidebarList}>
        <div style={{ width: "50px" }}>
          <div style={{ margin: "10px", fontSize: "x-large" }}>
            <FontAwesomeIcon icon={faHouse} className="" />
          </div>
        </div>
        <li className={Styles.ListName}>
          <Link className={Styles.Link} to="/Home">
            Home
          </Link>
        </li>
      </ul>

      <ul className={Styles.SidebarList}>
        <div style={{ width: "50px" }}>
          <div style={{ margin: "10px", fontSize: "x-large" }}>
            <FontAwesomeIcon icon={faPerson} className="" />
          </div>
        </div>
        <li className={Styles.ListName}>
          <Link className={Styles.Link} to="/Player">
            player
          </Link>
        </li>
      </ul>

      <ul className={Styles.SidebarList}>
        <div style={{ width: "50px" }}>
          <div style={{ margin: "10px", fontSize: "x-large" }}>
            <FontAwesomeIcon icon={faGamepad} className="" />
          </div>
        </div>
        <li className={Styles.ListName}>
          <Link className={Styles.Link} to="/Toolphoto">
            ToolphotoPage
          </Link>
        </li>
      </ul>

      <ul className={Styles.SidebarList}>
        <div style={{ width: "50px" }}>
          <div style={{ margin: "10px", fontSize: "x-large" }}>
            <FontAwesomeIcon icon={faYoutube} className="" />
          </div>
        </div>
        <li className={Styles.ListName}>
          <Link className={Styles.Link} to="/Movies">
            Movies
          </Link>
        </li>
      </ul>

      <ul className={Styles.SidebarList}>
        <div style={{ width: "50px" }}>
          <div style={{ margin: "10px", fontSize: "x-large" }}>
            <FontAwesomeIcon icon={faEnvelope} className="" />
          </div>
        </div>
        <li className={Styles.ListName}>
          <Link className={Styles.Link} to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
