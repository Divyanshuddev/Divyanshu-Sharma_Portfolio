"use client"

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"
interface WavyTextProps {
    word: string;
}
const WavyText: React.FC<WavyTextProps> = ({ word }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            const { chars } = splitText(
                containerRef.current.querySelector(".wavy")!
            )
            containerRef.current.style.visibility = "visible"

            const staggerDelay = 0.15

            animate(
                chars,
                { y: [-20, 20] },
                {
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    duration: 2,
                    delay: stagger(
                        staggerDelay,
                        { startDelay: -staggerDelay * chars.length }
                    ),
                }
            )
        })
    }, [])

    return (
        <div className="container" ref={containerRef}>
            <h1 className="h1">
                <span className="wavy">{word}</span>
            </h1>
            <Stylesheet />
        </div>
    )
}

function Stylesheet() {
    return (
        <style>{`
            .container {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                width: 100%;
                visibility: hidden;
                color:#838DAB
            }

            .split-char {
                will-change: transform, opacity;
            }
        `}</style>
    )
}

export default WavyText
