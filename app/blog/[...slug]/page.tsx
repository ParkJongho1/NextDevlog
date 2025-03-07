import { allPosts } from '@/.contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import dayjs from 'dayjs';

import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string[] };
};

export const generateStaticParams = async () =>
  allPosts.map((post) => [{ slug: post._raw.flattenedPath }]);

export const generateMetadata = ({ params }: Props) => {
  const pagePath = params.slug.join('/');
  const post = allPosts.find(
    (_) => _.pathSegments.map((_: any) => _.pathName).join('/') === pagePath,
  )!;
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

export default async function Post({ params }: Props) {
  const pagePath = params.slug.join('/');
  const post = allPosts.find(
    (_) => _.pathSegments.map((_: any) => _.pathName).join('/') === pagePath,
  )!;

  if (!post) notFound();

  const formatDate = dayjs(post.date).format('YYYY.MM.DD');
  const MDXComponent = getMDXComponent(post?.body.code);

  return (
    <main className="max-w-3xl px-6 pt-20 mx-auto prose dark:prose-invert lg:max-w-6xl">
      <h1 className="max-w-3xl mx-auto mt-5 mb-4 font-extrabold tracking-tight text-center sm:text-4xl">
        {post.title}
      </h1>
      <p className="w-full mt-2 text-xs text-center md:flex-row md:items-center">{formatDate}</p>
      <hr className="w-full mt-2 transition-all border-1 border-neutral-300 dark:border-neutral-700"></hr>
      <MDXComponent />
    </main>
  );
}
