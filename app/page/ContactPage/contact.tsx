import React from "react";
import classes from "@/app/page/ContactPage/contact.module.css";

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
                  <option value="menu-1">Menu 1</option>
                  <option value="menu-2">Menu 2</option>
                  <option value="menu-3">Menu 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="name">Name</label>
              </th>
              <td>
                <input className={classes.select} type="text" id="name" />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="email">Email</label>
              </th>
              <td>
                <input className={classes.select} type="email" id="email" />
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
                  id="detail"
                  cols={30}
                  rows={10}
                ></textarea>
              </td>
            </tr>
          </table>
        </form>
      </section>
    </>
  );
};

export default contact;
