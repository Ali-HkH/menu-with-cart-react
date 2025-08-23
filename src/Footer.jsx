import React from "react";

function Footer() {
   return (
      <div class="flex flex-col sm:flex-row items-center justify-center pt-8 text-rose-900">
         <div>
            Challenge by{" "}
            <a
               className="text-rose-500 font-semibold pl-1 underline-offset-2 hover:underline"
               href="https://www.frontendmentor.io?ref=challenge"
            >
               Frontend Mentor
            </a>
            .
         </div>
         <div>
            Coded by{" "}
            <a
               className="text-rose-500 font-semibold pl-1 underline-offset-2 hover:underline"
               href="#"
            >
               Your Name Here
            </a>
            .
         </div>
      </div>
   );
}

export default Footer;
