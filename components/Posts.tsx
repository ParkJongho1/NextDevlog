import { Post } from '@/.contentlayer/generated';

import ListItem from './ListItem';

interface RecentPostsProps {
  posts: Post[];
}

export default function Posts({ posts }: RecentPostsProps) {
  return (
    <section className="">
      <div className="mt-5 font-bold">category</div>
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
