import Link from "next/link";

export default function Navbar() {
   return (
      <nav className="sticky top-0 z-10 p-4 bg-[#111111] max-w-3xl lg:max-w-6xl mx-auto">
         <div className="flex flex-col justify-between prose prose-xl">
            <Link href="/" className="italic no-underline text-[#8effb7]">
               Devlog
            </Link>
         </div>
      </nav>
   );
}
