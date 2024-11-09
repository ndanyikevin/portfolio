"use client"
import SectionHeading from "../../components/section-heading";
import { motion } from "framer-motion"


import {useSectionInView} from "@/app/(home)/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About", 1)


  return (
    <motion.section className="md:mb-8 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial ={{ opacity:0, y:100}}
      animate ={{ opacity: 1, y: 0}}
      transition= {{delay: 0.175}}
      id="about"
      ref = {ref}
    >
        <SectionHeading className={'bg-inherit mb-16'} >
          About Me
        </SectionHeading>
        <p className="mb-6 text-center">
            I'm a passionate Next.js developer with a strong foundation in building modern, responsive applications. My skill set extends beyond the React ecosystem to include Laravel and Django, enabling me to work with full-stack web applications across multiple tech stacks.
        </p>
        <p className="mb-2 text-center">
             I bring a flexible, solution-driven approach to every project, whether I'm developing interactive frontends with Next.js or crafting robust backends in Laravel and Django. Let's create something impactful together!
        </p>

    </motion.section>
  )
}
