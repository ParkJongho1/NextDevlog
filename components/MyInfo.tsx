import Link from 'next/link';

export default function MyInfo() {
  return (
    <section>
      <h1 className="mb-5 text-4xl font-extrabold gradientText gradientAni">HoJong` Devlog</h1>
      <p className="mb-3 text-2xl">Frontend Developer</p>
      <div className="mb-3">
        <span className="text-3xl font-bold">Tech Stack</span>{' '}
        <Link
          className="hover:underline hover:underline-offset-2 decoration-wavy"
          href="https://ko.legacy.reactjs.org/"
          target="_blank"
        >
          {' '}
          React
        </Link>
        <Link
          className="hover:underline hover:underline-offset-2 decoration-wavy"
          href="https://reactnative.dev/"
          target="_blank"
        >
          {' '}
          React-Native
        </Link>
        <Link
          className="hover:underline hover:underline-offset-2 decoration-wavy"
          href="https://nextjs.org/"
          target="_blank"
        >
          {' '}
          Next
        </Link>
        <Link
          className="hover:underline hover:underline-offset-2 decoration-wavy"
          href="https://developer.mozilla.org/ko/docs/Web/JavaScript"
          target="_blank"
        >
          {' '}
          JavaScript
        </Link>
        <Link
          className="hover:underline hover:underline-offset-2 decoration-wavy"
          href="https://www.typescriptlang.org/"
          target="_blank"
        >
          {' '}
          TypeScript
        </Link>
      </div>
    </section>
  );
}
