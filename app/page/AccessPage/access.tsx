import React from "react";
import classes from "@/app/page/AccessPage/access.module.css";

const access = () => {
  return (
    <>
      <section className={classes.section}>
        <h1 className={classes.header}> - アクセス -</h1>
        <p>
          営業時間・・・9:00〜18:00
          <br />
          定休日・・・土、日、祝日
          <br />
          最寄駅・・・阪急十三駅、徒歩5分
        </p>

        <figure className={classes.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.3993179305935!2d135.47967422595053!3d34.7203277229127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e5d201ff48ef%3A0x20ed63b5efed9710!2z5Y2B5LiJ6aeF!5e0!3m2!1sja!2sjp!4v1736300710404!5m2!1sja!2sjp"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </figure>
      </section>
    </>
  );
};

export default access;
