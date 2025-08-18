import React from "react";

function FilterBtn({ txt, isActive, filterfn }) {
   return (
      <button
         onClick={filterfn}
         className={`px-5 py-1.5  text-lg rounded-3xl border-2 border-neutral-50 dark:border-neutral-900 focus:outline-2 focus:outline-red-400  cursor-pointer  ${
            isActive
               ? "bg-red-500 text-neutral-100 dark:text-neutral-900"
               : "bg-neutral-50 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 dark:hover:bg-neutral-600 dark:hover:text-neutral-100 dark:focus:bg-neutral-600"
         }`}
      >
         {txt}
      </button>
   );
}

export default FilterBtn;
