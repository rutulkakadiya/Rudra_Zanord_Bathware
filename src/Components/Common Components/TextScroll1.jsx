import React, { useEffect, useRef, useState } from 'react'
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from 'framer-motion'
import { cn } from '../util/util'

export default function TextScroll1({ text, default_velocity = 5, className }) {
    const ParallaxText = ({ children, baseVelocity = 100, className }) => {
        const baseX = useMotionValue(0)
        const { scrollY } = useScroll()
        const scrollVelocity = useVelocity(scrollY)
        const smoothVelocity = useSpring(scrollVelocity, {
            damping: 50,
            stiffness: 400,
        })

        const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
            clamp: false,
        })

        const [repetitions, setRepetitions] = useState(1)
        const containerRef = useRef(null)
        const textRef = useRef(null)

        useEffect(() => {
            const calculateRepetitions = () => {
                if (containerRef.current && textRef.current) {
                    const containerWidth = containerRef.current.offsetWidth
                    const textWidth = textRef.current.offsetWidth
                    const newRepetitions = Math.ceil(containerWidth / textWidth) + 2
                    setRepetitions(newRepetitions)
                }
            }

            calculateRepetitions()
            window.addEventListener('resize', calculateRepetitions)
            return () => window.removeEventListener('resize', calculateRepetitions)
        }, [children])

        const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`)

        const directionFactor = useRef(1)
        useAnimationFrame((t, delta) => {
            let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

            if (velocityFactor.get() < 0) {
                directionFactor.current = -1
            } else if (velocityFactor.get() > 0) {
                directionFactor.current = 1
            }

            moveBy += directionFactor.current * moveBy * velocityFactor.get()
            baseX.set(baseX.get() + moveBy)
        })

        return (
            <div className="w-full overflow-hidden whitespace-nowrap mt-[50px]" ref={containerRef}>
                <motion.div className={cn('inline-block', className)} style={{ x }}>
                    {Array.from({ length: repetitions }).map((_, i) => (
                        <span key={i} ref={i === 0 ? textRef : null}>
                            {Array.isArray(children) ? (
                                children.map((item, index) => (
                                    <span key={index} className="heading-text inline-block text-black hover:text-[#FDCB2E] transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer">
                                        {item}
                                        {index < children.length - 1 && (
                                            <span className="mx-[20px] text-[#FDCB2E]">•</span>
                                        )}
                                    </span>
                                ))
                            ) : (
                                <span className="text-black">{children}</span>
                            )}
                        </span>
                    ))}
                </motion.div>
            </div>
        )
    }

    return (
        <div>
            <section className="relative w-full">
                <ParallaxText baseVelocity={default_velocity} className={className}>
                    {text}
                </ParallaxText>
            </section>
        </div>
    )
}

const wrap = (min, max, v) => {
    const rangeSize = max - min
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}