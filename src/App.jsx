import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const headlines = [
    "Full Stack Developer",
    "Python Developer",
    "Web Developer",
    "AI & ML Engineer",
  ];

  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
useEffect(() => {
  const currentHeadline = headlines[headlineIndex];

  const typingSpeed = isDeleting ? 60 : 100;

  const timer = setTimeout(() => {
    if (!isDeleting) {
      setDisplayText(
        currentHeadline.substring(0, displayText.length + 1)
      );

      if (displayText === currentHeadline) {
        setIsDeleting(true);
      }
    } else {
      setDisplayText(
        currentHeadline.substring(0, displayText.length - 1)
      );

      if (displayText.length === 0) {
        setIsDeleting(false);
        setHeadlineIndex(
          (headlineIndex + 1) % headlines.length
        );
      }
    }
  }, typingSpeed);

  return () => clearTimeout(timer);
}, [displayText, isDeleting, headlineIndex]);
 
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          Deeksh
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>

        {/* HOME */}
        <section id="home" className="hero">

          <div className="hero-profile">
            <div className="profile-circle">
              <img
                src="/profile.jpg"
                alt="Deeksha M"
              />
            </div>
          </div>

          <div className="hero-content">

            <h1>
              Deeksha.M
            </h1>

      <h2 className="animated-headline">
  <span className="headline-purple">
    {displayText.split(" ")[0]}
  </span>

  <span className="headline-cyan">
    {" " + displayText.split(" ").slice(1).join(" ")}
  </span>

  <span className="typing-cursor">|</span>
</h2>

            <p className="description">
              I build intelligent and practical solutions using
              Python, Artificial Intelligence, Machine Learning,
              and Natural Language Processing.
            </p>

            <div className="buttons">

              <a
                href="#projects"
                className="primary-btn"
              >
                View Projects
              </a>

<a
  href="/Deeksha-Resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="secondary-btn"
>
  View Resume
</a>
            </div>

          

          </div>

        </section>


        {/* ABOUT */}
        <section
          id="about"
          className="about-section"
        >

          <div className="section-heading">
            <p>GET TO KNOW ME</p>

            <h2>
              About Me
            </h2>
          </div>

          <div className="about-content">

            <div className="about-text">

              <h3>
                Aspiring AI &amp; ML Engineer
              </h3>

              <p>
                I am an Artificial Intelligence and Machine
                Learning engineering student pursuing B.E.at C Byregowda Institute of Technology,
                Kolar. I’m passionate about using technology to turn ideas into practical solutions.
                My interests span Artificial Intelligence, Machine Learning, and web development,
                with a focus on creating useful and user-friendly applications.
              </p>  

              <p>
               My work combines Python, AI/ML concepts, and modern web technologies 
               to build projects that address real-world needs. Through projects 
               such as Local Food Marketplace and Crop Yield Prediction and Analysis,
               I’ve gained hands-on experience in problem-solving, application development,
               and translating concepts into working solutions.
              </p>

              <p>
                I’ve also gained industry exposure through Full Stack Development,
                working with frontend and backend technologies and understanding
                how applications are developed beyond the classroom.
              </p>
              
              <p>
                I’m continuously expanding my technical skills through hands-on projects, 
                experimentation, and learning new technologies, with the goal of
                becoming a versatile software professional capable of building meaningful technology solutions.
              </p>

              <div className="about-details">
              </div>

            </div>

          </div>

        </section>

        {/* EDUCATION */}
        <section
          id="education"
          className="education-section"
        >

          <div className="section-heading">

            <p>
              MY ACADEMIC JOURNEY
            </p>

            <h2>
              Education
            </h2>

          </div>

          <div className="education-card">

            <div className="education-year">
              2023 - 2027
            </div>

            <div className="education-content">

              <h3>
                B.E. Artificial Intelligence &amp; Machine Learning
              </h3>

              <h4>
                C Byre Gowda Institute of Technology, Kolar
              </h4>

              <div className="education-info">

                <span>
                  CGPA: 7.57
                </span>

                <span>
                  Expected Graduation: 2027
                </span>

              </div>

            </div>

          </div>
           {/* PRE-UNIVERSITY */}

  <div className="education-card">

    <div className="education-year">
      2021 - 2023
    </div>

    <div className="education-content">

      <h3>
        Pre-University Course (PUC)
      </h3>

      <h4>
        St. Fancis de Sales, Kolar
      </h4>

      <div className="education-info">
        <span>Percentage: 65.83%</span>

        <span>
                 2023
                </span>

      </div>

    </div>

  </div>


  {/* SSLC */}

  <div className="education-card">

    <div className="education-year">
      2020 - 2021
    </div>

    <div className="education-content">

      <h3>
        SSLC
      </h3>

      <h4>
        Navachethana High School, Bangarpet
      </h4>

      <div className="education-info">
        <span>percentage: 75.52%</span>
        <span>2021</span>
      
      </div>
      </div>

  </div>

        </section>


        {/* EXPERIENCE */}
        <section
          id="experience"
          className="experience-section"
        >

          <div className="section-heading">

            <p>
              MY EXPERIENCE
            </p>

            <h2>
              Internship
            </h2>

          </div>

          <div className="experience-card">

            <div className="experience-date">
              2026
            </div>

            <div className="experience-content">

              <h3>
                Full Stack Development Intern
              </h3>

              <h4>
                Codomax Digital Solutions
              </h4>

              <p>
                Worked on developing a full-stack BlogSpace
                web application as part of my internship.
                Gained practical experience in frontend
                development, backend development, REST APIs,
                and connecting frontend applications with
                backend services.
              </p>

              <div className="experience-tech">

                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>REST API</span>
                <span>Git &amp; GitHub</span>

              </div>

            </div>

          </div>

        </section>


        {/* SKILLS */}
        <section
          id="skills"
          className="skills-section"
        >

          <div className="section-heading">

            <p>
              WHAT I WORK WITH
            </p>

            <h2>
              My Skills
            </h2>

          </div>

          <div className="skills-grid">

            <div className="skill-card">
              <div className="skill-icon">
                🐍
              </div>

              <h3>
                Python
              </h3>

              <p>
                Programming &amp; Problem Solving
              </p>
            </div>


            <div className="skill-card">
              <div className="skill-icon">
                🤖
              </div>

              <h3>
                AI &amp; Machine Learning
              </h3>

              <p>
                Intelligent Applications
              </p>
            </div>


            <div className="skill-card">
              <div className="skill-icon">
                🌐
              </div>

              <h3>
                HTML &amp; CSS
              </h3>

              <p>
                Responsive Web Design
              </p>
            </div>


            <div className="skill-card">
              <div className="skill-icon">
                ⚡
              </div>

              <h3>
                JavaScript
              </h3>

              <p>
                Interactive Web Applications
              </p>
            </div>


            <div className="skill-card">
              <div className="skill-icon">
                🔥
              </div>

              <h3>
                Flask
              </h3>

              <p>
                Python Web Development
              </p>
            </div>


            <div className="skill-card">
              <div className="skill-icon">
                🔗
              </div>

              <h3>
                Git &amp; GitHub
              </h3>

              <p>
                Version Control
              </p>
            </div>

          </div>

        </section>


        {/* PROJECTS */}
        <section
          id="projects"
          className="projects-section"
        >

          <div className="section-heading">

            <p>
              MY RECENT WORK
            </p>

            <h2>
              Projects
            </h2>

          </div>

          <div className="projects-grid">

            {/* PROJECT 1 */}
            <div className="project-card">

              <a
                href="/local-food.png.png"
                target="_blank"
                rel="noreferrer"
                className="project-image"
              >
                <img
                  src="/local-food.png.png"
                  alt="Local Food Marketplace Project Screenshot"
                />
              </a>

              <div className="project-number">
                01
              </div>

              <div className="project-content">

                <h3>
                  Local Food Marketplace
                </h3>

                <p>
                  A web-based marketplace that connects local
                  farmers directly with customers. Users can
                  explore farmers, local food products, and
                  marketplace information through a simple
                  and user-friendly interface.
                </p>

                <div className="project-tech">

                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>

                </div>

                <div className="project-buttons">

                  <a
                    href="https://github.com/deeksham227-cell/Local_Food_Marketplace"
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    GitHub →
                  </a>


                </div>

              </div>

            </div>


            {/* PROJECT 2 */}
            <div className="project-card">

              <a
                href="/crop-yield.png.png"
                target="_blank"
                rel="noreferrer"
                className="project-image"
              >
                <img
                  src="/crop-yield.png.png"
                  alt="Crop Yield Prediction and Analysis Project Screenshot"
                />
              </a>

              <div className="project-number">
                02
              </div>

              <div className="project-content">

                <h3>
                  Crop Yield Prediction &amp; Analysis
                </h3>

                <p>
                  A web application designed to provide crop
                  yield prediction and analysis based on
                  agricultural information. Users can enter
                  crop and soil details and view the resulting
                  prediction.
                </p>

                <div className="project-tech">

                  <span>Python</span>
                  <span>Flask</span>
                  <span>HTML</span>
                  <span>CSS</span>

                </div>

                <div className="project-buttons">

                  <a
                    href="https://github.com/deeksham227-cell/Crop_yield_prediction_and_analysis"
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    GitHub →
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>

{/* CERTIFICATES */}
<section id="certificates" className="certificates-section">

  <div className="section-heading">
    <p>MY ACHIEVEMENTS</p>
    <h2>Certificates</h2>
  </div>

  <div className="certificates-grid">

    <div className="certificate-card">
      <div className="certificate-icon">🏆</div>

      <div className="certificate-content">
        <h3>C Programming</h3>
        <p>Certified by Simplilearn</p>
        <span>Programming</span>
      </div>
    </div>


    <div className="certificate-card">
      <div className="certificate-icon">💻</div>

      <div className="certificate-content">
        <h3>Full Stack Development Internship</h3>
        <p>Codomax Digital Solutions</p>
        <span>Internship</span>
      </div>
    </div>


    <div className="certificate-card">
      <div className="certificate-icon">📊</div>

      <div className="certificate-content">
        <h3>Data Analytics Virtual Experience</h3>
        <p>Deloitte</p>
        <span>Data Analytics</span>
      </div>
    </div>

  </div>

</section>

        {/* CONTACT */}
        <section
          id="contact"
          className="contact-section"
        >

          <div className="section-heading">

            <p>
              GET IN TOUCH
            </p>

            <h2>
              Contact Me
            </h2>

          </div>

          <div className="contact-content">

            <div className="contact-intro">

              <h3>
                Let's Connect
              </h3>

              <p>
                I'm always interested in learning, building
                new projects, and connecting with people in
                the technology community.
              </p>

              <p>
                If you would like to discuss an opportunity,
                project, internship, or collaboration, feel
                free to reach out.
              </p>

            </div>
<div className="contact-form">

  <input
    type="text"
    placeholder="Your Name"
  />

  <input
    type="email"
    placeholder="Your Email"
  />

  <textarea
    rows="6"
    placeholder="Your Message"
  ></textarea>

  <button
    type="button"
    className="primary-btn"
    onClick={() => {
      window.location.href =
        "mailto:deeksham227@gmail.com?subject=Portfolio Contact&body=Hello Deeksha,%0D%0A%0D%0A";
    }}
  >
    Send Message
  </button>

</div>
            <div className="contact-details">

              {/* EMAIL */}
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=deeksham227@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="contact-card"
>

                <span className="contact-icon">
                  ✉
                </span>

                <div>

                  <small>
                    Email
                  </small>

                  <strong>
                    deeksham227@gmail.com
                  </strong>

                </div>

              </a>


              {/* GITHUB */}
              <a
                href="https://github.com/deeksham227-cell"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >

                <span className="contact-icon">
                  ↗
                </span>

                <div>

                  <small>
                    GitHub
                  </small>

                  <strong>
                    deeksham227-cell
                  </strong>

                </div>

              </a>


              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/deeksha-m-162178301/"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >

                <span className="contact-icon">
                  ↗
                </span>

                <div>

                  <small>
                    LinkedIn
                  </small>

                  <strong>
                    Deeksha M
                  </strong>

                </div>

              </a>

            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="footer">

        <p>
          © 2026 Deeksha M. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;