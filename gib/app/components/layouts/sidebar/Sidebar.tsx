import React from "react";

const Sidebar = () => {
  return (
    <>
      <nav className="header">
        <div className="logo"></div>
        <ul className="nav-list">
          <li className="navitem">
            <a href="">トップ</a>
          </li>
          <li className="navitem">
            <a href="">コレクション</a>
          </li>
          <li className="navitem">
            <a href="">事業内容</a>
          </li>
          <li className="navitem">
            <a href="">事例紹介</a>
          </li>
          <li className="navitem">
            <a href="">アクセス</a>
          </li>
          <li className="navitem">
            <a href="">お問い合わせ</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
