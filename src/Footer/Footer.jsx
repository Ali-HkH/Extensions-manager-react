import React from "react";

function Footer() {
   return (
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-center text-neutral-900 dark:text-neutral-50">
         <div>
            Challenge by{" "}
            <a
               href="https://www.frontendmentor.io?ref=challenge"
               className="text-red-500 pl-1 font-medium underline-offset-2 hover:underline"
            >
               Frontend Mentor
            </a>
            .
         </div>
         <div>
            Coded by{" "}
            <a
               href="https://www.frontendmentor.io/profile/Ali-HkH"
               className="text-red-500 pl-1 font-medium underline-offset-2 hover:underline"
            >
               Ali-HkH
            </a>
            .
         </div>
      </div>
   );
}

export default Footer;
