import React from "react";
import Image from "next/image";
import classes from "@/app/page/HomePage/MainPage/main.module.css";
import pick from "@/public/CollectionImag/pick.jpg";

const main = () => {
  return (
    <>
      <section className={classes.post}>
        <ul className={classes.ul}>
          <li className={classes.list}>
            <figure className={classes.figure}>
              <Image
                className={classes.image}
                src={pick}
                width={300}
                height={200}
                alt="image"
              />
              <figcaption className={classes.title}>
                <h2>ゴシックピック・ネックレス</h2>
                <p>2,000</p>
              </figcaption>
            </figure>
            <figure className={classes.figure}>
              <Image
                className={classes.image}
                src={pick}
                width={300}
                height={200}
                alt="image"
              />
              <figcaption className={classes.title}>
                <h2>ゴシックピック・ネックレス</h2>
                <p>2,000</p>
              </figcaption>
            </figure>
            <figure className={classes.figure}>
              <Image
                className={classes.image}
                src={pick}
                width={300}
                height={200}
                alt="image"
              />
              <figcaption className={classes.title}>
                <h2>ゴシックピック・ネックレス</h2>
                <p>2,000</p>
              </figcaption>
            </figure>
            <figure className={classes.figure}>
              <Image
                className={classes.image}
                src={pick}
                width={300}
                height={200}
                alt="image"
              />
              <figcaption className={classes.title}>
                <h2>ゴシックピック・ネックレス</h2>
                <p>2,000</p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
    </>
  );
};

export default main;
