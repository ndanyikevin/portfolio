import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/app/(home)/context/active-section-context";
import {useEffect} from "react";
import {SectionName} from "@/app/(home)/lib/types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const {ref, inView } = useInView({
        threshold
    })
    const {setActiveSection, timeOfLastClick } = useActiveSectionContext()
    useEffect(() =>{
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Projects")
        }
    },[inView, setActiveSection, timeOfLastClick, sectionName])
    return {
        ref
    }
}