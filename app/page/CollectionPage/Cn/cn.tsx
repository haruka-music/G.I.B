import React from "react";
import Image from "next/image";
import classes from "@/app/page/CollectionPage/Cn/cn.module.css";
import pick from "@/public/CollectionImag/pick.jpg";
import rod from "@/public/CollectionImag/1000Rod.jpg";
import maria from "@/public/CollectionImag/calmMARIA.jpg";
import rosario from "@/public/CollectionImag/rosario.jpg";

const cn = () => {
  return (
    <>
      <section className={classes.post}>
        <ul className={classes.ul}>
          <li className={classes.list}>
            <figure className={classes.figure}>
              <Image className={classes.image} src={pick} alt="image" />
              <figcaption className={classes.title}>
                <h2>ゴシックピック・ネックレス</h2>
                <p>2,000</p>
              </figcaption>
            </figure>
            <figure className={classes.figure}>
              <Image
                className={classes.image}
                src={maria}
                width={300}
                height={200}
                alt="image"
              />
              <figcaption className={classes.title}>
                <h2>MARIA・ネックレス</h2>
                <p>3,000</p>
              </figcaption>
            </figure>
            <figure className={classes.figure}>
              <Image
                className={classes.image}
                src={rod}
                width={300}
                height={200}
                alt="image"
              />
              <figcaption className={classes.title}>
                <h2>千年ロッド・2連ネックレス</h2>
                <p>1,000</p>
              </figcaption>
            </figure>
            <figure className={classes.figure}>
              <Image
                className={classes.image}
                src={rosario}
                width={300}
                height={200}
                alt="image"
              />
              <figcaption className={classes.title}>
                <h2>ロザリオ・ネックレス</h2>
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
                src={maria}
                width={300}
                height={200}
                alt="image"
              />
              <figcaption className={classes.title}>
                <h2>MARIA・ネックレス</h2>
                <p>3,000</p>
              </figcaption>
            </figure>
            <figure className={classes.figure}>
              <Image
                className={classes.image}
                src={rod}
                width={300}
                height={200}
                alt="image"
              />
              <figcaption className={classes.title}>
                <h2>千年ロッド・2連ネックレス</h2>
                <p>1,000</p>
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
                src={maria}
                width={300}
                height={200}
                alt="image"
              />
              <figcaption className={classes.title}>
                <h2>MARIA・ネックレス</h2>
                <p>3,000</p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
    </>
  );
};

export default cn;
