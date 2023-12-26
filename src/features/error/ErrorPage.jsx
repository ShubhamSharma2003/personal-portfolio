import { useTheme } from "../../context/ThemeContext";

function ErrorPage() {
  const { theme } = useTheme();

  return (
    <div
      className={` flex h-[100vh] items-center justify-center theme-${theme} bg-mainBg text-textColor`}
    >
      <p className=" text-2xl font-bold">
      Oops! The API's coffee break is running longer than expected. ☕️💤 Check back in an hour when it's caffeinated and ready to code again!
      </p>
    </div>
  );
}

export default ErrorPage;
