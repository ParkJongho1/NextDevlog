import { allPosts } from '@/.contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import dayjs from 'dayjs';

import { notFound } from 'next/navigation';

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

export default async function Post({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const formatDate = dayjs(post.date).format('YYYY.MM.DD');
  const MDXComponent = getMDXComponent(post?.body.code);
  return (
    <main className="max-w-3xl px-6 pt-20 mx-auto prose-base lg:max-w-6xl">
      <h1 className="max-w-3xl mx-auto mt-5 mb-4 text-3xl font-extrabold tracking-tight text-center sm:text-5xl">
        {post.title}
      </h1>
      <p className="w-full mt-2 text-xs text-center md:flex-row md:items-center">{formatDate}</p>
      <hr className="w-full mt-2 transition-all border-1 border-neutral-300 dark:border-neutral-700"></hr>
      <MDXComponent />
    </main>
  );
}
