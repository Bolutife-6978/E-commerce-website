import React, { useEffect } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "dark"
  );
  // access to html element
  const element = document.documentElement;

  useEffect(() => {
    // Update the class based on the theme
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.remove("dark");
      element.classList.add("light");
    }

    // Save theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme]); // Run this effect whenever 'theme' changes

  return (
    <div className="relative">
      {theme === "dark" ? (
        <img
          onClick={() => setTheme("light")}
          src={LightButton}
          alt="Light Mode"
          className="w-12 cursor-pointer transition-all duration-300"
        />
      ) : (
        <img
          onClick={() => setTheme("dark")}
          src={DarkButton}
          alt="Dark Mode"
          className="w-12 cursor-pointer"
        />
      )}
    </div>
  );
};

export default DarkMode;
