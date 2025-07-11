import React from "react";
import css from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { data } from "../../data.jsx";

export const NavBar = () => {
  return (
    <div className={css.NavBar}>
        <div className={css.Logo}>
            <span className={css.LogoAnim}>L</span>
            <span className={css.LogoAnim}>O</span>
            <span className={css.LogoAnim}>G</span>
            <span className={css.LogoAnim}>O</span>
        </div>
      <div className={css.menu}>
        {data.map((link, id) => {
          return (
            <Link
              className={css.link}
              style={link.style}
              key={id}
              to={link.route}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
