import Image from "next/image";
import Header from "./ui/header/Header";
import Intro from "./ui/intro/Intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header/>
      <Intro />
    </main>
  );
}
