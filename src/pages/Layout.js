import React, { useLayoutEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  useLayoutEffect(() => {
    const alignToAboutLink = () => {
      const root = document.documentElement;
      const isWide = window.matchMedia('(min-width: 57.8125em)').matches;
      if (!isWide) {
        root.style.setProperty('--about-align-shift', '0px');
        root.style.setProperty('--page-content-right-space', '0px');
        return;
      }

      const content = document.querySelector('.page-content');
      const aboutLink =
        document.querySelector('.masthead__menu-item a[href="/about"]') ||
        document.querySelector('.hidden-links a[href="/about"]');

      if (!content || !aboutLink) {
        root.style.setProperty('--about-align-shift', '0px');
        root.style.setProperty('--page-content-right-space', '0px');
        return;
      }

      const linkRect = aboutLink.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const currentShift =
        parseFloat(getComputedStyle(root).getPropertyValue('--about-align-shift')) || 0;
      const delta = linkRect.left - contentRect.left;
      const nextShift = currentShift + delta;

      root.style.setProperty('--about-align-shift', `${nextShift}px`);

      requestAnimationFrame(() => {
        const updatedRect = content.getBoundingClientRect();
        const viewportWidth = document.documentElement.clientWidth;
        const rightSpace = Math.max(0, viewportWidth - updatedRect.right);
        root.style.setProperty('--page-content-right-space', `${rightSpace}px`);
      });
    };

    alignToAboutLink();
    window.addEventListener('resize', alignToAboutLink);
    return () => window.removeEventListener('resize', alignToAboutLink);
  }, [location.pathname]);

  return (
    <div>
      <div className="masthead">
        <div className="masthead__inner-wrap">
          <div className="masthead__menu">
            <nav id="site-nav" className="greedy-nav">
              <ul className="visible-links">
                <li className="masthead__menu-item masthead__menu-item--lg"><Link to="/">Chen Fang</Link></li>
                <li className="masthead__menu-item"><Link to="/about">About</Link></li>
                <li className="masthead__menu-item"><Link to="/researches">Researches</Link></li>
                <li className="masthead__menu-item"><Link to="/teaching">Teaching</Link></li>
                <li className="masthead__menu-item"><Link to="/projects">Projects</Link></li>
                <li className="masthead__menu-item"><Link to="/cv">Resume</Link></li>
                <li className="masthead__menu-item"><Link to="/publications">Publications</Link></li>
                <li className="masthead__menu-item"><Link to="/talks">Personal</Link></li>
              </ul>
              <ul className="hidden-links hidden"></ul>
            </nav>
          </div>
        </div>
      </div>

      <div id="main" role="main">
        <div className="sidebar sticky">
          <div itemScope itemType="http://schema.org/Person">
            <div className="author__avatar">
              <img src={`${process.env.PUBLIC_URL}/simg.png`} alt="Chen Fang" itemProp="image" />
            </div>
            <div className="author__content">
              <h3 className="author__name" itemProp="name">Chen Fang</h3>
              <p className="author__bio" itemProp="description">
                <span className="author__bio-group">
                  <span className="author__bio-line">CS Undergraduate @ UIUC</span>
                </span>
              </p>
            </div>
            <div className="author__urls-wrapper">
              <ul className="author__urls social-icons">
                <li><i className="fas fa-fw fa-map-marker-alt" aria-hidden="true"></i> IL, WA, OR</li>
                <li>
                  <a href="https://illinois.edu/" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-fw fa-map-marker-alt" aria-hidden="true"></i> UIUC
                  </a>
                </li>
                <li><a href="mailto:chenf3@illinois.edu"><i className="fas fa-fw fa-envelope" aria-hidden="true"></i> Email</a></li>
                <li>
                  <a href="https://linkedin.com/in/chenfangcf" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-fw fa-linkedin" aria-hidden="true"></i> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ChenFangfc" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-fw fa-github" aria-hidden="true"></i> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://nowmadstudio.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      className="author__icon-image"
                      src={`${process.env.PUBLIC_URL}/nowmad_logo.png`}
                      alt=""
                      aria-hidden="true"
                    />{" "}
                    Nowmad
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;
