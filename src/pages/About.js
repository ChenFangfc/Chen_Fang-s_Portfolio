import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  const clustrmapsAnchorRef = useRef(null);

  useEffect(() => {
    const anchor = clustrmapsAnchorRef.current;
    const clustrmapsSection = document.getElementById('clustrmaps-section');

    if (!anchor || !clustrmapsSection) {
      return undefined;
    }

    if (!anchor.contains(clustrmapsSection)) {
      anchor.appendChild(clustrmapsSection);
    }
    clustrmapsSection.style.display = 'block';

    return () => {
      clustrmapsSection.style.display = 'none';
      if (anchor.contains(clustrmapsSection)) {
        document.body.appendChild(clustrmapsSection);
      }
    };
  }, []);

  return (
    <div className="archive about-archive">
      <div className="about-content page-content">
        <div className="greeting">
          <h1 className="text-5xl font-semibold tracking-tight greeting__headline">
            <span className="greeting__rotator" aria-label="Hi, I am Chen Fang. Welcome to my homepage.">
              <span className="greeting__rotator-sizer" aria-hidden="true">
                Welcome to my homepage
              </span>
              <span
                className="greeting__rotator-item"
                data-text="Hi, I am Chen Fang"
                aria-hidden="true"
              >
                <span className="greeting__rotator-text" data-text="Hi, I am Chen Fang">
                  Hi, I am Chen Fang
                </span>
              </span>
              <span
                className="greeting__rotator-item greeting__rotator-item--second"
                data-text="Welcome to my homepage"
                aria-hidden="true"
              >
                <span className="greeting__rotator-text" data-text="Welcome to my homepage">
                  Welcome to my homepage
                </span>
              </span>
            </span>
          </h1>
        </div>
        <h2 className="page__title">About Me</h2>
        <p>
          I’m Chen Fang, a junior undergraduate in Computer Science and Mathematics at{" "}
          <a
            className="about-uiuc"
            href="https://siebelschool.illinois.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UIUC
          </a>. I currently
          work with Prof.{" "}
          <a href="https://aisecure.github.io/" target="_blank" rel="noopener noreferrer">Bo Li</a> in the{" "}
          <a href="https://aisecure.github.io/GROUP/index.html" target="_blank" rel="noopener noreferrer">
            Secure Learning Lab
          </a>
          , and I previously worked with Prof.{" "}
          <a href="https://yunhuang.web.illinois.edu/" target="_blank" rel="noopener noreferrer">Yun Huang</a>{" "}
          in the{" "}
          <a href="https://salt.ischool.illinois.edu/" target="_blank" rel="noopener noreferrer">SALT Lab</a>{" "}
          at UIUC. My research interests lie in
          trustworthy ML and AI safety, LLM agents, and computer vision.
        </p>
        <p>
          I am seeking internship opportunities in software engineering for Summer 2026.
        </p>
        <h2 className="page__title about-section-title">Recent Researches</h2>
        <p>
          The projects I have worked on over the past few months and the ones I am currently working on:
        </p>
        <ul className="about-list">
          <li>
            <Link className="about-list-text" to="/researches">
              Audio - Text Guardrail
            </Link>
          </li>
          <li>
            <Link className="about-list-text" to="/researches">
              Struct-RL: Structure-Aware Reinforcement Learning for Code Generation
            </Link>
          </li>
          <li>
            <Link className="about-list-text" to="/researches">
              DE - Escalation Police Training Simulation Platform
            </Link>
          </li>
        </ul>
        <p className="about-acknowledgements">
          <strong>Acknowledgements:</strong> I am deeply grateful to{" "}
          <a
            href="https://www.linkedin.com/in/jason-situ-5a33bb137/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jason
          </a>{" "}
          for introducing me to research and for providing my first opportunity to grow as a
          researcher. He was an exceptionally patient mentor, and I greatly benefited from his
          guidance.
        </p>
        <div className="about-clustrmaps-anchor" ref={clustrmapsAnchorRef}></div>
      </div>
    </div>
  );
}

export default About;
