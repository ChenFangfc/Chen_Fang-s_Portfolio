import React from 'react';

function Projects() {
  return (
    <div className="archive">
      <div className="page-content">
        <h1 className="page__title">Projects</h1>
        <div className='project-list'>
        <div className='project-item project-item--with-image project-item--image-large project-item--image-wordle'>
          <div className='project-header'>
            <h3 className='project-title'>Wordle Solver & ML Training Pipeline</h3>
            <span className='project-date'>Oct. - Dec. 2025</span>
          </div>
          <ul className='inside-list'>
            <li>Built a Python Wordle engine with a Tkinter GUI, real-time feedback coloring, and candidate filtering</li>
            <li>Simulated ~2.3k games with an information-gain heuristic (≈99% win rate, ~3.7 avg guesses) to generate ~8.5k labeled states</li>
            <li>Engineered feature vectors from guesses/feedback (one-hot word encoding, feedback encoding, log remaining candidates)</li>
            <li>Trained and compared regression models in scikit-learn (Random Forest, KNN, MLP, baseline), reaching ~0.71 RMSE / ~0.66 R²</li>
            <li>Added scripts to download word lists, run simulations, and serialize trained models for reproducible experiments</li>
          </ul>
          <img src={`${process.env.PUBLIC_URL}/Project_img/wordle.png`} alt="Wordle Solver" className="project-image project-image--large project-image--shift-left" />
        </div>
        <div className='project-item project-item--with-image project-item--image-large'>
          <div className='project-header'>
            <h3 className='project-title'>Police Training Simulation Platform - Dual-Agent Chatbot</h3>
            <span className='project-date'>Apr. - July. 2025</span>
          </div>
          <ul className='inside-list'>
            <li>Built a React-based training platform with dual AI chatbots simulating dispatcher-suspect conversations for police officer training</li>
            <li>Developed responsive application with simultaneous chat interfaces enabling officers to practice interrogation and communication skills</li>
            <li>Integrated Dify AI API with real-time streaming responses, conversation management, and error handling for realistic training scenarios</li>
            <li>Created professional UI with custom avatars, loading animations, and auto-scrolling using React hooks and state management</li>
            <li>Designed platform to support police academy programs, allowing instructors to monitor and assess trainee performance with AI agents</li>
          </ul>
          <img src={`${process.env.PUBLIC_URL}/Project_img/Police_img.png`} alt="Police Training Platform" className="project-image project-image--shift-left-more" />
        </div>
        
        <div className='project-item project-item--with-image project-item--image-medium'>
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
          <img src={`${process.env.PUBLIC_URL}/Project_img/Campus_img.png`} alt="CampusCrib Platform" className="project-image project-image--shift-left-medium" />
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
            <span className='project-tech'>Python</span>
            <span className='project-date'>Apr. 2025</span>
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
            <span className='project-tech'>C & Python</span>
            <span className='project-date'>Feb. 2025</span>
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
            <span className='project-tech'>C</span>
            <span className='project-date'>Feb. 2025</span>
          </div>
          <ul className='inside-list'>
            <li>Created multi-threaded HTTP server serving static files with proper MIME type detection and HTTP response formatting.</li>
            <li>Handled concurrent connections using pthread threading and implemented complete socket programming architecture.</li>
          </ul>
        </div>
        
        <div className='project-item'>
          <div className='project-header'>
            <h3 className='project-title'>15 Puzzle</h3>
            <span className='project-tech'>C++</span>
            <span className='project-date'>Nov. 2024</span>
          </div>
          <ul className='inside-list'>
            <li>Generated a random 15-puzzle and implemented algorithm to find the fastest solution steps.</li>
            <li>Exported the results and solution path for analysis and visualization.</li>
          </ul>
        </div>

        <div className='project-item'>
          <div className='project-header'>
            <h3 className='project-title'>Mosaics</h3>
            <span className='project-tech'>Python & C++</span>
            <span className='project-date'>Mar. - May. 2024</span>
          </div>
          <ul className='inside-list'>
            <li>Created a mosaic photo by processing hundreds to thousands of images from a photo database using both Python and C++.</li>
            <li>Images were used as tiles to replace individual pixel blocks of a target image, with Python selecting the most suitable tile for each region to ensure an optimal visual match.</li>
          </ul>
        </div>

        <div className='project-item'>
          <div className='project-header'>
            <h3 className='project-title'>Mountain Paths</h3>
            <span className='project-tech'>C++</span>
            <span className='project-date'>Feb. 2024</span>
          </div>
          <ul className='inside-list'>
            <li>Processed mountain elevation data using C++ to generate a grayscale topological map with multiple potential paths.</li>
            <li>Identified and highlighted the optimal path with the least elevation changes.</li>
          </ul>
        </div>

        <div className='project-item'>
          <div className='project-header'>
            <h3 className='project-title'>Courses Explorer</h3>
            <span className='project-tech'>Java</span>
            <span className='project-date'>Oct. 2023</span>
          </div>
          <ul className='inside-list'>
            <li>Developed an Android mobile application using Java to simplify course searching at UIUC.</li>
            <li>The App simplified the process for students to find specific course details, such as instructor, time, and location.</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
