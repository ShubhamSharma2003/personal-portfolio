import { Helmet, HelmetProvider } from "react-helmet-async";
import udemy from "../../assets/images/udemy.jpeg";
import postman from "../../assets/images/postman.jpeg";
import scalar from "../../assets/images/scalar.avif";
import goldman from "../../assets/images/goldman.png";
import ibm from "../../assets/images/ibm.png";
import maven from "../../assets/images/maven.png";
import spoken from "../../assets/images/spoken.jpeg";
import jp from "../../assets/images/jp.jpeg";
import "../../features/certification/certification.css"
import HyperText from "../../components/ui/hyper-text";

function certification() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Shubham Sharma | Certifications</title>
      </Helmet>
      <div className="bg-mainBg p-8">
        <div className="mb-5 flex flex-col items-center gap-x-10 xl:flex-row ">
          <div>
            <HyperText
              className="pb-5 text-3xl text-white"
              text="My Certifications"
            />
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={udemy}
              className="mb-1 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="mt-3 text-3xl font-bold text-white">
                The Complete 2023 Web Development Bootcamp
              </div>
              <div className="mb-1 text-sm text-gray-300 ">Udemy</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Credential ID: UC-7cabeb5b-b9d3-433c-986-0660016d8aaa
              </div>
              <div className="mb-1 text-sm text-gray-300 ">
                Skills Learned: MongoDB, NodeJS, JavaScript, React, ExpressJS
              </div>
            </div>
          </div>

          {/* Blur overlay and button */}
          <div className="blur-bg absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out">
            <a
              href="https://www.udemy.com/certificate/UC-7cabeb5b-b9d3-433c-986f-0660016d8aaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100  dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-800"
            >
              View Credential
            </a>
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={postman}
              className="mb-3 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="text-3xl font-bold text-white">
                Postman API Fundamentals Student Expert
              </div>
              <div className="mb-1 text-sm text-gray-300 ">Postman</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Skills Learned: RESTful api, API Key Authorization, scripting
              </div>
            </div>
          </div>
          {/* Blur overlay and button */}
          <div className="blur-bg absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out">
            <a
              href="https://badgr.com/public/assertions/piPQu4NaSDOCrvk134zzCg?identity__email=shubham8186@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100  dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-800"
            >
              View Credential
            </a>
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={ibm}
              className="mb-3 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="text-3xl font-bold text-white">
                IBM Cloud Essentials V3
              </div>
              <div className="mb-1 text-sm text-gray-300 ">IBM</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Credential ID: acec26aecabc4544a48ba27a55460492
              </div>
              <div className="mb-1 text-sm text-gray-300 ">
                Skills Learned: Cloud Fundamentals
              </div>
            </div>
          </div>
          {/* Blur overlay and button */}
          <div className="blur-bg absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out">
            <a
              href="https://courses.yl-ptech.skillsnetwork.site/certificates/acec26aecabc4544a48ba27a55460492"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100  dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-800"
            >
              View Credential
            </a>
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={goldman}
              className="mb-3 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="text-3xl font-bold text-white">
                Goldman Sachs - Software Engineering Job Simulation by Forage
              </div>
              <div className="mb-1 text-sm text-gray-300 ">Forage</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Credential ID: EZry52PPQ7FoaNePM
              </div>
            </div>
          </div>
          {/* Blur overlay and button */}
          <div className="blur-bg absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out">
            <a
              href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_GqcERjaMFuukfd4h2_1701362838720_completion_certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100  dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-800"
            >
              View Credential
            </a>
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={jp}
              className="mb-3 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="text-3xl font-bold text-white">
                J.P. Morgan - Software Engineering Job Simulation by Forage
              </div>
              <div className="mb-1 text-sm text-gray-300 ">Forage</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Credential ID: rr236C96qrvCSvZq9
              </div>
              <div className="mb-1 text-sm text-gray-300 ">
                Skills Learned: OpenSource
              </div>
            </div>
          </div>
          {/* Blur overlay and button */}
          <div className="blur-bg absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out">
            <a
              href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_GqcERjaMFuukfd4h2_1701767679246_completion_certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100  dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-800"
            >
              View Credential
            </a>
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={scalar}
              className="mb-3 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="text-3xl font-bold text-white">
                DBMS Course - Master the Fundamentals and Advanced Concepts
              </div>
              <div className="mb-1 text-sm text-gray-300 ">Scalar</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Skills Learned: SQL, Data Base Management
              </div>
            </div>
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={spoken}
              className="mb-3 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="text-3xl font-bold text-white">
                Advanced Cpp Training - Spoken Tutorial Project, IIT Bombay
              </div>
              <div className="mb-1 text-sm text-gray-300 ">Spoken Tutorial</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Credential ID: 30193721KC
              </div>
              <div className="mb-1 text-sm text-gray-300 ">
                Skills Learned: C++
              </div>
            </div>
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={maven}
              className="mb-3 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="text-3xl font-bold text-white">
                The Complete 2023 Web Development Bootcamp
              </div>
              <div className="mb-1 text-sm text-gray-300 ">Maven Silicon</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Credential ID: MS/VIT-DM+DI/SEP185
              </div>
              <div className="mb-1 text-sm text-gray-300 ">
                Skills Learned: Chip Architecture, VLSI, Hardware Description
                Language
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}


export default certification;
