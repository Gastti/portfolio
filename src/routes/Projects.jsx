import { useState, useEffect } from "react";
import "./Projects.css";
import Navbar from "../components/navbar/Navbar";
import Section from "../components/section/Section";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Background from "../assets/gradientbg.png";

function ProjectsPage() {
  const [language, setLanguage] = useState("");
  useEffect(() => {
    setLanguage(window.navigator.language);
  }, []);

  const content = [
    {
      esp: {
        introduction: {
          title: "Mis Proyectos",
          message:
            "He desarrollado muchos proyectos a lo largo de mi corta carrera como desarrollador, estos son algunos de los que mas disfrute de hacer. ",
        },
      },
      eng: {
        introduction: {
          title: "My Projects",
          message:
            "I've developed many projects throughout this last year as a developer, these are some of the ones I most enjoy doing.",
        },
      },
    },
  ];

  const contentOn = language == "es-ES" ? content[0].esp : content[0].eng;
  const { title: titleIntro, message: messageIntro } = contentOn.introduction;
  return (
    <div>
      <Navbar lang={language} />
      <div className="background-container">
        <div className="dinamic-background">
          <img src={Background} />
        </div>
      </div>
      <Section id="introduction">
        <div className="introduction-content">
          <div className="introduction-message">
            <h1 className="introduction-title">{titleIntro}</h1>
            <h3 className="introduction-subtitle">{messageIntro}</h3>
          </div>
        </div>
      </Section>
      <Section id="projects">
        <Projects lang={language} />
      </Section>
      <Section id="contact">
        <Contact lang={language} />
      </Section>
      <Section id="footer">
        <Footer lang={language} />
      </Section>
    </div>
  );
}

export default ProjectsPage;
