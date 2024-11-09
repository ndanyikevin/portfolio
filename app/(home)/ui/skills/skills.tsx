"use client"
import SectionHeading from "@/app/(home)/components/section-heading";
import {skillsData} from "@/app/(home)/lib/data";
import {useSectionInView} from "@/app/(home)/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    })
}

export default function  MySkills() {
    const { ref } = useSectionInView("Skills")
    return (
        <section className={"mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"} id="skills" ref={ref}>
            <SectionHeading className={"mt-32 mb-12"}>
                My Skills
            </SectionHeading>
            <ul className={"flex flex-wrap justify-center gap-2 text-lg text-gray-800"}>
                {
                    skillsData.map((skill, index)=>(
                        <motion.li key={index}
                        className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                        variants={fadeInAnimationVariants}
                       initial="initial"
                                   whileInView="animate"
                                   viewport={{
                                       once: true,
                                   }}
                                   custom={ index }
                        > {skill}</motion.li>
                    ))
                }
            </ul>
        </section>
    )
}