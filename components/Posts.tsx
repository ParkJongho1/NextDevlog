import { Post } from '@/.contentlayer/generated';

import ListItem from './ListItem';

interface RecentPostsProps {
  posts: Post[];
}

export default function Posts({ posts }: RecentPostsProps) {
  return (
    <section className="w-full mt-6">
      <h2 className="pt-5 text-4xl font-bold">Blog</h2>
      <ul className="">
        {posts.map((post: Post) => (
          <ListItem
            key={post._id}
            date={post.date}
            title={post.title}
            category={post.category}
            description={post.description}
            slug={post._raw.flattenedPath}
          />
        ))}
      </ul>
    </section>
  );
}
