import Link from "next/link";

export default function Navbar() {
   return (
      <nav className="sticky top-0 z-10 p-4 bg-[#111111] max-w-3xl lg:max-w-6xl mx-auto">
         <div className="flex justify-between">
            <div>
               <Link href="/" className="italic no-underline text-[#8effb7]">
                  Devlog
               </Link>
            </div>
            <div>
               <Link href="/" className="pr-5 no-underline text-[#ffffff]">
                  blog
               </Link>
               <Link href="/" className="pr-5 no-underline text-[#ffffff]">
                  about
               </Link>
               <Link href="/" className="pr-5 no-underline text-[#ffffff]">
                  git
               </Link>
            </div>
         </div>
      </nav>
   );
}
