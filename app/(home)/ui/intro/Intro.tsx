"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import TypeEffect from "@/app/(home)/components/type-effect";

import {useSectionInView} from "@/app/(home)/lib/hooks";

export default function Intro() {
    const { ref } = useSectionInView("Home");

  return (
    <section className='mb-2 max-w-[50rem scroll-mt-28' id="home" ref={ref}>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial= {{ opacity: 0, scale: 0}}
                    animate = {{ opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2
                    }}
                >
                    <Image
                        src='/home/ndanyi_1.jpg'
                        width="192"
                        height="192"
                        alt='Kevin Ndanyi Picture'
                        quality={95}
                        priority= {true}
                        className='h-36 w-36 rounded-full border-[0.35rem] object-cover border-white shadow-xl'
                    />
                </motion.div>
                
                <motion.span className='text-4xl absolute right-0 bottom-0'
                    initial= {{ opacity: 0, scale: 0}}
                    animate = {{ opacity: 1, scale: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7
                    }}
                >
                    👋
                </motion.span>
            </div>
            
        </div>
        <motion.div className='mb-10 mt-8 px-4 text-2xl md:text-center leading-[1.5] sm:text-4xl text-left'
            initial = {{ opacity: 0, y: 300}}
            animate = {{ opacity: 1, y: 0}}
        >
            {/*<span className='font-bold'> Hello, I'm Kevin Ndanyi.</span> I'm a {" "} <span className='font-bold'>Full-stack Developer</span> */}
            {/*<br /> with {" "} <span className='font-bold'></span>5 Years of experience. I enjoy building <span className='font-bold'>web and mobile Apps</span>*/}
            {/*<br />*/}
            {/*My focus is*/}
            {/*<span className='uppercase font-bold'> react, react-native and nextjs.</span>*/}
            <TypeEffect />
        </motion.div>
        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-8 px-4 text-lg font-medium'
            initial= {{ opacity: 0, y: 100}}
            animate = {{ opacity:1, y: 0}}
            transition={{
                delay: 0.1
            }}
        >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        //   onClick={() => {
        //     setActiveSection("Contact");
        //     setTimeOfLastClick(Date.now());
        //   }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a  className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10'  href='/home/KevinNdanyiCV.pdf' download={true}>Downlod CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
        </a>

        <a href="https://www.linkedin.com/in/kevin-ndanyi-1b5966b4/" target='_blank' className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10'><BsLinkedin />
        </a>

        <a href="https://github.com/ndanyikevin?tab=repositories" target='_blank' className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10'>
            <BsGithub />
        </a>
        
        </motion.div>
    </section>
  )
}
