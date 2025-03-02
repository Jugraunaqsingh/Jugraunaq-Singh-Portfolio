import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import x from "./logo_bcg.png";
import y from "./medcb.png";
import z from "./pfm.jpeg";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        Throughout my journey, I've taken on diverse projects that not only challenge me but also fuel my passion for innovation and technology. Whether it's crafting a data-driven churn analysis model that empowers businesses to boost customer retention, developing an AI-powered medical chatbot to make healthcare more accessible, or pioneering an AI solution for protein folding predictions, each project reflects my relentless dedication to transforming complex challenges into real-world solutions. These experiences have deepened my commitment to continuous learning and creativity, driving me to push the boundaries of what's possible in technology.
        </p>
        {/* card design */}
        <div className="row" id="ads">
  <Spin>
    {/* BCG Churn Analysis Project */}
    <div className="col-md-4">
      <div className="card rounded">
        <div className="card-image">
          <span className="card-notify-badge">Data Analysis</span>
          <img
            src={x}
            alt="BCG Churn Analysis"
          />
        </div>
        <div className="card-image-overly m-auto mt-3">
          <span className="card-detail-badge">Python</span>
          <span className="card-detail-badge">Pandas</span>
          <span className="card-detail-badge">Scikit-Learn</span>
          <span className="card-detail-badge">Matplotlib</span>
        </div>
        <div className="card-body text-center">
          <div className="ad-title m-auto">
            <h6 className="text-uppercase">BCG Churn Analysis</h6>
          </div>
          <a
            className="ad-btn"
            href="https://github.com/Jugraunaqsingh/BCG-Churn-Analysis-Case-Study"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>
    </div>
    {/* Saphina Chatbot Project */}
    <div className="col-md-4">
      <div className="card rounded">
        <div className="card-image">
          <span className="card-notify-badge">Machine Learing Chatbot</span>
          <img
            src={y}
            alt="Saphina Chatbot"
          />
        </div>
        <div className="card-image-overly m-auto mt-3">
          <span className="card-detail-badge">Python</span>
          <span className="card-detail-badge">PyTorch</span>
          <span className="card-detail-badge">FastAPI</span>
          <span className="card-detail-badge">MongoDB</span>
          <span className="card-detail-badge">Docker</span>
        </div>
        <div className="card-body text-center">
          <div className="ad-title m-auto">
            <h5 className="text-uppercase">Saphina Chatbot</h5>
          </div>
          <a
            className="ad-btn"
            href="https://github.com/Jugraunaqsingh/AI-Medical-Chatbot"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>
    </div>
    {/* Pro Blaze Project */}
    <div className="col-md-4">
      <div className="card rounded">
        <div className="card-image">
          <span className="card-notify-badge">Dynamic Programming + RL Model</span>
          <img
            src={z}
            alt="Pro Blaze"
          />
        </div>
        <div className="card-image-overly m-auto mt-3">
          <span className="card-detail-badge">Python</span>
          <span className="card-detail-badge">OpenAI Gym</span>
          <span className="card-detail-badge">Biopython</span>
          <span className="card-detail-badge">RL</span>
        </div>
        <div className="card-body text-center">
          <div className="ad-title m-auto">
            <h5 className="text-uppercase">Pro Blaze</h5>
          </div>
          <a
            className="ad-btn"
            href="https://github.com/Jugraunaqsingh/Protein-Folding-Prediction-Model"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>
    </div>
  </Spin>
</div>

      </div>
    </>
  );
};

export default Projects;
