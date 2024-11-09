import React from 'react'

type SectionHeadingProps ={
    children: React.ReactNode,
    className: string
}

export default function SectionHeading({children, className}: SectionHeadingProps) {
  return (
    <h2 className={`text-center text-3xl font-medium capitalize ${className}`}>{children}</h2>
  )
}
