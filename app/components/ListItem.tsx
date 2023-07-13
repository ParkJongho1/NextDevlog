import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
   post: BlogPost;
};

export default function ListItem({ post }: Props) {
   const { id, title, date } = post;
   const formattedDate = getFormattedDate(date);

   return (
      <li className="p-4 m-5 text-2xl border border-white border-solid rounded-md grow shrink basis-3/12 will-change dark:text-white/90 hover:bg-white hover:text-black">
         <Link className=" hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>
            {title}
         </Link>
         <br />
         <p className="mt-1 text-sm">{formattedDate}</p>
      </li>
   );
}
