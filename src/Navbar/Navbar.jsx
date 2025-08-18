import React from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
   return (
      <div className="bg-neutral-50 dark:bg-neutral-800 p-2.5 shadow-sm rounded-xl flex items-center justify-between">
         <Logo />
         <ThemeToggle />
      </div>
   );
}

export default Navbar;
