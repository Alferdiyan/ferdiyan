import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

type Props = {
    directionLeft?: boolean;
};

export default function Skill({}: Props) {
    return (
        <div className="group realtive flex cursor-pointe">
            <motion.img />
            <motion.div
                initial={{
                    x: -200,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
            >
                <SocialIcon
                    url="https://www.youtube.com/ferdiyan"
                    // fgColor="gray"
                    // bgColor="transparent"
                />
            </motion.div>
        </div>
    );
}
