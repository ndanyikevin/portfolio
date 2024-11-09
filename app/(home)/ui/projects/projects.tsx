
"use client"
import React from 'react'
import SectionHeading from '../../components/section-heading'
import { projectsData } from '../../lib/data'
import Project from './project'

import {useSectionInView} from "@/app/(home)/lib/hooks";

export default function Projects() {

    const { ref } = useSectionInView("Projects", 0.4)
  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
        <SectionHeading className='mb-4'>
            My Projects
        </SectionHeading>
        {
                projectsData.map((project, index)=>(
                    <React.Fragment key={index}>
                        <Project {...project}/>
                    </React.Fragment>
                    
                ))
            }
    </section>
  )
}
