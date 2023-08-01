import Link from "next/link";

import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/post";
import { notFound } from "next/navigation";

export function generateStaticParams() {
   const posts = getSortedPostsData();

   return posts.map((post) => ({
      postId: post.id,
   }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
   const posts = getSortedPostsData();
   const { postId } = params;

   const post = posts.find((post) => post.id === postId);

   if (!post) {
      return {
         title: "Post Not Found",
      };
   }

   return {
      title: post.title,
   };
}

export default async function Post({ params }: { params: { postId: string } }) {
   const posts = getSortedPostsData();
   const { postId } = params;

   if (!posts.find((post) => post.id === postId)) {
      return notFound();
   }

   const { title, date, contentHtml } = await getPostData(postId);

   const pubDate = getFormattedDate(date);

   return (
      <main className="max-w-3xl px-6 mx-auto prose-xl lg:max-w-6xl prose-slate">
         <h1 className="max-w-3xl mx-auto mt-5 mb-4 text-3xl font-extrabold tracking-tight text-center sm:text-5xl">{title}</h1>

         <p className="w-full mt-2 text-xs text-center md:flex-row md:items-center">{pubDate}</p>
         <hr className="w-full mt-2 transition-all border-1 border-neutral-300 dark:border-neutral-700"></hr>
         <article>
            <section className="text-center" dangerouslySetInnerHTML={{ __html: contentHtml }} />
         </article>
      </main>
   );
}
