import React from "react";
import FilterBtn from "./FilterBtn";

function FilterMenu({allFn, activeFn, incativeFn, activeBtn}) {


   return (
      <div className="flex items-center justify-center gap-x-2">
         <FilterBtn
            txt="All"
            isActive={activeBtn === "All"}
            filterfn={allFn}
         />
         <FilterBtn
            txt="Active"
            isActive={activeBtn === "Active"}
            filterfn={activeFn}
         />
         <FilterBtn
            txt="Inactive"
            isActive={activeBtn === "Inactive"}
            filterfn={incativeFn}
         />
      </div>
   );
}

export default FilterMenu;
