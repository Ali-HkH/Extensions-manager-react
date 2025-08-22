import React from "react";

function SwitchActive({ isActive, switchFn }) {
   return (
      <button
         type="button"
         onClick={switchFn}
         className={`w-10 h-6 px-0.5 flex items-center relative rounded-xl border-1 border-neutral-50 dark:border-neutral-800 focus:outline-2 focus:outline-red-400 cursor-pointer transition-all duration-300 ${
            isActive
               ? "bg-red-500 hover:bg-red-400"
               : "bg-neutral-300 dark:bg-neutral-500"
         }`}
         aria-label={`Switch to ${isActive ? "inactive" : "active"}`}
      >
         <span className="sr-only">
            switch button - current : {isActive ? "active" : "inactive"}
         </span>
         <span
            className={`absolute size-5 rounded-full bg-neutral-50 transition-all duration-300 ${
               isActive ? "translate-x-3.5" : "translate-x-0"
            }`}
         ></span>
      </button>
   );
}

export default SwitchActive;
