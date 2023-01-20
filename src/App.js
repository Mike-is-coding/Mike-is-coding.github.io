import "./App.css";
import "./index.css";
import Favicon from "react-favicon";
import logo from "./JavascriptCalc.png";
import pomodoroClock from "./Pomodoro Clock.png";

// const divHeight = document.getElementsByClassName("container").clientHeight;
// document.getElementsByClassName("background").style.height = divHeight+"px";

function App() {
  return (
    <>
      <Favicon url="https://i.imgur.com/QrUsLs3.png"></Favicon>
      <div className="background"></div>
      <div className="background-static"></div>
      <div className="background-static2"></div>
      <div className="container">
        {/* || Navbar */}
        <nav>
          <div className="nav-box"></div>
          <div className="navbar">
            <div className="navbar-container nav-container">
              <input className="checkbox" type="checkbox" name="" id="" />
              <div className="hamburger-lines" alt="Menu" title="Menu">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <div className="menu-items">
                <li>
                  <a className="home" href="#welcome-section">
                    Home
                  </a>
                </li>
                <li>
                  <a className="about" href="#about-me">
                    About
                  </a>
                </li>
                <li>
                  <a className="portfolio" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="contact" href="#contact">
                    Contact
                  </a>
                </li>
              </div>
            </div>
          </div>
        </nav>

        {/* || Welcome Section */}
        <section id="welcome-section">
          <div className="welcome-container">
            <h1 className="welcome-text">Hey I'm Miguel</h1>
          </div>
          <div
            className="welcome-container2"
            style={{ display: "inline-block" }}
          >
            <p className="welcome-text">Front-End Developer</p>
          </div>
          <div>
            <p className="scroll-cont">
              <span className="scroll-text">▼</span>
            </p>
          </div>
        </section>

        {/* || About Me Section */}
        <section className="about-me" id="about-me">
          <div className="about-me-container">
            <div className="about-me-text">
              <h2>
              <span className="red">Hello my name is Miguel Fierro</span>
              </h2>
              <hr className="dashed" />
              <p>
                
                  <span className="red">I</span> am an entry-level front-end developer with a passion for creating visually appealing and user-friendly websites and web applications. I have a solid understanding of HTML, CSS, JavaScript, and jQuery and am familiar with responsive design and popular front-end frameworks such as Reactjs. I am a quick learner and am always eager to expand my skills and knowledge in the field. I am eager to learn and improve my skills, and dedicated to providing the best user experience.
                
              </p>
            </div>
          </div>
        </section>

        {/* || Projects Section */}
        <section className="projects-section" id="portfolio">
          <h2>Portfolio</h2>
          <div className="projects-section-container">
            <div className="project">
              <div className="preview">
                <a
                  href="https://mike-is-coding.github.io/Javascript-Calculator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="hover" id="jscalc" src={logo} alt="Javascript Calculator" />
                </a>
              </div>
              <div className="preview-text">
                <p>
                  <span>JavaScript Calculator</span>
                </p>
              </div>
            </div>
            <div className="project">
              <div className="preview">
                <a
                  href="https://mike-is-coding.github.io/25-Clock/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="hover" id="pomodoroClock" src={pomodoroClock} alt="Pomodoro Clock" />
                </a>
              </div>
              <div className="preview-text">
                <p><span>Pomodoro Clock</span></p>
              </div>
            </div>
          </div>
          
        </section>

        {/* || Contact Section */}
        <section id="contact" className="contact-section">
          <div className="contact-section-header">
            <h2 className="contact-title"> Lets Work Together...</h2>
          </div>
          <div className="contact-link">
            <a
              id="profile-link"
              href="https://github.com/Mike-is-coding"
              target="_blank"
              className="btn contact-details hover"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              id="myemail"
              href="mailto: miguel.fierro.750@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn contact-details hover"
            >
              <i className="fas fa-at"></i> Send an Email
            </a>
            <a
              id="my-linkedin"
              href="https://www.linkedin.com/in/miguel-fierro-04b23a252/"
              target="_blank"
              className="btn contact-details hover"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
