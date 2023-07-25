import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
   post: BlogPost;
};

export default function ListItem({ post }: Props) {
   const { id, title, description, date } = post;
   const formattedDate = getFormattedDate(date);

   return (
      <Link
         className="p-4 m-5 text-2xl border border-white border-solid rounded-md grow shrink basis-3/12 will-change dark:text-white/90 hover:bg-white hover:text-black"
         href={`/posts/${id}`}
      >
         <p className="font-extrabold ">{title}</p>
         <p className="mt-1 text-lg">{description}</p>
         <p className="mt-1 text-sm">{formattedDate}</p>
      </Link>
   );
}
