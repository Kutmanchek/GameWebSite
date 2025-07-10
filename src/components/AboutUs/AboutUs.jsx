import React from "react";
import css from "./AboutUs.module.css";
import cat from "../../assets/stray.png";
import vector from "../../assets/Vector.png";

export const AboutUs = () => {
  return (
    <div className={css.container}>
      <div className={css.first}>
        <div className={css.text}>
          <p className={css.home}>
            Home &gt; <span>About us</span>
          </p>
          <p className={css.bold}>
            <span className={css.spanBold}>Lorem Ipsum is simply</span> <br />
            <span className={css.spanBold}>
              dummy text of the printing
            </span>{" "}
            <br />
            <span className={css.spanBold}>and.</span>
          </p>
          <p className={css.regular}>
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the <br />
            industry's standard dummy text ever since the 1500s.
          </p>
          <button>
            Get in touch <img src={vector} />
          </button>
        </div>
        <div style={{ position: "relative", display: "inline-block" }}>
          <img src={cat} style={{ display: "block", width: "100%" }} />

          <div
            style={{
              position: "absolute",
              bottom: "0.5px",
              background: "#333333",
              color: "white",
              padding: "23px 43px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "16px",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              &larr;
            </button>

            <span>1 of 2</span>

            <button
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
