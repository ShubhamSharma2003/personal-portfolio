import { Helmet, HelmetProvider } from "react-helmet-async";
import udemy from "../../assets/images/udemy.jpeg";
import postman from "../../assets/images/postman.jpeg";
import scalar from "../../assets/images/scalar.avif";
import goldman from "../../assets/images/goldman.png";
import ibm from "../../assets/images/ibm.png";
import maven from "../../assets/images/maven.png";
import spoken from "../../assets/images/spoken.jpeg";
import jp from "../../assets/images/jp.jpeg";

function certification() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Shubham Sharma | Certifications</title>
      </Helmet>
      <div className="bg-mainBg p-8">
        <div className="flex flex-col items-center gap-x-10 xl:flex-row mb-5 ">
          <div>
            <h1 className="pb-5 text-3xl text-white">My Certifications</h1>
          </div>
        </div>

        <div className="flex max-w-full mt-3 flex-col sm:flex-row rounded-xl bg-articleBg text-textColor hover:shadow-lg animate-in fade-in zoom-in delay-0 duration-1000">
          <div className="p-3 mt-2 mb-2 ml-2 flex flex-col sm:flex-row items-center">
            <img src={udemy} className="h-[180px] w-[180px] mb-1 sm:mr-2 sm:mb-0 rounded-b-xl rounded-t-md object-fill sm:self-center" alt="Certifications" />
            <div className="flex ml-3 flex-col">
              <div className="font-bold mt-3 text-white text-3xl">The Complete 2023 Web Development Bootcamp</div>
              <div className="text-gray-300 text-sm mb-1 ">Udemy</div>
              <div className="text-gray-300 text-sm mb-1 ">Credential ID: XYZ123</div>
              <div className="text-gray-300 text-sm mb-1 ">Skills Learned: HTML, CSS, JavaScript, React</div>
            </div>
          </div>
        </div>

        <div className="flex max-w-full mt-3 flex-col sm:flex-row rounded-xl bg-articleBg text-textColor hover:shadow-lg animate-in fade-in zoom-in delay-0 duration-1000">
          <div className="p-3 mt-2 mb-2 ml-2 flex flex-col sm:flex-row items-center">
            <img src={postman} className="h-[180px] w-[180px] mb-1 sm:mr-2 sm:mb-0 rounded-b-xl rounded-t-md object-fill sm:self-center" alt="Certifications" />
            <div className="flex ml-3 flex-col">
              <div className="font-bold text-white text-3xl">The Complete 2023 Web Development Bootcamp</div>
              <div className="text-gray-300 text-sm mb-1 ">Udemy</div>
              <div className="text-gray-300 text-sm mb-1 ">Credential ID: XYZ123</div>
              <div className="text-gray-300 text-sm mb-1 ">Skills Learned: HTML, CSS, JavaScript, React</div>
            </div>
          </div>
        </div>

        <div className="flex max-w-full mt-3 flex-col sm:flex-row rounded-xl bg-articleBg text-textColor hover:shadow-lg animate-in fade-in zoom-in delay-0 duration-1000">
          <div className="p-3 mt-2 mb-2 ml-2 flex flex-col sm:flex-row items-center">
            <img src={ibm} className="h-[180px] w-[180px] mb-1 sm:mr-2 sm:mb-0 rounded-b-xl rounded-t-md object-fill sm:self-center" alt="Certifications" />
            <div className="flex ml-3 flex-col">
              <div className="font-bold text-white text-3xl">The Complete 2023 Web Development Bootcamp</div>
              <div className="text-gray-300 text-sm mb-1 ">Udemy</div>
              <div className="text-gray-300 text-sm mb-1 ">Credential ID: XYZ123</div>
              <div className="text-gray-300 text-sm mb-1 ">Skills Learned: HTML, CSS, JavaScript, React</div>
            </div>
          </div>
        </div>

        <div className="flex max-w-full mt-3 flex-col sm:flex-row rounded-xl bg-articleBg text-textColor hover:shadow-lg animate-in fade-in zoom-in delay-0 duration-1000">
          <div className="p-3 mt-2 mb-2 ml-2 flex flex-col sm:flex-row items-center">
            <img src={goldman} className="h-[180px] w-[180px] mb-1 sm:mr-2 sm:mb-0 rounded-b-xl rounded-t-md object-fill sm:self-center" alt="Certifications" />
            <div className="flex ml-3 flex-col">
              <div className="font-bold text-white text-3xl">The Complete 2023 Web Development Bootcamp</div>
              <div className="text-gray-300 text-sm mb-1 ">Udemy</div>
              <div className="text-gray-300 text-sm mb-1 ">Credential ID: XYZ123</div>
              <div className="text-gray-300 text-sm mb-1 ">Skills Learned: HTML, CSS, JavaScript, React</div>
            </div>
          </div>
        </div>


        <div className="flex max-w-full mt-3 flex-col sm:flex-row rounded-xl bg-articleBg text-textColor hover:shadow-lg animate-in fade-in zoom-in delay-0 duration-1000">
          <div className="p-3 mt-2 mb-2 ml-2 flex flex-col sm:flex-row items-center">
            <img src={jp} className="h-[180px] w-[180px] mb-1 sm:mr-2 sm:mb-0 rounded-b-xl rounded-t-md object-fill sm:self-center" alt="Certifications" />
            <div className="flex ml-3 flex-col">
              <div className="font-bold text-white text-3xl">The Complete 2023 Web Development Bootcamp</div>
              <div className="text-gray-300 text-sm mb-1 ">Udemy</div>
              <div className="text-gray-300 text-sm mb-1 ">Credential ID: XYZ123</div>
              <div className="text-gray-300 text-sm mb-1 ">Skills Learned: HTML, CSS, JavaScript, React</div>
            </div>
          </div>
        </div>


        <div className="flex max-w-full mt-3 flex-col sm:flex-row rounded-xl bg-articleBg text-textColor hover:shadow-lg animate-in fade-in zoom-in delay-0 duration-1000">
          <div className="p-3 mt-2 mb-2 ml-2 flex flex-col sm:flex-row items-center">
            <img src={scalar} className="h-[180px] w-[180px] mb-1 sm:mr-2 sm:mb-0 rounded-b-xl rounded-t-md object-fill sm:self-center" alt="Certifications" />
            <div className="flex ml-3 flex-col">
              <div className="font-bold text-white text-3xl">The Complete 2023 Web Development Bootcamp</div>
              <div className="text-gray-300 text-sm mb-1 ">Udemy</div>
              <div className="text-gray-300 text-sm mb-1 ">Credential ID: XYZ123</div>
              <div className="text-gray-300 text-sm mb-1 ">Skills Learned: HTML, CSS, JavaScript, React</div>
            </div>
          </div>
        </div>

        <div className="flex max-w-full mt-3 flex-col sm:flex-row rounded-xl bg-articleBg text-textColor hover:shadow-lg animate-in fade-in zoom-in delay-0 duration-1000">
          <div className="p-3 mt-2 mb-2 ml-2 flex flex-col sm:flex-row items-center">
            <img src={spoken} className="h-[180px] w-[180px] mb-1 sm:mr-2 sm:mb-0 rounded-b-xl rounded-t-md object-fill sm:self-center" alt="Certifications" />
            <div className="flex ml-3 flex-col">
              <div className="font-bold text-white text-3xl">The Complete 2023 Web Development Bootcamp</div>
              <div className="text-gray-300 text-sm mb-1 ">Udemy</div>
              <div className="text-gray-300 text-sm mb-1 ">Credential ID: XYZ123</div>
              <div className="text-gray-300 text-sm mb-1 ">Skills Learned: HTML, CSS, JavaScript, React</div>
            </div>
          </div>
        </div>

        <div className="flex max-w-full mt-3 flex-col sm:flex-row rounded-xl bg-articleBg text-textColor hover:shadow-lg animate-in fade-in zoom-in delay-0 duration-1000">
          <div className="p-3 mt-2 mb-2 ml-2 flex flex-col sm:flex-row items-center">
            <img src={maven} className="h-[180px] w-[180px] mb-1 sm:mr-2 sm:mb-0 rounded-b-xl rounded-t-md object-fill sm:self-center" alt="Certifications" />
            <div className="flex ml-3 flex-col">
              <div className="font-bold text-white text-3xl">The Complete 2023 Web Development Bootcamp</div>
              <div className="text-gray-300 text-sm mb-1 ">Udemy</div>
              <div className="text-gray-300 text-sm mb-1 ">Credential ID: XYZ123</div>
              <div className="text-gray-300 text-sm mb-1 ">Skills Learned: HTML, CSS, JavaScript, React</div>
            </div>
          </div>
        </div>
       
      </div>
    </HelmetProvider>
  );
}


export default certification;
