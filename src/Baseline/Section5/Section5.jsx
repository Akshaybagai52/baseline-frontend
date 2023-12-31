import React from "react";
import "../Section5/Section5.less";
import { motion, useAnimation } from "framer-motion";
const Section5 = () => {
  return (
    <>
      <div className="container py-5">
        <div className="col-12 count-matters-box ">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0" }}
            transition={{ duration: 1 }}
          >
            <h1
              style={{
                color: "#444345",
                lineHeight: "50px",
                fontWeight: "700",
                fontSize: "43px",
              }}
            >
              SOME COUNT THAT{" "}
              <span style={{ color: " rgb(187, 55, 42)" }}>MATTERS</span>{" "}
            </h1>
          </motion.div>
          <p
            style={{
              color: "#444345",
              lineHeight: "28px",
              fontWeight: "400",
              fontSize: "18px",
              padding: "0",
            }}
          >
            Our achievement in the journey depicted in numbers
          </p>
        </div>
        <div className="row box-wrap">
          <div className="col-12 col-lg-3 box">
            <div className="count-up">
              <div className="counter-text">
                <p className="counter-count">2000</p>
                <h3>Clients Worldwide</h3>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 box">
            <div className="count-up">
              <div className="counter-text">
                <p className="counter-count">5000</p>
                <h3>Projects Completed</h3>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 box">
            <div className="count-up">
              <div className="counter-text">
                <p className="counter-count">150</p>
                <h3>Employees</h3>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 box">
            <div className="count-up">
              <div className="counter-text">
                <p className="counter-count">10</p>
                <h3>Years In Business</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;