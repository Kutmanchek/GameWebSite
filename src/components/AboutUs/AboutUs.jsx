import React from "react";
import css from "./AboutUs.module.css";
import cat from "../../assets/stray.png";
import vector from "../../assets/Vector.png";
import girl from "../../assets/girl.png";
import avatar from "../../assets/avatar.png";
import peter from "../../assets/peter.png";
import peter1 from "../../assets/peter1.png";
import peter2 from "../../assets/peter2.png";

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
          <img
            src={cat}
            style={{ display: "block", width: "46,1875rem", height: "41rem" }}
          />

          <div className={css.of}>
            <button className={css.leftButton}>&larr;</button>

            <span>1 of 2</span>

            <button className={css.rightButton}>&rarr;</button>
          </div>
        </div>
      </div>
      <div className={css.second}>
        <p className={css.why}>Why work with us</p>
        <div className={css.card3}>
          <div className={css.card}>
            <p className={css.buton} style={{ backgroundColor: "#b000dc1c" }}>
              Lorem ipsum
            </p>
            <div className={css.title}>
              <p className={css.short}>Lorem ipsum</p>
              <p className={css.long}>
                Lorem Ipsum is simply dummy text of the <br />
                printing and typesetting industry. Lorem <br />
                Ipsum has been the industry's standard <br />
                dummy text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className={css.card}>
            <p className={css.buton} style={{ backgroundColor: "#dc42001c" }}>
              Lorem ipsum
            </p>
            <div className={css.title}>
              <p className={css.short}>Lorem ipsum</p>
              <p className={css.long}>
                Lorem Ipsum is simply dummy text of the <br />
                printing and typesetting industry. Lorem <br />
                Ipsum has been the industry's standard <br />
                dummy text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className={css.card}>
            <p className={css.buton} style={{ backgroundColor: "#00dc8d1c" }}>
              Lorem ipsum
            </p>
            <div className={css.title}>
              <p className={css.short}>Lorem ipsum</p>
              <p className={css.long}>
                Lorem Ipsum is simply dummy text of the <br />
                printing and typesetting industry. Lorem <br />
                Ipsum has been the industry's standard <br />
                dummy text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.third}>
        <div className={css.photo}>
          <img src={girl} style={{ width: "496px", height: "490px" }} />
        </div>
        <div className={css.block}>
          <div>
            <p style={{ fontSize: "16px", fontWeight: "500" }}>Lorem ipsum</p>
            <div style={{ display: "grid", rowGap: "14px" }}>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  lineHeight: "157.5%",
                }}
              >
                Lorem Ipsum is simply dummy text <br />
                of the printing and typesetting <br />
                industry.
              </p>
              <p style={{ fontSize: "16px", lineHeight: "202.5%" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
                <br />
                industry. Lorem Ipsum has been the industry's standard dummy{" "}
                <br />
                text ever since the 1500s, when an unknown printer took a galley
                of <br />
                type and scrambled it to make a type specimen book. It has{" "}
                <br />
                survived not only five centuries,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.fourth}>
        <div className={css.cards}>
          <p style={{ fontSize: "25px", fontWeight: "600", paddingLeft: "5%" }}>
            Our Team
          </p>
          <div className={css.peter}>
            <div className={css.card4}>
              <img src={peter} />
              <div>
                <p style={{ fontSize: "19px", fontWeight: "600" }}>
                  John peter
                </p>
                <p
                  style={{
                    color: "#E8E8E8",
                    fontSize: "16px",
                    fontWeight: "300",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  COO
                </p>
              </div>
            </div>
            <div className={css.card4}>
              <img src={peter1} />
              <div>
                <p style={{ fontSize: "19px", fontWeight: "600" }}>
                  John peter
                </p>
                <p
                  style={{
                    color: "#E8E8E8",
                    fontSize: "16px",
                    fontWeight: "300",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  COO
                </p>
              </div>
            </div>
            <div className={css.card4}>
              <img src={peter2} />
              <div>
                <p style={{ fontSize: "19px", fontWeight: "600" }}>
                  John peter
                </p>
                <p
                  style={{
                    color: "#E8E8E8",
                    fontSize: "16px",
                    fontWeight: "300",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  COO
                </p>
              </div>
            </div>
            <div className={css.card4}>
              <img src={avatar} />
              <div>
                <p style={{ fontSize: "19px", fontWeight: "600" }}>
                  John peter
                </p>
                <p
                  style={{
                    color: "#E8E8E8",
                    fontSize: "16px",
                    fontWeight: "300",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  COO
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.search}>
          <div className={css.content}>
            <div className={css.top}>
              <p style={{ fontSize: "30px", fontWeight: "600" }}>Lorem Ipsum</p>
              <p style={{ fontSize: "16px", lineHeight: "187.5%" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
                <br /> industry.
              </p>
            </div>
            <div className={css.bottom}>
              <div className={css.tb}>
                <div className={css.stay}>
                  <p style={{fontSize:"30px", fontWeight:"500"}}>Stay in the loop</p>
                  <p style={{fontSize:"17px", lineHeight:"auto"}}>
                    Subscribe to receive the latest news and updates about TDA.{" "}
                    <br /> We promise not to spam you!
                  </p>
                </div>
                <div className={css.email}>
                  <input type="email" placeholder="Enter email address" />
                  <button>Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
