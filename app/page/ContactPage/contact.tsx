import React from "react";
import classes from "@/app/page/ContactPage/contact.module.css";
import Button from "@/app/components/elements/button/button";

const contact = () => {
  return (
    <>
      <section className={classes.section}>
        <h1 className={classes.headline}>- Contact -</h1>

        <form action="" className={classes.form}>
          <table className={classes.table}>
            <tr>
              <th>
                <label htmlFor="menu">Menu</label>
              </th>
              <td>
                <select className={classes.select} name="" id="menu">
                  <option value="question-1">アクセサリーについて</option>
                  <option value="question-2">当社について</option>
                  <option value="other">その他</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="name">Name</label>
              </th>
              <td>
                <input
                  className={classes.select}
                  type="text"
                  id="name"
                  placeholder="山田 太郎"
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="email">Email</label>
              </th>
              <td>
                <input
                  className={classes.select}
                  type="email"
                  id="email"
                  placeholder="inoue.g@icloud.com"
                />
              </td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>
                <label>
                  <input
                    className={classes.input}
                    type="radio"
                    name="gender"
                    value="male"
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    className={classes.input}
                    type="radio"
                    name="gender"
                    value="femail"
                  />{" "}
                  Femail
                </label>
                <label>
                  <input
                    className={classes.input}
                    type="radio"
                    name="gender"
                    value="other"
                  />{" "}
                  Other
                </label>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="detail">Detail</label>
              </th>
              <td>
                <textarea
                  className={classes.textarea}
                  placeholder="(ご質問などこちら)"
                  id="detail"
                  cols={30}
                  rows={10}
                ></textarea>
              </td>
            </tr>
          </table>
          <Button />
        </form>
      </section>
    </>
  );
};

export default contact;
