import Link from 'next/link';

import '../style/globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jongho Devlog',
  description: 'Create by ParkJongho',
};

// 초기 테마를 설정하는 함수
function setInitialColorMode() {
  function getInitialColorMode() {
    // 로컬스토리지에서 'theme' 값 가져오기
    const persistedPreferenceMode = window.localStorage.getItem('theme');
    const hasPersistedPreference = typeof persistedPreferenceMode === 'string';

    if (hasPersistedPreference) {
      return persistedPreferenceMode;
    }

    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof preference.matches === 'boolean';

    if (hasMediaQueryPreference) {
      return preference.matches ? 'dark' : 'light';
    }

    return 'dark';
  }

  //현재 테마 모드
  const currentColorMode = getInitialColorMode();
  const element = document.body;
  element.className = currentColorMode;
  element.style.setProperty('--initial-color-mode', currentColorMode);
  // 현재 다크모드라면 다크모드를 바로 적용 시켜줌
  if (currentColorMode === 'dark') document.body.setAttribute('data-theme', 'dark');
}

const themeInitializerScript = `(function() {
  ${setInitialColorMode.toString()}
  setInitialColorMode();
})()
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializerScript,
          }}
        ></script>
        <div className="flex flex-col w-full min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
