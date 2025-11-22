import React from 'react';
import { motion } from 'framer-motion';

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

const Stairs = () => {
    const reverseIndex = (index) => {
        const totalSteps = 5;
        return totalSteps - index - 1;
    };
    return (
        <>
            {[...Array(5)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-black fixed top-0 left-0 right-0 pointer-events-none z-40"
                />
            ))}
        </>
    );
};

export default Stairs;