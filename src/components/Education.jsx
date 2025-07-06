import { motion } from "framer-motion";
import "./EducationSection.css";


import bvLogo from "../assets/bowvalleyfaculty_logo.png";
import ustLogo from "../assets/ust-logo.png";
import { FaChartBar, FaKey } from "react-icons/fa";

import {
  SiMongodb, SiMysql, SiCplusplus, SiJavascript
} from "react-icons/si";

import {
  FaReact, FaNodeJs, FaAws, FaJava, FaGitAlt, FaHtml5, FaCss3Alt,
  FaFigma, FaGithub, FaDatabase, FaCode, FaWindows, FaCube
} from "react-icons/fa";


const skills = [
  {
    title: "Frontend Development",
    skills: [
      { label: "React.js", icon: <FaReact /> },
      { label: "MUI", icon: <FaHtml5 /> },
      { label: "Vite", icon: <FaCss3Alt /> },
      { label: "Native CSS", icon: <FaCss3Alt /> },
      { label: "HTML5", icon: <FaHtml5 /> }
    ]
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { label: "Node.js", icon: <FaNodeJs /> },
      { label: ".NET Core", icon: <FaWindows /> },
      { label: "JWT Auth", icon: <FaKey /> },
      { label: "Visual Studio", icon: <FaCode /> }
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      { label: "Java", icon: <FaJava /> },
      { label: "JavaScript", icon: <SiJavascript /> },
      { label: "C#", icon: <FaCode /> },
      { label: "C++", icon: <SiCplusplus /> }
    ]
  },
  {
    title: "Databases",
    skills: [
      { label: "MongoDB", icon: <SiMongodb /> },
      { label: "MySQL", icon: <SiMysql /> },
      { label: "WAMP", icon: <FaDatabase /> },
      { label: "Microsoft Access", icon: <FaDatabase /> },
      { label: "SQL", icon: <FaDatabase /> }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { label: "Git", icon: <FaGitAlt /> },
      { label: "GitHub", icon: <FaGithub /> },
      { label: "AWS", icon: <FaAws /> },
      { label: "Power BI", icon: <FaChartBar /> },
      { label: "Unreal Engine", icon: <FaCube /> }
    ]
  },
  {
    title: "Design",
    skills: [
      { label: "Figma", icon: <FaFigma /> },
      { label: "UI/UX Design", icon: <FaFigma /> }
    ]
  }
];

const educationList = [
  {
    year: "2025",
    school: "Bow Valley College",
    logo: bvLogo,
    details: [
      "Diploma in Software Development",
      "Technologies: MERN Stack, .NET Core, C#, Java, C++, SQL and DevOps",
    ],
  },
  {
    year: "2023",
    school: "University of Santo Tomas",
    logo: ustLogo,
    details: [
      "Bachelor of Science in Information Systems",
      "Focused on Data Analytics and Web Development",
      "Technologies: Power BI, Microsoft Access, SQL, MONGODB, HTML, CSS, and JavaScript",
    ],
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">

      <h2 className="education-title">🎓 Education</h2>
      <div className="education-list">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="education-card"
          >
            <div className="education-logo-year">
              <img
                src={edu.logo}
                alt={`${edu.school} logo`}
                className="school-logo"
              />
              <p className="education-year">{edu.year}</p>
            </div>

            <div className="education-text">
              <h3 className="school-name">{edu.school}</h3>
              <ul className="education-details">
                {edu.details.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      
      <div className="skills-section" id="skills">
        <h2 className="skills-title">🛠 Skills</h2>
        {skills.map((group, groupIndex) => (
          <div key={groupIndex} className="skill-category">
            <h3 className="skill-category-title">{group.title}</h3>
            <div className="skills-grid">
              {group.skills.map((skill, index) => (
                <div className="skill-pill" key={index}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-label">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
