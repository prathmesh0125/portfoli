import React from "react";
import "../styles/Skill.css";
// import {EarthCanvas} from './canvas';

function Skill() {
  const skill = [
    {
      id: 1,
      src: "tech/c.png",
      alt: "loading",
      name: "C",
    },
    {
      id: 2,
      src: "tech/c++.png",
      alt: "loading",
      name: "C++",
    },
    {
      id: 3,
      src: "tech/java.png",
      alt: "loading",
      name: "Java",
    },
    {
      id: 4,
      src: "tech/html.png",
      alt: "loading",
      name: "Html",
    },
    {
      id: 5,
      src: "tech/css.png",
      alt: "loading",
      name: "Css",
    },
    {
      id: 6,
      src: "tech/tailwind.png",
      alt: "loading",
      name: "Tailwind",
    },

    {
      id: 7,
      src: "tech/bootstrap.png",
      alt: "loading",
      name: "Bootstrap",
    },
    {
      id: 8,
      src: "tech/javascript.png",
      alt: "loading",
      name: "javascript",
    },

    {
      id: 9,
      src: "tech/reactjs.png",
      alt: "loading",
      name: "ReactJs",
    },
    {
      id: 10,
      src: "tech/nodejs.png",
      alt: "loading",
      name: "Nodejs",
    },
    {
      id:11,
      src: "tech/mongodb.png",
      alt: "loading",
      name: "MongoDb",
    },
    {
      id: 12,
      src: "tech/express1.png",
      alt: "loading",
      name: "Bootstrap",
    },
    {
      id:13,
      src: "tech/redux.png",
      alt: "loading",
      name: "Redux",
    },
   
    {
      id: 14,
      src: "tech/git.png",
      alt: "loading",
      name: "Git",
    },
    
    {
      id: 15,
      src: "tech/typescript.png",
      alt: "loading",
      name: "Typescript",
    },
    {
      id: 16,
      src: "tech/docker.png",
      alt: "loading",
      name: "Docker",
    },
   
   

  ];
  return (
    <div>
      <div className="container">
        <h1>Skills</h1>
        <div
          className="card_container"
          // style={{ boxShadow: " 0px 16px 47px 15px black" }}
        >
          {skill.map(({ id, src, alt, name }) => (
            <div
              key={id}
              className="card"
              style={{ boxShadow: " 0px 0px 15px 3px orange" }}
            >
              <img src={src} alt={alt} />
              <h2>{name}</h2>
            </div>
          ))}

          <div
            className="earth"
            style={{
              opacity: "99",
              width: "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
