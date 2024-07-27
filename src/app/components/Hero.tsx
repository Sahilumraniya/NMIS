"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Link from "next/link";

export function Hero() {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                Welcome to New Marg Immigration Services <br /><br />
                <Highlight className="text-black dark:text-white">
                    Expert guidance for your journey to the best countries: USA, UK, Europe, Canada, Australia, New Zealand, Russia, and more.
                </Highlight>
            </motion.h1>
            <div className="flex justify-center mt-8">
                <Link href="/from">
                    <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                        Contact Us
                    </p>
                </Link>
            </div>
        </HeroHighlight>
    );
}
