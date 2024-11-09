"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import React from "react";

export default function TypeEffect() {
    const [text ] = useTypewriter({
        words: [
            `Hi, The Name's KEVIN NDANYI `,
            "A FullStack Developer",
            "Graphic Designer By Design",
        ],
        loop: true,
        delaySpeed: 200,
        typeSpeed: 100
    });



    return (
        <h1 className={`text-2xl font-semibold px-10 `}>
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#68B2A0" />
        </h1>
    );


}


