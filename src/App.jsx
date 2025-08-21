import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import SectionHeading from "./SectionHeading/SectionHeading";
import ExtensionsSection from "./ExtensionsSection/ExtensionsSection";
import extensions from "../public/data";
import Footer from "./Footer/Footer";

export default function App() {
   const [allExtensions, setAllExtensions] = useState(extensions);
   const [shownExtensions, setShownExtensions] = useState(allExtensions);
   const [activeState, setActiveState] = useState("All");

   useEffect(() => {
      switch (activeState) {
         case "All":
            setShownExtensions(allExtensions);
            break;
         case "Active":
            setShownExtensions(
               allExtensions.filter((ext) => ext.isActive === true)
            );
            break;
         case "Inactive":
            setShownExtensions(
               allExtensions.filter((ext) => ext.isActive === false)
            );
            break;
         default:
            setShownExtensions(allExtensions);
      }
   }, [allExtensions, activeState]);

   return (
      <div className="bg-custom-gradient w-[100vw] min-h-[100vh] py-10">
         <div className="container">
            <Navbar />
            <SectionHeading
               setActiveState={setActiveState}
               activeState={activeState}
            />
            <ExtensionsSection
               extensionsList={shownExtensions}
               setAllExtensions={setAllExtensions}
            />
            <Footer />
         </div>
      </div>
   );
}
