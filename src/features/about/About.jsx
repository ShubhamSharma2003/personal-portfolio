import { Helmet, HelmetProvider } from "react-helmet-async";
import react_icon from "../../assets/icons/react_icon.svg";
import html_icon from "../../assets/icons/html_icon.svg";
import css_icon from "../../assets/icons/css_icon.svg";
import js_icon from "../../assets/icons/js_icon.svg";
import tailwind_icon from "../../assets/icons/tw-icon.svg";
import python_icon from "../../assets/icons/python-5.svg";
import cpp from "../../assets/icons/cpp.svg";
import express from "../../assets/icons/express2.svg";
import java from "../../assets/icons/java.svg";
import mongodb from "../../assets/icons/mongodb.svg";
import nodejs from "../../assets/icons/nodejs.svg";
import postman from "../../assets/icons/postman.svg";
import mysql from "../../assets/icons/mysql2.svg";

function About() {
  const techStack = [
    html_icon,
    css_icon,
    js_icon,
    react_icon,
    tailwind_icon,
    nodejs,
    mongodb,
    mysql,
    postman,
    express,
    cpp,
    java,
    python_icon,
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Shubham Sharma | About</title>
      </Helmet>
      <div className=" flex flex-col  items-center justify-center gap-y-4 p-8 text-textColor xl:gap-y-8 ">
        <div className="flex flex-col items-center gap-x-10 xl:flex-row">
          <div className=" xl:order-2 px-2">
            <div className="image-container">
            <img src="https://i.ibb.co/6HFGLgQ/Shubham-1.jpg" alt="Shubham-1" border="0"></img>
            </div>
          </div>
          
          <div >
            <h1 className="text-center text-3xl font-extrabold text-white xl:text-start xl:text-6xl">
              Aspiring <br /> Software Engineer
            </h1>

            {/* <div class="content">
              <div class="content__container">
                <p class="content__container__text">
                  Hello
                </p>
                
                <ul class="content__container__list">
                  <li class="content__container__list__item">world!</li>
                  <li class="content__container__list__item">there!</li>
                  <li class="content__container__list__item">users!</li>
                  <li class="content__container__list__item">friends!</li>
                </ul>
              </div>
            </div> */}
           
            <h2 className="text-xl max-sm:hidden pt-6">
              Hi, I&apos;m Shubham Sharma. Pre-Final year student & Aspiring Software Developer Engineer.<br />{""}
              based in New Delhi,India. 📍
            </h2>
          </div>
        </div>
        <div className="xl:flex  xl:gap-x-24 pt-6">
          <div className="order-1 space-y-4 text-center xl:w-1/2 ">
            <h2 className="text-2xl font-semibold text-accentColor xl:text-3xl">
              About me:
            </h2>
            <p className="text-lg font-medium leading-tight text-slate-400 xl:text-xl">
              Motivated and diligent college student with a strong passion for programming, web development, and design. 
              Seeking opportunities to contribute to impactful projects and launch a successful career in the tech field. 
              Dedicated to continuous learning, driving innovation, and staying abreast of industry and technology trends.
            </p>
          </div>
          <div className="xl:w-1/2">
          <h3 className="my-4 text-center text-lg font-semibold text-accentColor underline-offset-4 xl:text-3xl">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-5">
            {techStack.map((item, i) => {
              return (
                <img
                  className="h-14 w-14 cursor-pointer rounded-full p-2 shadow-md shadow-accentColor mb-4"
                  key={i}
                  src={item}
                  alt="tech-stack"
                />
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default About;
