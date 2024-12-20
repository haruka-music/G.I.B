import React from "react";
import Image from "next/image";
import classes from "@/app/page/HomePage/AsidePage/aside.module.css";
import rose from "@/public/CollectionImag/rose.jpg";
import yes from "@/public/CollectionImag/yes.jpg";
import bird from "@/public/CollectionImag/bird.jpg";

const aside = () => {
  return (
    <>
      <div className={classes.aside}>
        <h1>- New Production -</h1>
        <figure className={classes.figure}>
          <Image
            className={classes.image}
            src={rose}
            width={300}
            height={200}
            alt="image"
          />
          <figcaption className={classes.title}>
            <h2>- マゼンタローズ・コサージュ -</h2>
          </figcaption>
        </figure>
        <figure className={classes.figure}>
          <Image
            className={classes.image}
            src={yes}
            width={300}
            height={200}
            alt="image"
          />
          <figcaption className={classes.title}>
            <h2>- キリスト・ネックレス -</h2>
          </figcaption>
        </figure>
        <figure className={classes.figure}>
          <Image
            className={classes.image}
            src={bird}
            width={300}
            height={200}
            alt="image"
          />
          <figcaption className={classes.title}>
            <h2>- 小鳥・ネックレス -</h2>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default aside;
