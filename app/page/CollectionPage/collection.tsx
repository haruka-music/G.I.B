import React from "react";
import classes from "@/app/page/CollectionPage/collection.module.css";
import Image from "next/image";
import BS from "@/public/HomeImage/BS.jpg";
import Cn from "@/app/page/CollectionPage/Cn/cn";

const collection = () => {
  return (
    <>
      <article className={classes.article}>
        <div className={classes.bs}>
          <Image
            className={classes.image}
            src={BS}
            width={300}
            height={100}
            alt="image"
          />
        </div>
        <p>
          当社はデザイナーによる完全受注生産の為、１点１点手作業で製作いたします。
          <br></br>by GOSHI INOUE
        </p>
      </article>
      <h1 className={classes.header}> - Collection -</h1>
      <Cn />
    </>
  );
};

export default collection;
