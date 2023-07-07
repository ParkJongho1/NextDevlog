import { getSortedPostsData } from "@/lib/post";
import ListItem from "./ListItem";

export default function Posts() {
   const posts = getSortedPostsData();
   console.log(posts);

   return (
      <section className="max-w-2xl mt-6">
         <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
         <div className="w-full">
            {posts.map((post) => (
               <ListItem key={post.id} post={post} />
            ))}
         </div>
      </section>
   );
}
