import React from 'react';
import './Teaching.css';

function Teaching() {
  return (
    <div className="archive teaching-page">
      <div className="teaching-content page-content">
        <h1 className="page__title">Teaching</h1>
        <div className="teaching-item">
          <h3>CS 521 - Trustworthy AI Systems</h3>
          <div className="teaching-divider"></div>
          <p>Head Teaching Assistant | UIUC | Fall 2025</p>
          <p>Rubric design and grading</p>
        </div>
        <div className="teaching-item">
          <h3>CS 124 - Introduction to Computer Science I</h3>
          <div className="teaching-divider"></div>
          <p>Teaching Assistant and Mentor | UIUC | Spring 2024 | Fall 2024 | Spring 2025</p>
          <p>
            Led and mentored a team of mentees, trained them to become Course Assistants (CAs), and
            supported students through office hours by answering questions related to MPs, homework
            assignments, and exams
          </p>
        </div>
      </div>
    </div>
  );
}

export default Teaching;
