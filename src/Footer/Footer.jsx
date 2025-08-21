import React from "react";

function Footer() {
   return (
      <div class="pt-8 flex items-center justify-center text-neutral-900 dark:text-neutral-50">
         Challenge by{" "}
         <a
            href="https://www.frontendmentor.io?ref=challenge"
            className="text-red-500 pl-1 font-medium underline-offset-2 hover:underline"
         >
            Frontend Mentor
         </a>
         . Coded by{" "}
         <a
            href="https://www.frontendmentor.io/profile/Ali-HkH"
            className="text-red-500 pl-1 font-medium underline-offset-2 hover:underline"
         >
            Ali-HkH
         </a>
         .
      </div>
   );
}

export default Footer;
