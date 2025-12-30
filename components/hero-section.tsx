'use client';

import { motion } from 'motion/react';
import PulseeLaunchingCanvas from './pulsee-launching';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-black overflow-hidden">
            {/* Pong Canvas */}
            <div className="absolute inset-0">
                <PulseeLaunchingCanvas />
            </div>

            {/* Blinking Vintage Cursor */}
            <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="absolute top-8 left-8 z-10"
            >
                <span className="text-green-400 text-4xl font-mono">▌</span>
            </motion.div>

            {/* Commodore 64 style scanlines overlay */}
            <div className="absolute inset-0 pointer-events-none z-20 opacity-10"
                style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
                }}
            />

            {/* Bottom text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-8 left-0 right-0 text-center z-10"
            >
                <p className="text-white/70 text-lg md:text-xl font-mono">
                    <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Allez, descendons. Si tu as le courage.
                    </motion.span>
                </p>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="mt-4 text-3xl"
                >
                    👇
                </motion.div>
            </motion.div>

            {/* Vintage badge */}
            <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: -5 }}
                transition={{ delay: 0.5 }}
                className="absolute top-8 right-8 z-10 bg-yellow-400 text-black px-4 py-2 font-mono text-xs font-bold transform rotate-[-5deg] shadow-lg"
            >
                COMMODORE 64 APPROVED ™
            </motion.div>
        </section>
    );
}
