"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
   const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

   const handleToggle = () => {
      setDarkTheme(!darkTheme);
   };

   useEffect(() => {
      if (darkTheme !== undefined) {
         if (darkTheme) {
            document.body.setAttribute("data-theme", "dark");
            window.localStorage.setItem("theme", "dark");
         } else {
            document.body.removeAttribute("data-theme");
            window.localStorage.setItem("theme", "light");
         }
      }
   }, [darkTheme]);

   useEffect(() => {
      const root = window.document.body;
      const initialColorValue = root.style.getPropertyValue("--initial-color-mode");

      setDarkTheme(initialColorValue === "dark");
   }, []);

   return (
      <nav className="sticky top-0 z-10 max-w-3xl p-4 mx-auto lg:max-w-6xl backdrop-blur-md">
         <div className="flex justify-between">
            <div>
               <Link href="/" className="italic no-underline blog_name">
                  Devlog
               </Link>
            </div>
            <div>
               {darkTheme !== undefined && (
                  <button onClick={handleToggle} className="mr-5" style={{ background: "none" }}>
                     {darkTheme ? "light" : "dark"}
                  </button>
               )}
               <Link href="/posts" className="pr-5 no-underline">
                  blog
               </Link>
               <Link href="/about" className="pr-5 no-underline">
                  about
               </Link>
               <Link href="https://github.com/ParkJongho1" target="_blank" className="pr-5 no-underline ">
                  git
               </Link>
            </div>
         </div>
      </nav>
   );
}
