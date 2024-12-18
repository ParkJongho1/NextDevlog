// 'use client';

// import { ChangeEvent, useState } from 'react';

// import { Post, allPosts } from '@/.contentlayer/generated';

// // Component
// import Posts from '@/components/Posts';

// export default function Post() {
//   const [search, setSearch] = useState<string>('');

//   const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

//   const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value.toLowerCase());
//   };

//   return (
//     <div className="w-full max-w-3xl pt-20 pl-4 pr-4 mx-auto mt-5 lg:max-w-6xl">
//       <h2 className="pt-5 text-5xl font-extrabold">Blog</h2>
//       <div className="flex items-center w-full h-16 gap-4 px-4 mt-10 flex-nowrap rounded-2xl serch_input">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//           />
//         </svg>
//         <input
//           type="text"
//           className="flex-1 bg-transparent outline-none appearance-none serch_placeholder"
//           onChange={handleSearch}
//           placeholder="포스트 제목 검색"
//         />
//       </div>
//       <Posts
//         posts={(posts as Post[]).filter((post) => post.title.toLowerCase().includes(search))}
//       />
//     </div>
//   );
// }
