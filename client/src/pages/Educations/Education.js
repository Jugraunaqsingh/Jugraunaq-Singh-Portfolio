import React from "react";
import "./Education.css";
import Jump from "react-reveal/Jump";
import { FaUniversity, FaLaptopCode, FaBook, FaGraduationCap, FaFlask , FaRobot } from "react-icons/fa";
import { MdSchool,MdComputer } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
      <div className="education-stickers">
          <div className="sticker sticker-edu-1">
            <FaUniversity color="#67baf2" />
          </div>
          <div className="sticker sticker-edu-2">
            <FaLaptopCode color="#67baf2" />
          </div>
          <div className="sticker sticker-edu-3">
            <FaBook color="#67baf2" />
          </div>
          <div className="sticker sticker-edu-4">
            <FaGraduationCap color="#67baf2" />
          </div>
          <div className="sticker sticker-edu-5">
            <FaFlask color="#67baf2" />
          </div>
          <div className="sticker sticker-edu-6">
    <FaRobot color="#67baf2" />
  </div>
  <div className="sticker sticker-edu-7">
    <MdComputer color="#67baf2" />
  </div>
        </div>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
           Education Details
        </h2>
        <hr />
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - 2026"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vellore Institute Of Technology, Vellore
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020 - 2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Senior Secondary Education</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Delhi Public School RK Puram
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2014 - 2020"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Secondary Education</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Delhi Public School Indirapuram
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2011 - 2014"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Junior Education</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Cambridge School
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
