import Posts from "../components/Posts";
import MyInfo from "../components/MyInfo";

export default function Home() {
   return (
      <main className="max-w-3xl pl-4 pr-4 mx-auto mt-5 lg:max-w-6xl">
         <MyInfo />
         <Posts />
      </main>
   );
}
