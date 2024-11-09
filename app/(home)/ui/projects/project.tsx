import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectsData } from '../../lib/data';

type ProjectProps = typeof projectsData[number];

export default function Project({
                                    title,
                                    description,
                                    tags,
                                    imageUrl,
                                }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-8 sm:mb-10 last:mb-0"
        >
            <section className="bg-white max-w-[42rem] border border-black/5 overflow-hidden sm:p-6 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 transition">
                <div className="flex flex-col items-center">
                    {/* Image with padding from the top */}
                    <div className="pt-4 pb-6 w-full">
                        <Image
                            src={imageUrl}
                            alt={title}
                            className="rounded-t-lg object-cover h-56 w-full"
                            width={600}
                            height={300}
                        />
                    </div>
                    {/* Text section */}
                    <div className="p-6 text-center">
                        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                        <p className="leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                            {description.split(" ").slice(0, 10).join(" ")}...{" "}
                            <span className="text-blue-600 cursor-pointer">See more</span>
                        </p>
                        <ul className="flex flex-wrap justify-center gap-2">
                            {tags.map((tag, index) => (
                                <li
                                    key={index}
                                    className="bg-black/[0.7] px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

// Grid wrapper for the project cards
export function ProjectGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    imageUrl={project.imageUrl}
                />
            ))}
        </div>
    );
}
