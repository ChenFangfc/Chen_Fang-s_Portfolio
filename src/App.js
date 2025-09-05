import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Chen Fang';
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <a className='header-home' href='#about'>About</a>
        <a className='header-about' href='#project'>Project</a>
        <a className='header-project' href='#contacts'>Contact</a>
      </header>

      <div className='container'>
        <div className='animated-background'>
          <div className='floating-shapes'>
            <div className='shape'></div>
            <div className='shape'></div>
            <div className='shape'></div>
            <div className='shape'></div>
            <div className='shape'></div>
          </div>
          <div className='particles'>
            <div className='particle'></div>
            <div className='particle'></div>
            <div className='particle'></div>
            <div className='particle'></div>
            <div className='particle'></div>
            <div className='particle'></div>
            <div className='particle'></div>
            <div className='particle'></div>
            <div className='particle'></div>
            <div className='particle'></div>
          </div>
        </div>
        <p className='Name'>Hi, my name is <br></br><span className='Name-typing'>Chen Fang.</span></p>
          <p className='UIUC'>I’m a junior majoring in Computer Science and Mathematics at UIUC.</p>
          <div className="about-wrapper">
          <section id="about" className="about-section">
        <h2 className="about-title">About</h2>
            <div className="about-box">
            <p>
              
            Chen Fang is currently pursuing an undergraduate degree in Mathematics and Computer Science at the University of Illinois Urbana-Champaign. With an outstanding major GPA of 4.0 and an overall GPA of 3.96, Chen has demonstrated strong academic excellence and dedication to his fields of study. </p>
            <p>
            Chen has a keen interest in Computer Vision and Machine Learning technologies. He is actively expanding his knowledge and skills in these areas, driven by both curiosity and the desire to contribute meaningfully to technological innovation.
            </p>
            <p> Chen is currently seeking internship opportunities in software engineering, where he hopes to apply his technical expertise, collaborate on impactful projects, and further develop his professional skills.
            </p>
            <p style={{opacity: 1, display: 'block'}}>I also run an off-road accessories brand <a href="https://www.nowmadstudio.com" target="_blank" rel="noopener noreferrer">Nowmad</a> where I design and develop every product myself.</p>
          </div>
        </section>
        <img src={`${process.env.PUBLIC_URL}/simg.png`} alt="Chen Fang" className="main_img" />
        </div>
        <section id='project'>
          <h2 className='projects'>Projects</h2>
          <div className='project-list'>
            <div className='project-item'>
              <div className='project-header'>
                <h3 className='project-title'>Police Training Simulation Platform - Dual-Agent Chatbot</h3>
                <span className='project-date'>Jun. - Jul. 2025</span>
              </div>
              <ul className='inside-list'>
                <li>Built a React-based training platform with dual AI chatbots simulating dispatcher-suspect conversations for police officer training</li>
                <li>Developed responsive application with simultaneous chat interfaces enabling officers to practice interrogation and communication skills</li>
                <li>Integrated Dify AI API with real-time streaming responses, conversation management, and error handling for realistic training scenarios</li>
                <li>Created professional UI with custom avatars, loading animations, and auto-scrolling using React hooks and state management</li>
                <li>Designed platform to support police academy programs, allowing instructors to monitor and assess trainee performance with AI agents</li>
              </ul>
              <img src={`${process.env.PUBLIC_URL}/Police_img.png`} alt="Police Training Platform" className="project-image" />
            </div>
            
            <div className='project-item'>
              <div className='project-header'>
                <h3 className='project-title'>CampusCrib - Full-Stack Student Housing Platform</h3>
                <span className='project-date'>Feb. - Apr. 2025</span>
              </div>
              <ul className='inside-list'>
                <li>Developed a comprehensive apartment discovery platform for UIUC students using Django backend and React frontend</li>
                <li>Built responsive React application with real-time search functionality, filtering capabilities, and dynamic apartment listings</li>
                <li>Integrated Google Maps API and Mapbox GL for interactive mapping and geolocation features</li>
                <li>Implemented Django-based user authentication system with registration, login, and session management</li>
                <li>Designed component-based architecture with React Router for navigation and Axios for API communication</li>
                <li>Created comprehensive apartment database with 7 realistic campus-area properties including pricing, amenities, and ratings</li>
                <li>Utilized modern JavaScript ES6+, React hooks, and responsive CSS design for optimal user experience</li>
              </ul>
              <img src={`${process.env.PUBLIC_URL}/Campus_img.png`} alt="CampusCrib Platform" className="project-image" />
            </div>
            
            <div className='project-item'>
              <div className='project-header'>
                <h3 className='project-title'>Tetris Game Platform</h3>
                <span className='project-date'>Apr. - May. 2025</span>
              </div>
              <ul className='inside-list'>
                <li>Developed a comprehensive Tetris gaming platform supporting single-player, multiplayer, and human vs. AI modes</li>
                <li>Implemented real-time WebSocket communication for seamless multiplayer battles and designed an intelligent AI bot using heuristic algorithms for optimal piece placement</li>
                <li>Built complete game mechanics including collision detection, line clearing, and robust state management</li>
              </ul>
            </div>
            
            <div className='project-item'>
              <div className='project-header'>
                <h3 className='project-title'>Weather-Course Integration</h3>
                <span className='project-date'>Apr. 2025</span>
              </div>
              <ul className='inside-list'>
                <li>Built a microservice that integrates the NWS API with university course schedules to forecast class-time weather</li>
                <li>Implemented timezone handling, API caching strategies, and automated weather alerts for outdoor campus activities based on course locations and schedules</li>
              </ul>
            </div>
            
            <div className='project-item'>
              <div className='project-header'>
                <h3 className='project-title'>Digital Wallet</h3>
                <span className='project-date'>Mar. 2025</span>
              </div>
              <ul className='inside-list'>
                <li>Created a thread-safe digital wallet implementing blockchain-style transaction processing with atomic operations and condition variables</li>
                <li>Developed blocking and non-blocking transaction methods to handle insufficient funds scenarios and implemented concurrent transaction management supporting multiple simultaneous wallet operations</li>
              </ul>
            </div>
            
            <div className='project-item'>
              <div className='project-header'>
                <h3 className='project-title'>Maze Generation Service</h3>
                <span className='project-date'>Apr. 2025</span>
                <span className='project-tech'>Python</span>
              </div>
              <ul className='inside-list'>
                <li>Built web service generating mazes using algorithmic maze generation with configurable parameters and multiple output formats.</li>
                <li>Implemented interactive maze gameplay where users can navigate through generated mazes independently.</li>
                <li>Developed multiplayer functionality enabling real-time collaborative maze solving with multiple players.</li>
                <li>Applied graph theory concepts for maze generation algorithms and pathfinding optimization.</li>
              </ul>
            </div>
            
            <div className='project-item'>
              <div className='project-header'>
                <h3 className='project-title'>PNG Processing & Web Service</h3>
                <span className='project-date'>Feb. 2025</span>
                <span className='project-tech'>C & Python</span>
              </div>
              <ul className='inside-list'>
                <li>Built comprehensive PNG manipulation system spanning both command-line tools and web services.</li>
                <li>Created tools for extracting and inserting custom "uiuc" chunks into PNG files with proper endianness handling.</li>
                <li>Developed asynchronous web service using aiohttp that extracts hidden data from PNG files uploaded via multipart forms.</li>
                <li>Integrated C binary tools with Python async web framework using modern async/await patterns.</li>
              </ul>
            </div>
            
            <div className='project-item'>
              <div className='project-header'>
                <h3 className='project-title'>HTTP Server</h3>
                <span className='project-date'>Feb. 2025</span>
                <span className='project-tech'>C</span>
              </div>
              <ul className='inside-list'>
                <li>Created multi-threaded HTTP server serving static files with proper MIME type detection and HTTP response formatting.</li>
                <li>Handled concurrent connections using pthread threading and implemented complete socket programming architecture.</li>
              </ul>
            </div>
            
            <div className='project-item'>
              <div className='project-header'>
                <h3 className='project-title'>15 Puzzle</h3>
                <span className='project-date'>Nov. 2024</span>
                <span className='project-tech'>C++</span>
              </div>
              <ul className='inside-list'>
                <li>Generated a random 15-puzzle and implemented algorithm to find the fastest solution steps.</li>
                <li>Exported the results and solution path for analysis and visualization.</li>
              </ul>
            </div>

            <div className='project-item'>
              <div className='project-header'>
                <h3 className='project-title'>Mosaics</h3>
                <span className='project-date'>Mar. 2024 - May. 2024</span>
                <span className='project-tech'>Python</span>
                <span className='project-tech'>C++</span>
              </div>
              <ul className='inside-list'>
                <li>Created a mosaic photo by processing hundreds to thousands of images from a photo database using both Python and C++.</li>
                <li>Images were used as tiles to replace individual pixel blocks of a target image, with Python selecting the most suitable tile for each region to ensure an optimal visual match.</li>
              </ul>
            </div>

            <div className='project-item'>
              <div className='project-header'>
                <h3 className='project-title'>Mountain Paths</h3>
                <span className='project-date'>Feb. 2024</span>
                <span className='project-tech'>C++</span>
              </div>
              <ul className='inside-list'>
                <li>Processed mountain elevation data using C++ to generate a grayscale topological map with multiple potential paths.</li>
                <li>Identified and highlighted the optimal path with the least elevation changes.</li>
              </ul>
            </div>

            <div className='project-item'>
              <div className='project-header'>
                <h3 className='project-title'>Courses Explorer</h3>
                <span className='project-date'>Oct. 2023</span>
                <span className='project-tech'>Java</span>
              </div>
              <ul className='inside-list'>
                <li>Developed an Android mobile application using Java to simplify course searching at UIUC.</li>
                <li>The App simplified the process for students to find specific course details, such as instructor, time, and location.</li>
              </ul>
            </div>
          </div>
        </section>
          <section id='contacts'>
          <h2 className='contact'>Contact</h2>
          <div className='contact-content'>
            <p>chenf3@illinois.edu</p>
            <p>linkedin.com/in/chenfangcf</p>
            <p>(217) 979-0555</p>
          </div>
          </section>
          {/* <button type="button">Click Me to see my photo</button> */}
      </div>
    </div>
  );
}

export default App;
