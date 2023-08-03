import { allPosts } from '@/.contentlayer/generated';

// Component
import Posts from '../components/Posts';
import MyInfo from '../components/MyInfo';

export default function Home() {
  const posts = allPosts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .slice(0, 5);
  return (
    <main className="max-w-3xl pl-4 pr-4 mx-auto mt-5 lg:max-w-6xl">
      <MyInfo />
      <Posts posts={posts} />
    </main>
  );
}
