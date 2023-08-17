import Link from 'next/link';
import dayjs from 'dayjs';

interface BlogPostProps {
  date: string;
  title: string;
  category: string;
  description: string;
  slug: string;
}
// export default function ListItem({ post }: Props) {
export default function ListItem({ date, title, category, description, slug }: BlogPostProps) {
  // const { id, title, description, date } = post;
  // const formattedDate = getFormattedDate(date);
  const formatDate = dayjs(date).format('YYYY.MM.DD');
  return (
    <Link className="p-4 m-5 text-2xl" href={`/blog/${slug}`}>
      <p className="font-extrabold ">{title}</p>
      <p className="mt-1 text-lg">{description}</p>
      <p className="mt-1 text-sm">{formatDate}</p>
    </Link>
  );
}
