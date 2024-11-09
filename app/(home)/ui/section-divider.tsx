"use client"
import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
      // <motion.div className='bg-black my-12 h-8 w-1'
      //             initial={{opacity: 0, y: 100}}
      //             // animate={{opacity: 1, y: 0}}
      //             transition={{
      //                 delay: 0.125
      //             }}
      //
      // >
      //     <motion.hr
      //         className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"/>
      // </motion.div>
      <motion.hr
           className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"/>
)
}
