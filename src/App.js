import React, { useState, useEffect } from 'react';
import { FaBriefcase,  FaGraduationCap, FaMedal, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoLogoReact } from 'react-icons/io5';
import { SiPython, SiDocker, SiTensorflow, SiPytorch, SiScikitlearn, SiApachekafka, SiApachespark, SiMicrosoftazure, SiDatabricks, SiPowerbi } from 'react-icons/si';


import { motion } from 'framer-motion';

import { FaAws, FaDatabase, FaBrain, FaChartBar } from 'react-icons/fa';
import { MdAnalytics, MdCloud } from 'react-icons/md';
import { BiData } from 'react-icons/bi';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { TbMathFunction } from 'react-icons/tb';
import { BsGear,BsCloud,BsDatabase,BsCodeSquare } from 'react-icons/bs';
import './App.css';
const nithi="https://media.licdn.com/dms/image/v2/D5603AQEo9MLvQorljw/profile-displayphoto-shrink_800_800/B56ZVBpTB9GoAk-/0/1740563100191?e=1753315200&v=beta&t=mDUdeOcHtAmwTdmqJEslWVJVtBeLJCxZjoR1X0LAi70"
const leanAssistImage = "https://static.vecteezy.com/system/resources/previews/027/222/039/non_2x/ai-artificial-intelligence-ai-generated-content-concept-artist-man-using-ai-art-assistant-to-generate-image-text-to-image-command-prompt-generates-technology-business-futuristic-transformation-photo.jpg"
const taas="https://arthajobboard.com/wp-content/uploads/2023/11/Contextual-Resume-Matching-new-img.png"
const plant="https://kj1bcdn.b-cdn.net/media/75868/crops.jpg"
const logg="https://thumbs.dreamstime.com/b/artificial-intelligence-ai-research-robot-cyborg-development-future-people-living-digital-data-mining-machine-learning-171270756.jpg"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <IoLogoReact className="logo-icon" />
          <h1>Nitheeswaran E</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

// Hero Section Component
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nitheeswaran E
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Data and AI Engineer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transforming data into intelligent solutions with cloud infrastructure and AI technologies
        </motion.p>
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#projects" className="btn primary-btn">View Projects</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </motion.div>
      </div>
      <div className="hero-animation">
        <div className="floating-icons">
          {/* Original Icons */}
          <SiPython className="floating-icon python" />
          <FaAws className="floating-icon aws" />
          <SiDocker className="floating-icon docker" />
          
          
          {/* New AI Related Icons */}
          <SiTensorflow className="floating-icon tensorflow" />
          <SiPytorch className="floating-icon pytorch" />
          <FaBrain className="floating-icon ai-brain" />
          <SiScikitlearn className="floating-icon scikit" />
          
          {/* New Data Related Icons */}
          <FaDatabase className="floating-icon database" />
          <BiData className="floating-icon big-data" />
          
          {/* Cloud and Analytics Icons */}
         
          <AiOutlineCloudServer className="floating-icon cloud-server" />
          <SiDatabricks className="floating-icon databricks" />
         
          
          {/* Additional Technical Icons */}
          <FaChartBar className="floating-icon charts" />
          <TbMathFunction className="floating-icon math" />
          <BsGear className="floating-icon mlops" />
          <MdCloud className="floating-icon cloud" />
        </div>
      </div>
    </section>
  );
};

// About Section Component
const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-title">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <div className="profile-img">
            <img src={nithi} alt="Nitheeswaran E" />
          </div>
        </div>
        <div className="about-text">
          <h3>Data and AI Engineer</h3>
          <p>
            I'm a dedicated Data and AI Engineer with 2 years of experience specializing in data processing 
            and AI-driven software solutions. I have expertise in cloud infrastructure design and natural 
            language processing, helping organizations transform their data into valuable insights.
          </p>
          <p>
            My technical journey has led me to excel in designing and implementing AI-powered solutions 
            using the latest technologies like OpenAI, Hugging Face, and various vector databases. I'm passionate 
            about building scalable cloud infrastructures on AWS and Azure, leveraging Infrastructure as Code for 
            reliable deployments.
          </p>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value">Nitheeswaran E</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">Coimbatore, India</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">nitheeswaran56@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">+91 9047224698</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="section-title">
        <h2>Work Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaBriefcase />
          </div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3>Data and AI Engineer</h3>
              <span className="company">Codincity</span>
              <span className="period">2024 - 2025</span>
            </div>
            <div className="timeline-body">
              <ul>
                <li>Designed and deployed AI-driven solutions using OpenAI, Hugging Face, and vector databases to enable intelligent data processing and retrieval</li>
                <li>Built scalable cloud infrastructures on AWS and Azure, leveraging Terraform and Infrastructure as Code for automated, reliable deployments</li>
                <li>Developed natural language interfaces for querying complex datasets, enhancing accessibility and efficiency through conversational AI</li>
                <li>Implemented monitoring and optimization strategies to improve system performance, reduce costs, and ensure high availability in cloud environments</li>
                <li>Created end-to-end pipelines for document and log processing using advanced AI models, enabling real-time insights and proactive issue resolution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const Projects = () => {
  
  const projects = [
    {
      id: 1,
      title: "Lean Assist",
      period: "2024 - 2025",
      description: "A project to improve query handling in ServiceNow and SharePoint. Designed Lean Assist AI to seamlessly integrate with ServiceNow and SharePoint for intelligently routing queries and delivering accurate context-driven responses using RCA documentation.",
      image: leanAssistImage,
      technologies: ["OpenAI", "ServiceNow", "SharePoint", "NLP", "Azure"]
    },
    {
      id: 2,
      title: "TAAS AI",
      period: "2024 - 2025",
      description: "A database query tool that enhances user interaction through conversational interfaces. Developed an NLP-powered database query tool enabling intuitive timesheet and data retrieval through conversational language with intelligent parsing and context understanding.",
      image: taas,
      technologies: ["NLP", "Databases", "Conversational AI", "Python", "SQL"]
    },
    {
      id: 3,
      title: "LOGSEEK AI",
      period: "2023 - 2024",
      description: "An AI system designed for effective log analysis and incident management. Built an AI-powered log analysis system for Azure using GPT models to automate issue detection and reduce incident response time.",
      image: logg,
      technologies: ["GPT", "Azure", "Log Analysis", "Python", "AI"]
    },
    {
      id: 4,
      title: "Medicinal Plant Detection Using GAN & Deep Learning",
      period: "2022 - 2023",
      description: "A machine learning project focused on plant detection using deep learning techniques. Achieved a 30% increase in AI model accuracy by integrating advanced neural networks with GAN.",
      image: plant,
      technologies: ["GAN", "Deep Learning", "Computer Vision", "Python", "Neural Networks"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-title">
        <h2>Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <motion.div 
            key={project.id} 
            className="project-card"
            whileHover={{ 
              y: -10,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <span className="project-period">{project.period}</span>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      icon: <BsCodeSquare />,
      skills: ["Python", "Java", "C", "C++", "R", "SQL", "MATLAB", "GIT"]
    },
    {
      category: "Data Analysis",
      icon: <MdAnalytics />,
      skills: ["Data Cleaning", "Data Visualization", "Exploratory Data Analysis", "NumPy", "Pandas", "Scikit-Learn"]
    },
    {
      category: "Databases",
      icon: <BsDatabase />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server"]
    },
    {
      category: "LLMs & Generative AI",
      icon: <BsGear />,
      skills: ["LangChain / LlamaIndex", "Prompt engineering", "Vector databases (FAISS ChromaDB)"]
    },
    {
      category: "Machine Learning",
      icon: <BsGear />,
      skills: ["Computer Vision", "Deep Learning", "Model Evaluation", "NLP", "Reinforcement Learning", "Supervised Learning"]
    },
    {
      category: "Cloud & DevOps",
      icon: <BsCloud />,
      skills: ["AWS", "Azure", "CI/CD Pipelines", "Docker", "Jenkins", "ServiceNow"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-title">
        <h2>Skills</h2>
        <div className="underline"></div>
      </div>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="skill-category-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.category}</h3>
            </div>
            <div className="skill-cards-container">
              {category.skills.map((skill, i) => (
                <motion.div 
                  key={i} 
                  className="skill-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
const Education = () => {
  return (
    <section id="education" className="education">
      <div className="section-title">
        <h2>Education</h2>
        <div className="underline"></div>
      </div>
      <div className="education-container">
        <motion.div 
          className="education-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="edu-icon">
            <FaGraduationCap />
          </div>
          <div className="edu-content">
            <h3>Bachelor's Degree in Artificial Intelligence and Data Science</h3>
            <p className="edu-institution">Mepco Schlenk Engineering College, Sivakasi, India</p>
            <p className="edu-gpa">GPA: 8.2</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Achievements Section Component
const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Innovative Champion 2024",
      description: "Award for pioneering new ideas in AI, driving innovation - Codincity"
    },
    {
      id: 2,
      title: "Hackathon 2023",
      description: "Champion under \"Agriculture and Development\" in a 2023"
    },
    {
      id: 3,
      title: "Resume Matching System",
      description: "Developed an AI-powered resume parser that automatically matches candidate CVs with job descriptions, generating compatibility scores with 85% accuracy"
    },
    {
      id: 4,
      title: "ServiceNow Integration with NLP-based Ticket Retrieval",
      description: "Developed an intelligent integration that connects to ServiceNow using natural language processing to fetch and interpret ticket details."
    },
    {
      id: 5,
      title: "Intelligent Document Processing",
      description: "Created a document processing system capable of extracting answers from multiple PDFs, including image content, based on natural language queries."
    },
    {
      id: 6,
      title: "Research Publication",
      description: "Medi-Plant: Deep Learning-Based Medicinal Plant Classification Using Pix2Pix GAN (2023-2024) - Published a research article introducing a deep learning model that leverages Pix2Pix GAN for accurate classification of medicinal plants."
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="section-title">
        <h2>Achievements & Publications</h2>
        <div className="underline"></div>
      </div>
      <div className="achievements-grid">
        {achievements.map(achievement => (
          <motion.div 
            key={achievement.id} 
            className="achievement-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="achievement-icon">
              <FaMedal />
            </div>
            <div className="achievement-content">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Certifications Section Component
const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Microsoft Azure AI Engineer Associate",
      issuer: "Microsoft"
    },
    {
      id: 2,
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft"
    }
  ];

  return (
    <section className="certifications">
      <div className="section-title">
        <h2>Certifications</h2>
        <div className="underline"></div>
      </div>
      <div className="certifications-container">
        {certifications.map(cert => (
          <motion.div 
            key={cert.id} 
            className="certification-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="cert-icon">
              <FaMedal />
            </div>
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Contact Section Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real application, you would send this data to a server
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <h2>Get In Touch</h2>
        <div className="underline"></div>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>I'd love to hear from you! Whether you have a question, opportunity, or just want to say hello, feel free to reach out.</p>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>nitheeswaran56@gmail.com</span>
          </div>
          <div className="info-item">
            <FaLinkedin className="info-icon" />
            <a href="https://linkedin.com/in/nitheeswaran-e" target="_blank" rel="noopener noreferrer">linkedin.com/in/nitheeswaran-e</a>
          </div>
          <div className="info-item">
            <FaGithub className="info-icon" />
            <a href="https://github.com/Nitheeswaran-E" target="_blank" rel="noopener noreferrer">Github.com</a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              ></textarea>
            </div>
            <button type="submit" className="btn primary-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <IoLogoReact className="footer-logo-icon" />
          <h3>Nitheeswaran E</h3>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://linkedin.com/in/nitheeswaran-e" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nitheeswaran E. All rights reserved.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="content-container">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;