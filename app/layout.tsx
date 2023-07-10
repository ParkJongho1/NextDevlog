import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import MyInfo from "./components/MyInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Jongho Devlog",
   description: "Create by ParkJongho",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="ko">
         <body className="bg-[#111111]">
            <Navbar />
            {children}
         </body>
      </html>
   );
}
