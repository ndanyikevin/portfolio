
import Header from "./ui/header/Header";
import Intro from "./ui/intro/Intro";
import SectionDivider from "./ui/section-divider";
import About from "./ui/about/About";                       
import Projects from "./ui/projects/projects";
import ActiveSectionContextProvider from "@/app/(home)/context/active-section-context";
import MySkills from "@/app/(home)/ui/skills/skills";
import Experience from "@/app/(home)/ui/experience/experience";
import Timeline from "@/app/(home)/components/timeline";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
        <ActiveSectionContextProvider>
            <Header/>
            <Intro />
            <SectionDivider />
            <About />
            <SectionDivider/>
            <Projects />
            <MySkills />
            <Experience />
            <Timeline />
        </ActiveSectionContextProvider>

    </main>
  );
}
