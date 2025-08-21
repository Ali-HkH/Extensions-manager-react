import React from "react";
import SwitchActive from "./SwitchActive";

function ExtensionCard({
   logo,
   name,
   description,
   isActive,
   removeFn,
   toggleFn,
}) {
   return (
      <div className="bg-neutral-50 dark:bg-neutral-800 p-5 border border-neutral-200 rounded-2xl shadow-md text-neutral-900 dark:text-neutral-50">
         <div className="flex items-start justify-start gap-4 pb-10">
            <img className="aspect-auto w-fit h-fit" src={logo} alt={name} />
            <div>
               <h1 className="text-xl font-bold pb-1">{name}</h1>
               <p className="text-neutral-500 dark:text-neutral-200">
                  {description}
               </p>
            </div>
         </div>
         <div className="flex items-center justify-between">
            <button
               type="button"
               onClick={removeFn}
               className="px-4 py-2 rounded-3xl border-2 border-neutral-200 cursor-pointer hover:bg-red-500 hover:border-red-500 hover:text-neutral-50 dark:hover:text-neutral-800 dark:text-neutral-50  focus:border-neutral-50  focus:bg-neutral-100 focus:outline-2 focus:outline-red-400 dark:focus:border-neutral-800 dark:focus:bg-neutral-600 focus:hover:text-inherit"
            >
               Remove
            </button>
            <SwitchActive isActive={isActive} switchFn={toggleFn} />
         </div>
      </div>
   );
}

export default ExtensionCard;
