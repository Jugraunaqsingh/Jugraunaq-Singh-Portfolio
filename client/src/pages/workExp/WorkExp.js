import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiGit,
  SiDocker,
  SiMongodb,
  SiFigma,
  SiCodingninjas,
  SiAmazonaws,
} from "react-icons/si";
const WorkExp = () => {
  return (
    
    <div className="work" id="work">
      
      <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr />
        <VerticalTimeline lineColor="#1e1e2c">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="July 2024 - August 2024"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">
              AI Market Research Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Josh Talks
            </h4>
            <p>
              Identified over 30 enterprises leveraging advanced LLMs with speech data,
              evaluated performance across multiple benchmarks, and developed two customized speech data offerings to drive enterprise adoption.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="May 2024 - July 2024"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Machine Learning Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              AI Ensured
            </h4>
            <p>
              Enhanced GAN performance by fine-tuning learning parameters and implementing CTGAN architecture,
              reducing MSE and MAE while accelerating convergence and improving sample diversity.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExp;


