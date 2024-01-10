import { useState , useEffect} from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import noise1 from "../../assets/images/noise1.jpeg";
import noise2 from "../../assets/images/noise2.png";
import noise3 from "../../assets/images/noise3.png";

function Experience() {
  const [showFullText, setShowFullText] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [noise1, noise2, noise3];

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextImage();
    }, 3000); // Change the delay as per your requirement 

    // Cleanup function to clear the timer when the component unmounts or re-renders
    return () => clearTimeout(timer);
  }, [currentImage]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Shubham Sharma | Experience</title>
      </Helmet>
      <div className="bg-mainBg p-8">
        <div className="flex flex-col items-center gap-x-10 xl:flex-row mb-5 ">
          <div>
            <h1 className="pb-5 text-3xl text-white">My Experiences</h1>
          </div>
        </div>
        <div className="flex  max-w-xs cursor-pointer flex-col rounded-xl bg-articleBg text-textColor hover:shadow-lg animate-in fade-in zoom-in delay-150 duration-1000 ">
        <img src={images[currentImage]} className="h-[180px] rounded-b-xl rounded-t-lg object-cover" alt="Experience" />
      
          <div className="p-3">
            <div className="font-bold text-white text-xl ">NOISE, Gurgaon</div>
            <div className=" text-gray-300 text-sm mb-2">Full Stack Intern - 2mos</div>
     
            <p className="text-white text-base">
              {showFullText ? (
                // Display full text and "Hide" button
                <>
                <h2 className="font-bold">Resposibilty</h2>
                  <ul className="list-disc pl-5 text-gray-300">
                  <li>Worked collaboratively with the development team on the NoiseFit Project to create an intuitive Watch-Face Component, enhancing the user experience for both customers and administrators.</li>
                  <li>Precisely Designed the architecture of the WatchFace Component to meet the project&apos;s specific requirements to manage over 1500+ watch-face designs data.</li>
                  <li>Enhanced the Watch-Face API and incorporated pagination.</li>
                  <li>Successfully implemented the &apos;Add Watch-Face&apos; functionality, facilitating the addition of watch faces to over 130+ active smart watches.</li>
                  <li>Contributed to the development of the &apos;Edit Watch-Face&apos; functionality, enabling seamless Watch-Face updates on supported watch models.</li>
                  <li>Engaged in regular code reviews, debugging, and troubleshooting to maintain code quality and resolve issues promptly.</li>
                </ul>
                <button          
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm px-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
                  onClick={toggleText}>Hide</button>
                </>
              ) : (
                // Display truncated text and "Read More" button
                <>
                <h2 className="font-bold ">Resposibilty</h2>
                  <ul className="list-disc pl-5 text-gray-300">
                  <li>Worked collaboratively with the development team on the NoiseFit Project to create an intuitive Watch-Face Component...</li>
                  </ul>
                  {/* Add a button to show more text */}
                  <button 
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm px-1  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
                  onClick={toggleText}>Read More</button>
                </>
              )}
            </p>
          </div>
          <div className="px-6 pt-1 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Redux</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MySQL</span>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Experience;
