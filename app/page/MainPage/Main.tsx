import React from "react";
import classes from "@/app/page/MainPage/Main .module.css";
import Image from "next/image";
import main from "@/public/HomeImage/main.jpeg";
import BS from "@/public/HomeImage/logo-cat2.png";

const Main = () => {
  return (
    <>
      <div className={classes.MainImage}>
        <Image
          className={classes.image}
          src={main}
          width={300}
          height={200}
          alt="image"
        />
      </div>
      <article>
        <div className={classes.BS}>
          <Image
            className={classes.image}
            src={BS}
            width={300}
            height={200}
            alt="image"
          />
        </div>
        <p>
          当社はデザイナーによる完全受注生産の為、１点１点手作業で製作いたします。
          <br></br>by GOSHI INOUE
        </p>
      </article>
    </>
  );
};

export default Main;
