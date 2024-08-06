/* eslint-disable react/prop-types */
import ThemeCard from "./ThemeCard";
import Dracula from "../../assets/images/dracula.png";
import NightOwl from "../../assets/images/night-owl.png";
import Github from "../../assets/images/github-dark.png";
import Nord from "../../assets/images/nord.png";
import dark from "../../assets/images/dark-mode.png"; 
import atom from "../../assets/images/atom.png";
import red from "../../assets/images/red.png";
import twilight from "../../assets/images/twilight.png";
import darkpro from "../../assets/images/darkpro.png";
import shades from "../../assets/images/shades.png";

import { Helmet, HelmetProvider } from "react-helmet-async";

function Settings() {
  const themeInfo = [
    {
      name: "Dracula",
      publisher: "Dracula theme",
      theme: "dracula",
      img: Dracula,
    },
    {
      name: "NightOwl",
      publisher: "sarah.drasner",
      theme: "nightOwl",
      img: NightOwl,
    },
    {
      name: "github",
      publisher: "GitHub",
      theme: "github",
      img: Github,
    },
    {
      name: "Nord",
      publisher: "arcticicestudio",
      theme: "nord",
      img: Nord,
    },
    { 
      name: "Mirage", 
      publisher: "shubham", 
      theme: "shubhMirage", 
      img: atom 
    },
    {
      name: "Xtra-Dark", 
      publisher: "shubham", 
      theme: "shubhDark", 
      img: dark 
    },
    {
     name: "Twilight", 
     publisher: "shubham", 
     theme: "twilight", 
     img: twilight 
   },
   {
    name: "Oceanic", 
    publisher: "shubham", 
    theme: "oceanic", 
    img: darkpro 
  },
  {
    name: "Red", 
    publisher: "shubham", 
    theme: "pinkishDarkTheme", 
    img: red 
  },
  {
    name: "Yellow&Pink", 
    publisher: "shubham", 
    theme: "customDarkTheme", 
    img: shades 
  },
  ];

  return (
    <HelmetProvider>
      <div className="p-8">
        <Helmet>
          <title>Shubham Sharma | Settings</title>
        </Helmet>
        <h2 className="text-3xl text-white">Manage Themes</h2>
        <div className="grid gap-5 pt-8 md:grid-cols-3 xl:grid-cols-4 animate-in fade-in zoom-in delay-0 duration-1000">
          {themeInfo.map((th) => {
            return (
              <ThemeCard
                key={th.name}
                name={th.name}
                img={th.img}
                publisher={th.publisher}
                theme={th.theme}
                // changeTheme={changeTheme}
              />
            );
          })}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Settings;
