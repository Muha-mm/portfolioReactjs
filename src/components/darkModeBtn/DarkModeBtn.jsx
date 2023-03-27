import sun from "./Sun.svg";
import moon from "./Moon.svg";
import "./DarkModeBtn.css";
import { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "./../../utils/useLocalStorage";

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark mode", false);
  const ref = useRef();

  const click = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode === true) {
      ref.current.classList.add("darkModeBtn--active");
      document.body.classList.add("dark");
    } else {
      ref.current.classList.remove("darkModeBtn--active");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button onClick={click} ref={ref} class="darkModeBtn">
      <img src={sun} alt="lightMode" class="darkModeBtnIcon" />
      <img src={moon} alt="darkMode" class="darkModeBtnIcon" />
    </button>
  );
};

export default DarkModeBtn;
