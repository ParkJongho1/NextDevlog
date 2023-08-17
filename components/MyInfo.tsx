import Link from 'next/link';

export default function MyInfo() {
  return (
    <section>
      <h1 className="mb-5 text-4xl font-extrabold gradientText gradientAni">HoJong` Devlog</h1>
      <p className="mb-3 text-2xl">Frontend Developer</p>
      <div className="mb-3">
        <span>Tech Stack</span>{' '}
        <Link href="https://developer.mozilla.org/ko/docs/Web/JavaScript" target="_blank">
          JavaScript
        </Link>
        <Link href="https://www.typescriptlang.org/" target="_blank">
          {' '}
          TypeScript
        </Link>
        <Link href="https://ko.legacy.reactjs.org/" target="_blank">
          {' '}
          React
        </Link>
        <Link href="https://reactnative.dev/" target="_blank">
          {' '}
          React-Native
        </Link>
      </div>
    </section>
  );
}
