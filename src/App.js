import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <div className="background"></div>
      <div className="background-static"></div>
      <div className="container">
        {/* || Navbar */}
        <div id="nav-bar-div">
          <nav id="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#welcome-section">About</a>
              </li>
              <li className="nav-item">
                <a href="#projects">Work</a>
              </li>
              <li className="nav-item">
                <a href="#contact-me">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

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
        <section className="about-me">
          <div className="about-me-text">
            <h2>
              Hello my name is Miguel Fierro. I am a Front-End Developer
            </h2>
          </div>
        </section>

        {/* || Projects Section */}
        <section className="projects-section">
          <div className="projects-section-container">
            <div className="project"></div>
            <div className="project"></div>
          </div>
          <div className="projects-section-container">
            <div className="project"></div>
            <div className="project"></div>
          </div>
        </section>

        {/* || Contact Section */}
        <section id="contact-me" className="contact-section">
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
              href="miguel.fierro.750@gmail.com"
              target="_blank"
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
