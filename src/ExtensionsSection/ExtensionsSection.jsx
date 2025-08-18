import React, { useEffect } from "react";
import ExtensionCard from "../ExtensionCard/ExtensionCard";

function ExtensionsSection({ extensionsList, setAllExtensions }) {

   function removeExtension(name) {
      setAllExtensions((prev) => prev.filter((items) => items.name !== name));
   }

   function toggleIsActive(name) {
      setAllExtensions((prev) =>
         prev.map((ext) =>
            ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
         )
      );
   }

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
         {extensionsList.map((ext, index) => (
            <ExtensionCard
               key={index}
               {...ext}
               removeFn={() => removeExtension(ext.name)}
               toggleFn={() => toggleIsActive(ext.name)}
            />
         ))}
      </div>
   );
}

export default ExtensionsSection;
