'use client';

import { ChangeEvent, useState } from 'react';

import { Post, allPosts } from '@/.contentlayer/generated';

import ListItem from './ListItem';

export default function Posts() {
  const [search, setSearch] = useState<string>('');
  const [click, setClick] = useState<string>('');

  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleClick = (e: string) => {
    setClick(e);
  };
  return (
    <section className="">
      <button onClick={() => handleClick('')}>all</button>
      <button onClick={() => handleClick('react')}>category</button>
      <div className="flex items-center w-full h-16 gap-4 px-4 mt-10 flex-nowrap rounded-2xl serch_input">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          className="flex-1 bg-transparent outline-none appearance-none serch_placeholder"
          onChange={handleSearch}
          placeholder="포스트 제목 검색"
        />
      </div>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mt-5">
        {(posts as Post[])
          .filter(
            (post) =>
              post.title.toLowerCase().includes(search) &&
              post.category.toLocaleLowerCase().includes(click),
          )
          .map((post: Post) => (
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
