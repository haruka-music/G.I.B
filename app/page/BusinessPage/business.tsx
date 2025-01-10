import React from "react";
import classes from "@/app/page/BusinessPage/business.module.css";

const business = () => {
  return (
    <>
      <section className={classes.section}>
        <h1 className={classes.header}>- 事業内容 -</h1>
        <p>
          ・革細工 <br />
          (Keyケース、財布、)
          <br />
          <br />
          ・アクセサリー <br />
          (コサージュ、ブローチ、ネックレス、イヤリング)
          <br />
          <br />
          ・その他小物 <br />
          (キーホルダー)
          <br />
          <br />
          イメージを伝えて頂ければご要望に合ったオリジナルアクセサリーもお作り出来ます
          <br />
          （一部、お時間を頂く可能性がございます）
        </p>
      </section>
    </>
  );
};

export default business;
