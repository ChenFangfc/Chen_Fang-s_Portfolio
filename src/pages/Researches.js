import React from 'react';

function Researches() {
  return (
    <div className="archive researches-page">
      <div className="page-content">
        <h1 className="page__title">Researches</h1>
        <div className="research-item">
          <div className="research-card">
            <div className="research-thumb">
              <img
                src={`${process.env.PUBLIC_URL}/Research_img/Audio_Guard.png`}
                alt="Audio guardrail framework"
              />
            </div>
            <div className="research-body">
              <div className="research-header">
                <h3>Audio - Text Guardrail</h3>
                <span className="research-badge">
                  <span className="research-badge-text">Core Contributor</span>
                </span>
              </div>
              <p>
                A research framework that uses LLM-based audio models to jointly identify speakers
                and classify content safety, with dataset loaders and benchmarking/evaluation tools
                for audio guardrails.
              </p>
              <div className="research-footer">
                <div className="research-links">
                  <a
                    className="research-link"
                    href="#"
                    aria-label="Code link (pending)"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="research-link-icon" aria-hidden="true">
                      <i className="fab fa-github"></i>
                    </span>
                    <span className="research-link-label">Code</span>
                  </a>
                  <a
                    className="research-link"
                    href="#"
                    aria-label="Paper link (pending)"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="research-link-icon" aria-hidden="true">
                      <i className="fas fa-file-alt"></i>
                    </span>
                    <span className="research-link-label">Paper</span>
                  </a>
                  <a
                    className="research-link"
                    href="#"
                    aria-label="Website link (pending)"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="research-link-icon" aria-hidden="true">
                      <i className="fas fa-globe"></i>
                    </span>
                    <span className="research-link-label">Website</span>
                  </a>
                </div>
                <div className="research-people">
                  <div className="research-person">
                    <span className="research-person-role">PI:</span>
                    <a
                      href="https://aisecure.github.io/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Professor Bo Li
                    </a>
                  </div>
                  <div className="research-person">
                    <span className="research-person-role">Mentor:</span>
                    <a
                      href="https://kangmintong.github.io/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mintong Kang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="research-item">
          <div className="research-card">
            <div className="research-thumb">
              <img
                src={`${process.env.PUBLIC_URL}/Research_img/StructRL_img.png`}
                alt="Struct-RL research"
              />
            </div>
            <div className="research-body">
              <div className="research-header">
                <h3>Struct-RL: Structure-Aware Reinforcement Learning for Code Generation</h3>
              </div>
              <p>
                Statically builds dependency graphs of Python repositories to mine structurally
                similar function chains for few-shot code generation, evaluates outputs with
                StructBLEU plus test-based rewards, and supports RL/DPO fine-tuning across local and
                API LLMs.
              </p>
              <div className="research-footer">
                <div className="research-links">
                  <a
                    className="research-link"
                    href="https://github.com/4R5T/struct-rl"
                    aria-label="Struct-RL code"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="research-link-icon" aria-hidden="true">
                      <i className="fab fa-github"></i>
                    </span>
                    <span className="research-link-label">Code</span>
                  </a>
                  <a
                    className="research-link"
                    href="#"
                    aria-label="Paper link (pending)"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="research-link-icon" aria-hidden="true">
                      <i className="fas fa-file-alt"></i>
                    </span>
                    <span className="research-link-label">Paper</span>
                  </a>
                  <a
                    className="research-link"
                    href="#"
                    aria-label="Website link (pending)"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="research-link-icon" aria-hidden="true">
                      <i className="fas fa-globe"></i>
                    </span>
                    <span className="research-link-label">Website</span>
                  </a>
                </div>
                <div className="research-people">
                  <div className="research-person">
                    <span className="research-person-role">PI:</span>
                    <a
                      href="https://cs.stanford.edu/people/jiaxuan/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Professor Jiaxuan You
                    </a>
                  </div>
                  <div className="research-person">
                    <span className="research-person-role">Collaborator:</span>
                    <a
                      href="https://fenghaili.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Fenghai Li
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="research-item">
          <div className="research-card">
            <div className="research-thumb">
              <img
                src={`${process.env.PUBLIC_URL}/Research_img/Deescalation_img.png`}
                alt="De-escalation training simulation"
              />
            </div>
            <div className="research-body">
              <div className="research-header">
                <h3>DE - Escalation Police Training Simulation Platform</h3>
                <span className="research-badge">
                  <span className="research-badge-text">Core Contributor</span>
                </span>
              </div>
              <p>
                An Unreal Engine 5 VR police-training simulation for Meta Quest 3 where officers
                speak in real time with expressive virtual dispatcher and suspect agents (facial
                expressions + body gestures), powered by Dify API streaming responses for realistic
                communication and de-escalation practice.
              </p>
              <p>This was Jason’s final research project before graduation, 
                and it was also the first full research project I completed from start to finish. 
                I’m very grateful to Jason for teaching me so many skills.</p>
              <p>Sadly, Jason needed to take time off for mental health reasons and stepped away from the project. 
                It’s a real pity—we were almost finished and getting ready to submit a paper. 
                Even though we didn’t ultimately publish, I deeply cherish the experience of working with Jason
                 and how much I learned along the way. May God be with him.</p>
              <p>Come to me, all you who are weary and burdened, and I will give you rest. - Matthew 11:28</p>
              <div className="research-footer">
                <div className="research-links">
                  <a
                    className="research-link"
                    href="#"
                    aria-label="Code link (pending)"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="research-link-icon" aria-hidden="true">
                      <i className="fab fa-github"></i>
                    </span>
                    <span className="research-link-label">Code</span>
                  </a>
                  <a
                    className="research-link"
                    href="#"
                    aria-label="Paper link (pending)"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="research-link-icon" aria-hidden="true">
                      <i className="fas fa-file-alt"></i>
                    </span>
                    <span className="research-link-label">Paper</span>
                  </a>
                  <a
                    className="research-link"
                    href="#"
                    aria-label="Website link (pending)"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="research-link-icon" aria-hidden="true">
                      <i className="fas fa-globe"></i>
                    </span>
                    <span className="research-link-label">Website</span>
                  </a>
                </div>
                <div className="research-people">
                  <div className="research-person">
                    <span className="research-person-role">PI:</span>
                    <a
                      href="https://yunhuang.web.illinois.edu/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Professor Yun Huang
                    </a>
                  </div>
                  <div className="research-person">
                    <span className="research-person-role">Mentor:</span>
                    <a
                      href="https://www.linkedin.com/in/jason-situ-5a33bb137/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Jason Situ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Researches;
