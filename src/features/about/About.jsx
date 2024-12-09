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
import WordRotate from "../../components/ui/word-rotate"
import profilepic from "../../assets/images/Profilepic.jpeg"


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
          <div className="px-2 delay-0 duration-1000 animate-in fade-in zoom-in xl:order-2">
            <div className="image-container">
              <img
                src = {profilepic}
                // src="https://i.ibb.co/tMwXr3S/Whats-App-Image-2024-12-09-at-20-18-11.png"
                alt="Shubham-1"
                border="0"
              ></img>
            </div>
          </div>

          <div>
            <div className="pt-5 text-center text-3xl font-extrabold text-white xl:text-start xl:text-6xl">
              Hello
              <WordRotate
                className="delay-0 duration-1000 fade-in zoom-in"
                words={["there!", "World!", "User!", "Friend!"]}
              />
            </div>

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

            <h2 className=" pt-6 text-xl delay-0 duration-1000 animate-in fade-in zoom-in max-sm:hidden">
              Hi, I&apos;m Shubham Sharma. Final year student & Aspiring
              Software Developer Engineer.
              <br />
              {""}
              based in New Delhi,India.📍
            </h2>
          </div>
        </div>
        <div className="pt-6  xl:flex xl:gap-x-24">
          <div className="order-1 space-y-4 text-center xl:w-1/2 ">
            <h2 className=" text-2xl font-semibold text-accentColor delay-0 duration-1000 animate-in fade-in zoom-in xl:text-3xl">
              About me:
            </h2>
            <p className=" text-lg font-medium leading-tight text-slate-400 delay-0 duration-1000 animate-in fade-in zoom-in xl:text-xl">
              Motivated and diligent college student with a strong passion for
              programming, web development, and design. Seeking opportunities to
              contribute to impactful projects and launch a successful career in
              the tech field. Dedicated to continuous learning, driving
              innovation, and staying abreast of industry and technology trends.
            </p>
          </div>
          <div className="xl:w-1/2">
            <h3 className=" my-4 text-center text-lg font-semibold text-accentColor underline-offset-4 delay-0 duration-1000 animate-in fade-in zoom-in xl:text-3xl">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-5">
              {techStack.map((item, i) => {
                return (
                  <img
                    className="mb-4 h-16 w-16 transform cursor-pointer rounded-full bg-transparent p-2 transition-transform duration-300 ease-in-out hover:scale-110"
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
