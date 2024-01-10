import { useTheme } from "../../context/ThemeContext";
import ErrorImg from "../../assets/images/errorgif.gif"; 

function ErrorPage() {
  const { theme } = useTheme();

  const backgroundImageStyle = {
    backgroundImage: `url(${ErrorImg})`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div
      style={backgroundImageStyle}
      className={`flex h-[100vh] items-center justify-center theme-${theme} bg-mainBg text-textColor`}
    >
      <p className="text-4xl font-bold text-center text-white">
      Oops! The API seems to be taking a nap under the night sky. 🌙💤 Please check back later when it&apos;s awake and ready to code!
      </p>
    </div>
  );
}

export default ErrorPage;
