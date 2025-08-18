import React, { useEffect, useState } from "react";

function ThemeToggle() {
   const [theme, setTheme] = useState(() => {
      if (localStorage.theme) {
         return localStorage.theme;
      }
      return window.matchMedia("(prefers-color-scheme:dark)").matches
         ? "dark"
         : "light";
   });

   useEffect(() => {
      const root = document.documentElement;
      if (theme === "dark") {
         root.setAttribute("data-theme", "dark");
         localStorage.theme = "dark";
      } else {
         root.removeAttribute("data-theme");
         localStorage.theme = "light";
      }
   }, [theme]);

   function changeTheme() {
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
   }
   return (
      <button
         onClick={changeTheme}
         className="flex items-center justify-center bg-neutral-100 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 p-3 rounded-lg cursor-pointer border-2 border-neutral-50 dark:border-neutral-800 focus:outline-2 focus:outline-red-400"
      >
         {theme === "light" ? (
            <img
               className="aspect-square"
               src={`${process.env.PUBLIC_URL}/assets/images/icon-moon.svg`}
               alt="moon-icon"
            />
         ) : (
            <img
               className="aspect-square"
               src={`${process.env.PUBLIC_URL}/assets/images/icon-sun.svg`}
               alt="moon-icon"
            />
         )}
      </button>
   );
}

export default ThemeToggle;
