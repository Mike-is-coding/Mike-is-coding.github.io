import "./App.css";
import "./index.css";
import logo from "./JavascriptCalc.png";
import pomodoroClock from "./Pomodoro Clock.png";

// const divHeight = document.getElementsByClassName("container").clientHeight;
// document.getElementsByClassName("background").style.height = divHeight+"px";

function App() {
  return (
    <>
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
                  <a className="home" href="#welcome-section">Home</a>
                </li>
                <li>
                  <a className="about" href="#about-me">About</a>
                </li>
                <li>
                  <a className="portfolio" href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a className="contact" href="#contact">Contact</a>
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
                Hello my name is Miguel Fierro, and I am a Front-End Developer.
              </h2>
              <hr className="dashed" />
              <p>
                {
                  "I am an entry-level front-end developer with a passion for creating visually appealing and user-friendly websites and web applications. I have a solid understanding of HTML, CSS, JavaScript, and jQuery and am familiar with responsive design and popular front-end frameworks such as Reactjs. I am a quick learner and am always eager to expand my skills and knowledge in the field. I am eager to learn and improve my skills, and dedicated to providing the best user experience."
                }
              </p>
            </div>
          </div>
        </section>

        {/* || Projects Section */}
        <section className="projects-section" id="portfolio">
          <h2>Portfolio</h2>
          <div className="projects-section-container">
            <div className="project">
              <img id="jscalc" src={logo} alt="Javascript Calculator"/>
              <span><a href="https://mike-is-coding.github.io/Javascript-Calculator/">JavaScript Calculator</a></span>
            </div>
            <div className="project">
              <img src={pomodoroClock} alt="Pomodoro Clock"/>
              <span><a href="https://mike-is-coding.github.io/25-Clock/">Pomodoro Clock</a></span>
            </div>
          </div>
          <div className="projects-section-container">
            <div className="project"></div>
            {/* <div className="project"></div> */}
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
              className="btn contact-details"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              id="myemail"
              href="mailto: miguel.fierro.750@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn contact-details"
            >
              <i className="fas fa-at"></i> Send an Email
            </a>
            <a
              id="my-linkedin"
              href="https://facebook.com/freecodecamp"
              target="_blank"
              className="btn contact-details"
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
