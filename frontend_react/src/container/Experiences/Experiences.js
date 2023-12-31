// import { Tooltip as ReactTooltip } from "react-tooltip";
// import { AppWrap } from "../../wrapper";
import { AppWrap, MotionWrap } from "../../wrapper";
// import { client } from "../../client";
// import Tooltip from '@mui/material/Tooltip';
import "./Experiences.scss";
import React, { useState, useEffect } from "react";
import { client, urlFor } from "../../client";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";


const Experiences = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certifications"]';
    client.fetch(query).then((data) => {
      setCertifications(data);
    });
  }, []);
  console.log(certifications, "Certifications Array");
  // const [experiences, setExperiences] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';

  //   client.fetch(query).then((data) => {
  //     setExperiences(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text" style={{ color: "white" }}>
        Education and <span style={{ color: "#483CC2" }}>Work Experience</span>
      </h2>
      <div className="app__skills-exp">
        {/* {experiences.map((experience) => ( */}
        <motion.div className="app__skills-exp-item">
          <>
            <div className="education education22">
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  Aug 2019 - Mar 2023
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                {/* {experience.works.map((work) => ( */}
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    // data-for={work.name}
                    // key={work.name}
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
                    {/* <p className="p-text-desc" style={{ color: "#cbcbcb" }}>IIIT Nuzvid</p> */}
                  </motion.div>
                  {/* <Tooltip title={"Work Description"} className="p-text-desc">
                    <button sx={{ m: 1 }}>{work.desc}</button>
                  </Tooltip> */}
                </>
                {/* ))} */}
              </motion.div>
            </div>
            <div className="education">
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  Jul 2023 - Nov 2023
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                {/* {experience.works.map((work) => ( */}
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    // data-for={work.name}
                    // key={work.name}
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
                    {/* <p className="p-text-desc" style={{ color: "#cbcbcb" }}></p> */}
                  </motion.div>
                  {/* <Tooltip title={"Work Description"} className="p-text-desc">
                    <button sx={{ m: 1 }}>{work.desc}</button>
                  </Tooltip> */}
                </>
                {/* ))} */}
              </motion.div>
            </div>
          </>
        </motion.div>
        {/* ))} */}
      </div>
      <div className="app__skills-exp expp">
        {/* {experiences.map((experience) => ( */}
        <motion.div className="app__skills-exp-item" style={{ display: "flex", justifyContent:"center", alignItems:"center"}}>
          <>
            <div className="experience">
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  2023 Jul - 2023 Nov
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                {/* {experience.works.map((work) => ( */}
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    // data-for={work.name}
                    // key={work.name}
                  >
                    <h4 className="bold-text" style={{ color: "white" }}>
                      Frontend Developer
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
                  {/* <Tooltip title={"Work Description"} className="p-text-desc">
                    <button sx={{ m: 1 }}>{work.desc}</button>
                  </Tooltip> */}
                </>
                {/* ))} */}
              </motion.div>
            </div>
            <div className="experience education223">
              <div className="app__skills-exp-year">
                {/* <p className="bold-text" style={{ color: "#483CC2" }}>
                  2022 Jul - 2023 Mar
                </p> */}
              </div>
              <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__cert-portfolio"
      >
        {certifications.map((certification) => (
          <div className="certifications__main">
            <div className="app__cert-img app__flex">
              <img
                src={urlFor(certification.imgUrl)}
                alt={certification.certificationName}
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__cert-hover app__flex"
              >
                <a
                  href={certification.credentialURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div
              className="app__cert-content app__flex"
              style={{ color: "white" }}
            >
              <h4 className="bold-text">{certification.certificationName}</h4>
              <p className="p-text">{certification.issuingOrg}</p>
            </div>
          </div>
        ))}
      </motion.div>
                {/* {experience.works.map((work) => ( */}
                <>
                  {/* <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    // data-for={work.name}
                    // key={work.name}
                  >
                    <h4 className="bold-text" style={{ color: "white" }}>
                      Trainee Software Engineer
                    </h4>
                    <p
                      className="p-text"
                      style={{
                        color: "#4f9ed7",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      Preludesys Ind Ltd
                    </p>
                    <p className="p-text-desc" style={{ color: "#cbcbcb" }}>
                      ● Worked on a real-time project for 7 months as a
                      Fullstack Support Developer for a US-based project named
                      Recovery Assist Platform.
                    </p>
                    <p
                      className="p-text-desc para-none"
                      style={{ color: "#cbcbcb" }}
                    >
                      ● Leveraged mastery of React JS, CSS, and JavaScript to
                      build top-quality code for diverse projects.
                    </p>
                    <p
                      className="p-text-desc para-none"
                      style={{ color: "#cbcbcb" }}
                    >
                      ● Got trained in Dynamics 365 Business Central and CRM as
                      a Technical Developer Consultant.
                    </p>
                  </motion.div> */}
                  {/* <Tooltip title={"Work Description"} className="p-text-desc">
                    <button sx={{ m: 1 }}>{work.desc}</button>
                  </Tooltip> */}
                </>
                {/* ))} */}
            </div>
          </>
        </motion.div>
        {/* ))} */}
      </div>
    </>
  );
};

// export default Experiences
// export default AppWrap(Experiences, "app__skills-exp"),'experience';
export default AppWrap(
  MotionWrap(Experiences, "app__about"),
  "experience",
  "app__bg"
);
