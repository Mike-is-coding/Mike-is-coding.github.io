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
      <p>Full Stack Developer</p>
    </section>
    <section id='projects'>
      <h2>These are some of my projects</h2>
      <div class='projects-grid'>
        <a class='project project-tile' href='https://codepen.io/mike-is-coding-the-styleful/full/vYjpoLb' target='_blank' rel='noreferrer'>
          <img class='project-image' src='https://i.imgur.com/DumNbI9.png' alt='project' />
          <p class='project-tile'>
            <span class='code'>{"<"}</span>
            Survey Form
            <span class='code'>{"/>"}</span>
          </p>
        </a>
      </div>
      <div class='projects-grid'>
        <a class='project project-tile' href='https://codepen.io/mike-is-coding-the-styleful/full/QWraeKE' target='_blank' rel='noreferrer'>
          <img class='project-image' src='https://i.imgur.com/QZvJMAy.png' alt='project' />
          <p class='project-tile'>
            <span class='code'>{"<"}</span>
            Tribute Page
            <span class='code'>{"/>"}</span>
          </p>
        </a>
      </div>
      <div class='projects-grid'>
        <a class='project project-tile' href='https://codepen.io/mike-is-coding-the-styleful/full/ZEovgmx' target='_blank' rel='noreferrer'>
          <img class='project-image' src='https://i.imgur.com/8L8eUcG.png' alt='project' />
          <p class='project-tile'>
            <span class='code'>{"<"}</span>
            Waving Penguin
            <span class='code'>{"/>"}</span>
          </p>
        </a>
      </div>
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
