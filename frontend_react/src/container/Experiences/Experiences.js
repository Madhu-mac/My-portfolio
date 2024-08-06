import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PiInfinityBold } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { FaDev } from "react-icons/fa";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Experiences.scss";

const Experiences = () => {
  return (
    <div style={{ width: "100%" }} className="app__skills-exp">
      <h2 className="head-text" style={{ color: "white" }}>
        Work <span style={{ color: "#483CC2" }}>Experience</span>
      </h2>
      <div className="app__skills-exp-item">
        <motion.div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <VerticalTimeline className="custom-timeline2" lineColor="white">
            <VerticalTimelineElement
              className="vertical-timeline-element--right"
              date="Feb 2024 - Current"
              dateClassName="dateClass"
              contentArrowStyle={{
                borderRight: "7px solid rgb(33, 150, 243)",
              }}
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              iconStyle={{ background: "#fff", color: "rgb(33, 150, 243)" }}
              icon={<PiInfinityBold />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontWeight: "bold" }}
              >
                Drooid
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                MERN Full Stack Developer
              </h4>
              <p>
                - Initiated Drooid development, an AI-powered React Native news app, achieving an 80% user retention increase and 200+ active users within months.
                <br />
                - Built intuitive React Native interfaces, optimized SQL and Sequelize backend, cutting query response time by 35%.
                <br />- Augmented functionality with Node.js, reducing API call failures & improving data processing efficiency for increased reliability.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--left"
              date="May 2024 - Aug 2024"
              dateClassName="dateClass"
              contentArrowStyle={{
                borderRight: "7px solid rgb(33, 150, 243)",
              }}
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              iconStyle={{ background: "#fff", color: "rgb(33, 150, 243)" }}
              icon={<FaGoogle />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontWeight: "bold" }}
              >
                GirlScript Summer of Code | GSSoC24
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Open source contributor
              </h4>
              <p>
                - Enhanced GSSoC24 projects with Node.js, ReactJS, and MongoDB, boosting productivity by 30%, improving user experience.
                <br />
                - Coordinated with GitHub teams to reduce bugs by 40% and ensure successful code deployment, and solving complex issues.
                <br />- Create RESTful APIs, scalable architectures, and security measures. Increased solution efficiency and application performance.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--right"
              date="Aug 2023 - Jan 2024"
              dateClassName="dateClass"
              contentArrowStyle={{
                borderRight: "7px solid rgb(33, 150, 243)",
              }}
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              iconStyle={{ background: "#fff", color: "rgb(33, 150, 243)" }}
              icon={<GrTechnology />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontWeight: "bold" }}
              >
                Techsophy
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Full stack Developer Intern
              </h4>
              <p>
                - As a Fullstack Developer Intern, worked on a real-time project for 4 months, contributing to component building, feature addition, UI issue resolution, and database maintenance.
                <br />- Implemented React JS, Tailwind CSS, and JavaScript, resulting in a 30% performance boost and 20% fewer customer support issues across projects, demonstrated initiative by contributing to solving projects for an improved user experience.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--left"
              date="Jul 2023 - Nov 2023"
              dateClassName="dateClass"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(33, 150, 243)",
              }}
              iconStyle={{ background: "#fff", color: "rgb(33, 150, 243)" }}
              icon={<FaDev />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontWeight: "bold" }}
              >
                100xDevs Cohort
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                MERN Stack Development
              </h4>
              <p>
                - Demonstrated MERN stack expertise: Constructed robust, secure server infrastructures.
                <br />- Played a pivotal role in collaborative projects: Contributed to MonoRepo architecture, Docker implementation, Prisma ORM integration, and Trpc CI/CD pipeline, fostering collaboration.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--right"
              date="Jan 2023 - Jun 2023"
              dateClassName="dateClass"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(33, 150, 243)",
              }}
              iconStyle={{ background: "#fff", color: "rgb(33, 150, 243)" }}
              icon={<TbTriangleSquareCircle />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontWeight: "bold" }}
              >
                Preludesys
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Trainee Software Engineer
              </h4>
              <p>
                - Fullstack Support Developer: Provided support as a Fullstack Support Developer for the Recovery Assist Platform, a US-based project, for 7 months.
                <br /> - Technological Exposure: Gained hands-on experience with React JS, JavaScript, CSS, MUI, and Bootstrap throughout the project duration.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Experiences, "app__about"), "experience", "app__bg");
