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
              <th>Menu</th>
              <td>
                <select name="" id="">
                  <option value="menu-1">Menu 1</option>
                  <option value="menu-2">Menu 2</option>
                  <option value="menu-3">Menu 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
          </table>
        </form>
      </section>
    </>
  );
};

export default contact;
