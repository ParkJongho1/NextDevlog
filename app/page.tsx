import { allPosts } from '@/.contentlayer/generated';

// Component
import Posts from '../components/Posts';
import MyInfo from '../components/MyInfo';

export default function Home() {
  const posts = allPosts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .slice(0, 5);
  return (
    <main className="w-full max-w-3xl pt-20 pl-4 pr-4 mx-auto mt-5 lg:max-w-6xl grow">
      <MyInfo />
      <h2 className="pt-5 text-5xl font-extrabold">Recent Posts</h2>
      <Posts posts={posts} />
    </main>
  );
}
