import Link from "next/link";

export default function MyInfo() {
   return (
      <section>
         <h1 className="mb-5 text-4xl font-extrabold text-white">HoJong` Devlog</h1>
         <p className="mb-3 text-2xl text-slate-200">Frontend Developer</p>
         <div className="mb-3 text-slate-400">
            <span className=" text-slate-100">Tech Stack</span> <Link href="/">JavaScript TypeScript React React-Native</Link>
         </div>
      </section>
   );
}
