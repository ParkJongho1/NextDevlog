import Link from "next/link";

export default function Navbar() {
   return (
      <nav className="sticky top-0 z-10 p-4 bg-slate-600 drop-shadow-xl">
         <div className="flex flex-col justify-between mx-auto prose prose-xl sm:flex-row">
            <Link href="/" className="no-underline text-white/90 hover:text-white">
               Jongho`Devlog
            </Link>
         </div>
      </nav>
   );
}
