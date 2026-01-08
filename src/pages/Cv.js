import React from 'react';

function Cv() {
  return (
    <div className="archive">
      <div className="page-content">
        <h1 className="page__title">Resume</h1>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <p style={{ color: '#7f8c8d', fontSize: '1.2em' }}>
            <a
              href={`${process.env.PUBLIC_URL}/Chen_Fang_Resume_2026.pdf`}
              style={{ color: '#ff5f05', textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <i className="fas fa-file-pdf"></i> Download Resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cv;
