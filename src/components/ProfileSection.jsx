import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import "./ProfileSection.css";
import { FaUser, FaCode, FaFolderOpen, FaGraduationCap } from "react-icons/fa";


const steps = [
  { id: "profile", icon: <FaUser />, title: "About Me" },
  { id: "skills", icon: <FaCode />, title: "Skills" },
  { id: "projects", icon: <FaFolderOpen />, title: "Projects" },
  { id: "education", icon: <FaGraduationCap />, title: "Education" },
];

const ProfileSection = () => {
  return (
    <div className="profile-wrapper">
      <section className="profile-section">
        <div className="profile-content">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="profile-text"
          >
            <h1>
              Hi, I’m <span className="highlight">Ellah Cuna</span>
            </h1>
            <p>
              A UI/Web Developer who turns ideas into modern, glowing digital beauty.
            </p>
          </motion.div>

        
          <div className="profile-robot-container">
            <div className="glow-wrapper">
              <div className="glow-circle small-circle"></div>
              <div className="glow-circle big-circle"></div>
              <div className="right-half-circle"></div>
              <Spline
                scene="https://prod.spline.design/GdhNYmlEDgnC2NiC/scene.splinecode"
                className="robot"
              />
            </div>
          </div>
        </div>

       
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

     
        <div className="nav-stepper">
          {steps.map((step) => (
            <div key={step.id} className="step-item">
              <a href={`#${step.id}`} className="step-link">
                <div className="step-icon-circle">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="sm:text-[2rem] md:text-[2.5rem] text-[2rem] lg:text-[3rem] text-cyan-500"
                  >
                    {step.icon}
                  </motion.div>
                </div>
                <span className="step-label">{step.title}</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfileSection;
