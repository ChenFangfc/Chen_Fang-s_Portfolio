import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Projects from './pages/Projects';
import Cv from './pages/Cv';
import Publications from './pages/Publications';
import Talks from './pages/Talks';
import Teaching from './pages/Teaching';
import Researches from './pages/Researches';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="researches" element={<Researches />} />
        <Route path="projects" element={<Projects />} />
        <Route path="teaching" element={<Teaching />} />
        <Route path="cv" element={<Cv />} />
        <Route path="publications" element={<Publications />} />
        <Route path="talks" element={<Talks />} />
      </Route>
    </Routes>
  );
}

export default App;
