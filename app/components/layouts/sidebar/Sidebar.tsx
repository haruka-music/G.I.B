import React from "react";
import classes from "@/app/components/layouts/sidebar/Sidbar.module.css";
import Image from "next/image";
import Logo from "@/public/HomeImage/logo.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav className={classes.header}>
        <div className={classes.logo}>
          <Image
            className={classes.image}
            src={Logo}
            width={100}
            height={100}
            alt="image"
          />
        </div>
        <ul className={classes.navlist}>
          <li className={classes.navitem}>
            <Link className={classes.Link} to="/">
              Home
            </Link>
          </li>
          <li className={classes.navitem}>
            <Link className={classes.Link} to="/">
              コレクション
            </Link>
          </li>
          <li className={classes.navitem}>
            <Link className={classes.Link} to="/">
              事業内容
            </Link>
          </li>
          <li className={classes.navitem}>
            <Link className={classes.Link} to="/">
              事例紹介
            </Link>
          </li>
          <li className={classes.navitem}>
            <Link className={classes.Link} to="/">
              アクセス
            </Link>
          </li>
          <li className={classes.navitem}>
            <Link className={classes.Link} to="/Contact">
              お問合せ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
