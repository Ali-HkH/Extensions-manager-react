import React from "react";
import FilterMenu from "./FilterMenu";

function SectionHeading({ activeState, setActiveState }) {
   return (
      <div className="pt-6 md:pt-10 pb-5 md:pb-8 flex flex-col items-center gap-y-4 md:flex-row md:justify-between">
         <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Extensions List
         </h1>
         <FilterMenu
            allFn={() => setActiveState("All")}
            activeFn={() => setActiveState("Active")}
            incativeFn={() => setActiveState("Inactive")}
            activeBtn={activeState}
         />
      </div>
   );
}

export default SectionHeading;
