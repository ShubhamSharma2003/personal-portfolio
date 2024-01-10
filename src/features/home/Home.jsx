import { Link } from "react-router-dom";
import Illustration from "./Illustration";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Shubham Sharma | Home</title>
      </Helmet>

      

      <div className="relative flex  min-h-[75svh]  items-center overflow-hidden ">
        <div className="animate-in fade-in zoom-in delay-150 duration-1000 absolute left-10 z-10 gap-y-0 text-[12rem] font-extrabold leading-none text-bgText max-sm:hidden">
          <h1>CODE</h1>
          <h1>CREATE</h1>
          <h1>CONQUER</h1>
        </div>
        
        <div className="relative z-20 flex flex-col items-center gap-y-10 p-4 md:w-full md:flex-row md:items-center md:justify-between md:px-28">
          <div>
            <h2 className="animate-in fade-in zoom-in delay-150 duration-1000 text-3xl font-bold text-[#eee] md:text-5xl  xl:text-8xl">
              Shubham Sharma
            </h2>
            <div className=" typewriter w-max">
              <h2 className="text-xl font-bold text-[#eee] md:text-3xl ">
                Aspiring Software Engineer
              </h2>
            </div>
            <Link to="/projects" className=" ml-2 relative inline-flex items-center justify-start inline-block mt-6 px-5 py-3 overflow-hidden font-bold rounded-full group">
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                View Work
              </span>
              <span className="absolute inset-0 border-2 border-white rounded-full"></span>
            </Link>

            <Link to="/contact" className="ml-3 relative inline-flex items-center justify-start inline-block mt-6 px-5 py-3 overflow-hidden font-bold rounded-full group bg-white text-black">
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-gray-900 opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
                Contact Me
              </span>
              <span className="absolute inset-0 border-2 border-white rounded-full"></span>
            </Link>
          </div>
          
          <Illustration />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Home;

