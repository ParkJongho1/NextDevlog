import Link from "next/link";

export default function MyInfo() {
   return (
      <section className="max-w-3xl pl-4 mx-auto mt-5 lg:max-w-6xl">
         <h1 className="mb-5 text-4xl font-extrabold text-white">Park Jongho</h1>
         <p className="mb-3 text-slate-200">Frontend Developer</p>
         <div className="mb-3 text-slate-400">
            Tech Stack <Link href="/">JavaScript</Link>
         </div>
      </section>
   );
}
