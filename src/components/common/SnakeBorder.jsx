import { motion } from 'framer-motion';

export default function SnakeBorder({ className = "rounded-2xl", rx = "24" }) {
    return (
        <div className={`hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${className}`}>
            <motion.svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.rect
                    width="100%"
                    height="100%"
                    rx={rx}
                    ry={rx}
                    fill="transparent"
                    stroke="#10b981" // Tailwind primary/emerald-500
                    strokeWidth="3"
                    strokeLinecap="round"
                    pathLength="1"
                    strokeDasharray="0.4 0.6" // 40% dash, 60% gap
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -1 }} // Moves the dash around
                    transition={{
                        duration: 4,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    style={{ willChange: "stroke-dashoffset" }}
                />
            </motion.svg>
        </div>
    );
}
