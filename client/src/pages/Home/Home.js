// // import React from "react";
// // import Typewriter from "typewriter-effect";
// // import "./home.css";
// // import li from "./raunaqfaceshot1-removebg-preview (1).png";

// // const Home = () => {
// //   return (
// //     <section className="hero" id="home">
// //       {/* Left Column */}
// //       <div className="hero-left">
// //         <h1>
// //           Hi, I’m <span className="highlight">Jugraunaq</span>
// //         </h1>
// //         <h2 className="subtitle">Computer Science Engineer</h2>
// //         <p className="hero-desc">
// //           I’m here looking for exciting opportunities to build models and projects to build your brand and
// //           grow your business. Let’s shake hands!
// //         </p>
// //         <button className="btn btn-primary">Hire Me</button>
// //       </div>

// //       {/* Center Column (Portrait) */}
// //       <div className="hero-center">
// //         <div className="portrait-wrapper">
// //           {/* Replace with your own image URL */}
// //           <img
// //             src={li}
// //             alt="Your Portrait"
// //             className="portrait"
// //           />
// //         </div>
// //       </div>

// //       {/* Right Column */}
// //       <div className="hero-right">
// //         <h2 className="expert-title">With Expertise In</h2>
// //         <div className="typewriter-text">
// //           <Typewriter
// //             options={{
// //               strings: [
// //                 "AI/ML Models",
// //                 "Full Stack Development",
// //                 "Data Science and Data Analysis",
// //               ],
// //               autoStart: true,
// //               loop: true,
// //             }}
// //           />
// //         </div>
// //         <p className="hero-desc">
// //           Based in India, I’m a developer working on end-to-end projects. 
// //           Looking for a person to build your projects and grow your business?
// //           Let’s talk!
// //         </p>
// //         <a
// //           href="://drive.google.com/file/d/1TpMetiG66XTa-I0YrK-q1PLTpqXnVqwT/view?usp=sharing"
// //           target="_blank"
// //           rel="noreferrer"
// //           className="btn btn-secondary"
// //         >
// //           Download CV
// //         </a>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Home;


// import React from "react";
// import { useTheme } from "../../context/ThemeContext";
// import Typewriter from "typewriter-effect";
// import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
// import { 
//   SiJavascript, 
//   SiPython, 
//   SiReact, 
//   SiGit, 
//   SiDocker, 
//   SiMongodb, 
//   SiFigma, 
//   SiCodingninjas, 
//   SiAmazonaws 
// } from "react-icons/si";
// import "./home.css";
// import li from "./raunaqfaceshot1-removebg-preview (1).png";
// import Resume from "../../assets/docs/resume.txt";

// const Home = () => {
//   const [theme, setTheme] = useTheme();

//   // Toggle dark/light mode
//   const handleTheme = () => {
//     setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
//   };

//   return (
//     <section className="hero" id="home">
//       {/* Dark Mode Toggle Button */}
//       <div className="theme-btn" onClick={handleTheme}>
//         {theme === "light" ? (
//           <BsFillMoonStarsFill size={30} />
//         ) : (
//           <BsFillSunFill size={30} />
//         )}
//       </div>

//       {/* Sticker Elements */}
//       <div className="sticker sticker-1">
//         <SiJavascript color="#F0DB4F" />
//       </div>
//       <div className="sticker sticker-2">
//         <SiPython color="#3776AB" />
//       </div>
//       <div className="sticker sticker-3">
//         <SiReact color="#61DAFB" />
//       </div>
//       <div className="sticker sticker-4">
//         <SiGit color="#F05032" />
//       </div>
//       <div className="sticker sticker-5">
//         <SiDocker color="#2496ED" />
//       </div>
//       <div className="sticker sticker-6">
//         <SiMongodb color="#47A248" />
//       </div>
//       <div className="sticker sticker-7">
//         <SiFigma color="#F24E1E" />
//       </div>
//       <div className="sticker sticker-8">
//         <SiCodingninjas color="#FF6F61" />
//       </div>
//       <div className="sticker sticker-9">
//         <SiAmazonaws color="#FF9900" />
//       </div>

//       {/* Left Column */}
//       <div className="hero-left">
//         <h1>
//           Hi, I’m <span className="highlight">Jugraunaq</span>
//         </h1>
//         <h2 className="subtitle">Computer Science Engineer</h2>
//         <p className="hero-desc">
//           I’m here looking for exciting opportunities to build models and projects to build your brand and grow your business. Let’s shake hands!
//         </p>
//         <a
//           className="btn btn-primary"
//           href="https://api.whatsapp.com/send?phone=7428233079"
//           target="_blank"
//           rel="noreferrer"
//         >
//           Hire Me
//         </a>
//       </div>

//       {/* Center Column (Portrait) */}
//       <div className="hero-center">
//         <div className="portrait-wrapper">
//           <img src={li} alt="Your Portrait" className="portrait" />
//         </div>
//       </div>

//       {/* Right Column */}
//       <div className="hero-right">
//         <h2 className="expert-title">With Expertise In</h2>
//         <div className="typewriter-text">
//           <Typewriter
//             options={{
//               strings: [
//                 "AI/ML Models",
//                 "Full Stack Development",
//                 "Data Science and Data Analysis",
//               ],
//               autoStart: true,
//               loop: true,
//             }}
//           />
//         </div>
//         <p className="hero-desc">
//           Based in India, I’m a developer working on end-to-end projects. Looking for a partner to build your projects and grow your business? Let’s talk!
//         </p>
//         <a
//           className="btn btn-secondary"
//           href="https://drive.google.com/file/d/1TpMetiG66XTa-I0YrK-q1PLTpqXnVqwT/view?usp=sharing"
//           target="_blank"
//           rel="noreferrer"
//         >
//           Download CV
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
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
import "./home.css";
import li from "./raunaqfaceshot1-removebg-preview (1).png";

const Home = () => {
  const [theme, setTheme] = useTheme();

  // Toggle dark/light mode
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <section className="hero" id="home">
      {/* Dark Mode Toggle Button */}
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </div>

      {/* Sticker Elements */}
      <div className="sticker sticker-1">
        <SiJavascript color="#F0DB4F" />
      </div>
      <div className="sticker sticker-2">
        <SiPython color="#3776AB" />
      </div>
      <div className="sticker sticker-3">
        <SiReact color="#61DAFB" />
      </div>
      
      <div className="sticker sticker-5">
        <SiDocker color="#2496ED" />
      </div>
      <div className="sticker sticker-6">
        <SiMongodb color="#47A248" />
      </div>
      <div className="sticker sticker-7">
        <SiFigma color="#F24E1E" />
      </div>
      
      <div className="sticker sticker-9">
        <SiAmazonaws color="#FF9900" />
      </div>

      {/* Left Column */}
      <div className="hero-left">
      <div className="sticker sticker-4">
        <SiGit color="#F05032" />
      </div>
      <div className="sticker sticker-8">
        <SiCodingninjas color="#FF6F61" />
      </div>
        {/* New Decorative Blob on the Left */}
        <div className="decor-blob-left"></div>

        <h1>
          Hi, I’m <span className="highlight">Jugraunaq</span>
        </h1>
        <h2 className="subtitle">Computer Science Engineer</h2>
        <p className="hero-desc">
          I’m here looking for exciting opportunities to build models and
          projects to build your brand and grow your business. Let’s shake
          hands!
        </p>
        <a
          className="btn btn-primary"
          href="https://api.whatsapp.com/send?phone=7428233079"
          target="_blank"
          rel="noreferrer"
        >
          Hire Me
        </a>
        
      </div>

      {/* Center Column (Portrait) */}
      <div className="hero-center">
        <div className="portrait-wrapper">
          <img src={li} alt="Your Portrait" className="portrait" />
        </div>
      </div>

      {/* Right Column */}
      <div className="hero-right">
        <h2 className="expert-title">With Expertise In</h2>

        <div className="typewriter-text">
          <Typewriter
            options={{
              strings: [
                "AI/ML Models",
                "Full Stack Development",
                "Data Science and Data Analysis",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="decor-circle"></div> {/* Existing Decorative Circle */}

        <p className="hero-desc">
          Based in India, I’m a developer working on end-to-end projects. Looking
          for a partner to build your projects and grow your business? Let’s
          talk!
        </p>
        <a
          className="btn btn-secondary"
          href="https://drive.google.com/file/d/1TpMetiG66XTa-I0YrK-q1PLTpqXnVqwT/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Home;

