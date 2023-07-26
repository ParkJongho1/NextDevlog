import { getSortedPostsData } from "@/lib/post";
import ListItem from "./ListItem";

export default function Posts() {
   const posts = getSortedPostsData();

   return (
      <section className="w-full mt-6">
         <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
         <ul className="flex flex-wrap">
            {posts.map((post) => (
               <ListItem key={post.id} post={post} />
            ))}
         </ul>
      </section>
   );
}
