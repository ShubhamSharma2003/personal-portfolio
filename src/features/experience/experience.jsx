import { useState , useEffect} from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import noise1 from "../../assets/images/noise1.jpeg";
import noise2 from "../../assets/images/noise2.png";
import noise3 from "../../assets/images/noise3.png";
import HyperText from '../../components/ui/hyper-text';

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
        <div className="mb-5 flex flex-col items-center gap-x-10 xl:flex-row ">
          <div>
            <HyperText
              className="pb-5 text-3xl text-white"
              text="My Experiences"
            />
          </div>
        </div>
        <div className="flex  max-w-xs cursor-pointer flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg ">
          <img
            src={images[currentImage]}
            className="h-[180px] rounded-b-xl rounded-t-lg object-cover"
            alt="Experience"
          />

          <div className="p-5">
            <div className="text-xl font-bold text-white ">NOISE, Gurgaon</div>
            <div className=" mb-2 text-sm text-gray-300">
              Full Stack Intern - 2mos
            </div>

            <p className="text-base text-white">
              {showFullText ? (
                // Display full text and "Hide" button
                <>
                  <h2 className="font-bold">Resposibilty</h2>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>
                      Worked collaboratively with the development team on the
                      NoiseFit Project to create an intuitive Watch-Face
                      Component, enhancing the user experience for both
                      customers and administrators.
                    </li>
                    <li>
                      Precisely Designed the architecture of the WatchFace
                      Component to meet the project&apos;s specific requirements
                      to manage over 1500+ watch-face designs data.
                    </li>
                    <li>
                      Enhanced the Watch-Face API and incorporated pagination.
                    </li>
                    <li>
                      Successfully implemented the &apos;Add Watch-Face&apos;
                      functionality, facilitating the addition of watch faces to
                      over 130+ active smart watches.
                    </li>
                    <li>
                      Contributed to the development of the &apos;Edit
                      Watch-Face&apos; functionality, enabling seamless
                      Watch-Face updates on supported watch models.
                    </li>
                    <li>
                      Engaged in regular code reviews, debugging, and
                      troubleshooting to maintain code quality and resolve
                      issues promptly.
                    </li>
                  </ul>
                  <button
                    className="font-small mt-2 inline-flex items-center rounded-lg bg-blue-700 px-1 text-center text-sm text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={toggleText}
                  >
                    Hide
                  </button>
                </>
              ) : (
                // Display truncated text and "Read More" button
                <>
                  <h2 className="font-bold ">Resposibilty</h2>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>
                      Worked collaboratively with the development team on the
                      NoiseFit Project to create an intuitive Watch-Face
                      Component...
                    </li>
                  </ul>
                  {/* Add a button to show more text */}
                  <button
                    className="font-small mt-2 inline-flex items-center rounded-lg bg-blue-700 px-1 text-center text-sm text-white  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={toggleText}
                  >
                    Read More
                  </button>
                </>
              )}
            </p>
          </div>
          <div className="px-6 pb-2 pt-1">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              React
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              Redux
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              MySQL
            </span>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Experience;
