import './App.css';
import './index.css';

function App() {
  return (
    <div className="Background">
      <div id='nav-bar-div'>
      <nav id='navbar'>
        <ul class='nav-list'>
          <li class='nav-item'><a href='#welcome-section'>About</a></li>
          <li class='nav-item'><a href='#projects'>Work</a></li>
          <li class='nav-item'><a href='#contact-me'>Contact</a></li>
        </ul>
      </nav>
    </div>
    <section id='welcome-section'>
      <h1 class='welcome-text'>Hey I'm Miguel</h1>
      <p>Front-End Developer</p>
    </section>
    
    <section id='contact-me' class='contact-section'>
      <div class='contact-section-header'>
        <h2> Lets Work Together...</h2>
      </div>
      <div class='contact-link'>
        <a id='profile-link' href="https://github.com/Mike-is-coding" target="_blank" class="btn contact-details" rel='noreferrer'>
          <i class="fab fa-github">
          </i> GitHub
        </a>
        <a id='myemail' href="miguel.fierro.750@gmail.com" target="_blank" class="btn contact-details">
          <i class="fas fa-at"></i> Send an Email
        </a>
        <a id='my-linkedin' href="https://facebook.com/freecodecamp" target="_blank" class="btn contact-details" rel='noreferrer'><i class="fab fa-linkedin"></i> LinkedIn</a>
      </div>
    </section>
    </div>
  );
}

export default App;
