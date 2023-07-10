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
      <main className="px-6 mx-auto prose prose-xl prose-slate dark:prose-invert">
         <h1 className="mt-4 mb-0 text-3xl">{title}</h1>
         <p className="mt-0">{pubDate}</p>
         <article>
            <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
         </article>
      </main>
   );
}
