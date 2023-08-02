import { getSortedPostsData } from "@/lib/post";
import ListItem from "./ListItem";

export default function Posts() {
   const posts = getSortedPostsData();

   return (
      <section className="w-full mt-6">
         <h2 className="text-4xl font-bold">Blog</h2>
         <ul className="">
            {posts.map((post) => (
               <ListItem key={post.id} post={post} />
            ))}
         </ul>
      </section>
   );
}
