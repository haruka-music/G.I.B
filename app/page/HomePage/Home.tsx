import React from "react";
import classes from "@/app/page/HomePage/Home.module.css";
import Image from "next/image";
import main from "@/public/HomeImage/main.jpeg";
import BS from "@/public/HomeImage/logo-cat2.png";
import Main from "@/app/page/HomePage/MainPage/main";
import Aside from "@/app/page/HomePage/AsidePage/aside";

const Home = () => {
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
      <div className={classes.contrainer}>
        <Main />
        <Aside />
        <section className={classes.section}>
          <h1 className={classes.headline}>事業内容</h1>
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
      </div>
    </>
  );
};

export default Home;
