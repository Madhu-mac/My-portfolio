import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Education.scss";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";

const Education = () => {
  return (
    <div className="app__skills-exp">
      <h2 className="head-text" style={{ color: "white" }}>
        Education
      </h2>
      <motion.div className="app__skills-exp-item">
        <VerticalTimeline className="custom-timeline" lineColor="white">
          <VerticalTimelineElement
            className="vertical-timeline-element--left "
            date="2024 - 2026"
            dateClassName="dateClass2"
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            iconStyle={{ background: "#fff", color: "rgb(33, 150, 243)" }}
            icon={<FaUniversity />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Masters in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Scaler Neovarsity
            </h4>
            <p>
              Pursuing Software Engineering with industry-relevant cirriculum.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--right"
            date="2019 - 2023"
            dateClassName="dateClass2"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "#fff", color: "rgb(33, 150, 243)" }}
            icon={<IoSchool />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              B.Tech
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rajiv Gandhi University of Knowledge technologies, Nuzvid-(IITN)
            </h4>
            <p>Mechanical Engineering</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--left"
            
            dateClassName="dateClass2"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "#fff", color: "rgb(33, 150, 243)" }}
            date="2016 - 2018"
            icon={<FaSchool />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Pre University Course
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rajiv Gandhi University of Knowledge technologies, Nuzvid-(IITN)
            </h4>
            <p>MPC</p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        {/* <>
          <div className="education education22">
            <div className="app__skills-exp-year">
              <p className="bold-text" style={{ color: "#483CC2" }}>
                Aug 2019 - Mar 2023
              </p>
            </div>
            <motion.div className="app__skills-exp-works">
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                >
                  <h4 className="bold-text" style={{ color: "white" }}>
                    B.tech(Mechanical Engineering)
                  </h4>
                  <p
                    className="p-text"
                    style={{
                      color: "#4f9ed7",
                      fontStyle: "italic",
                      fontWeight: "bold",
                    }}
                  >
                    IIIT Nuzvid
                  </p>
                </motion.div>
              </>
            </motion.div>
          </div>
          <div className="education">
            <div className="app__skills-exp-year">
              <p className="bold-text" style={{ color: "#483CC2" }}>
                Jul 2023 - Nov 2023
              </p>
            </div>
            <motion.div className="app__skills-exp-works">
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                >
                  <h4 className="bold-text" style={{ color: "white" }}>
                    MERN Stack-Open source Development
                  </h4>
                  <p
                    className="p-text"
                    style={{
                      color: "#4f9ed7",
                      fontStyle: "italic",
                      fontWeight: "bold",
                    }}
                  >
                    100xDevs
                  </p>
                </motion.div>
              </>
            </motion.div>
          </div>
        </> */}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Education, "app__about"),
  "education",
  "app__bg"
);
