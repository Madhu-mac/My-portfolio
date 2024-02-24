import { AppWrap, MotionWrap } from "../../wrapper";
import "./Experiences.scss";
import React from "react";
import { motion } from "framer-motion";

const Experiences = () => {

  return (
    <>
      <h2 className="head-text" style={{ color: "white" }}>
        Education and <span style={{ color: "#483CC2" }}>Work Experience</span>
      </h2>
      <div className="app__skills-exp">
        <motion.div className="app__skills-exp-item">
          <>
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
          </>
        </motion.div>
      </div>
      <div className="app__skills-exp expp" style={{ width: "100%"}}>
        <motion.div
          className="app__skills-exp-item"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <>
            <div className="experience">
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  2023 Jul - 2023 Nov
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
                      Full stack Developer
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
                    <p className="p-text-desc" style={{ color: "#cbcbcb" }}>
                      ● Demonstrated expertise as a MERN stack developer with a
                      strong track record in building secure and efficient
                      servers.
                    </p>
                    <p
                      className="p-text-desc para-none"
                      style={{ color: "#cbcbcb" }}
                    >
                      ● Proficient in writing clean, maintainable code, and
                      implementing best practices for optimal performance.
                    </p>
                    <p
                      className="p-text-desc para-none"
                      style={{ color: "#cbcbcb" }}
                    >
                      ● A dedicated team member in Cohort ”100xDevs,” actively
                      contributing to the development of a MonoRepo
                      architecture, Docker implementation, Prisma ORM
                      integration, and Trpc CI/CD pipeline. Collaborated
                      effectively with fellow members, fostering a collaborative
                      environment, and actively contributed to open source
                      initiatives.
                    </p>
                  </motion.div>
                </>
              </motion.div>
            </div>
            <div className="experience">
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  2023 Aug - 2024 Jan
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
                      MERN stack Developer
                    </h4>
                    <p
                      className="p-text"
                      style={{
                        color: "#4f9ed7",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      Techsophy
                    </p>
                    <p className="p-text-desc" style={{ color: "#cbcbcb" }}>
                      ● Worked on a real-time project for 4 months as a
                      Fullstack Developer Intern and helped the to team build
                      various components, added new features, Fixing UI issues,
                      and maintained databases workflow.
                    </p>
                    <p
                      className="p-text-desc para-none"
                      style={{ color: "#cbcbcb" }}
                    >
                      ● Implemented cutting-edge technologies including React
                      JS, Tailwind CSS, and JavaScript to build top-quality
                      code, resulting in a 30% increase in website performance
                      and a 20% reduction in customer support issues for diverse
                      projects
                    </p>
                    <p
                      className="p-text-desc para-none"
                      style={{ color: "#cbcbcb" }}
                    >
                      ● Proactively contributed to solving real-time project
                      complexities, ensuring a seamless and enhanced user
                      experience.
                    </p>
                  </motion.div>
                </>
              </motion.div>
            </div>
            
      <div className="experience" >
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  2024 Feb - present 
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
                      Full stack Developer
                    </h4>
                    <p
                      className="p-text"
                      style={{
                        color: "#4f9ed7",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      Drooid
                    </p>
                    <p className="p-text-desc" style={{ color: "#cbcbcb" }}>
                      ●  Founding member of Drooid, a cutting-edge news app featuring AI-generated content and social media integration.
                    </p>
                    <p
                      className="p-text-desc para-none"
                      style={{ color: "#cbcbcb" }}
                    >
                      ● Specializing in React Native for intuitive frontend experiences. Implemented SQL and Sequelize for optimized backend
 databases, reducing query response time by 25% and enhancing efficiency by 30%.
                    </p>
                    <p
                      className="p-text-desc para-none"
                      style={{ color: "#cbcbcb" }}
                    >
                      ● Played a key role in backend development using Node.js, integrating advanced logic to enhance app functionality.
                    </p>
                  </motion.div>
                </>
              </motion.div>
            </div>
          </>
        </motion.div>
      </div>
    </>
  );
};


export default AppWrap(
  MotionWrap(Experiences, "app__about"),
  "experience",
  "app__bg"
);
