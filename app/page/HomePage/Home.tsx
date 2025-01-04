import React from "react";
import classes from "@/app/page/HomePage/Home.module.css";
import Image from "next/image";
import main from "@/public/HomeImage/main.jpeg";
import BS from "@/public/HomeImage/BS.jpg";
import Main from "@/app/page/HomePage/MainPage/main";
import Aside from "@/app/page/HomePage/AsidePage/aside";
import Button from "@/app/components/elements/button/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={classes.MainImage}>
        <Image
          className={classes.image}
          src={main}
          width={1200}
          height={200}
          alt="image"
        />
      </div>
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
      <h1 className={classes.PostHeadline}>- Collection -</h1>
      <div className={classes.contrainer}>
        <Main />
        <Aside />
      </div>
      <section className={classes.section}>
        <h1 className={classes.headline}>- 事業内容 -</h1>
        <p>
          ・革細工
          <br />
          ・アクセサリー
          <br />
          ・その他小物
          <br />
          イメージを伝えて頂ければご要望に合ったオリジナルアクセサリーもお作り出来ます
          <br />
          （一部、お時間を頂く可能性がございます）
        </p>
      </section>
      <section className={classes.section}>
        <h1 className={classes.headline}>- アクセス -</h1>
        <p>
          営業時間・・・9:00〜18:00
          <br />
          定休日・・・土、日、祝日
        </p>
      </section>
      <section className={classes.section}>
        <h1 className={classes.headline}>- Contact -</h1>
        <p className={classes.description}>
          ご希望、ご質問等の場合はこちらのメールにてお伝え下さい
        </p>
        <Link className={classes.Link} to="/Contact">
          <Button />
        </Link>
      </section>
    </>
  );
};

export default Home;
