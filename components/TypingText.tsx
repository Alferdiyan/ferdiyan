import { motion } from "framer-motion";
import { textContainer, textVariant } from "@/utils/motion";

type props = {
    color?: string;
    align?: string;
    title?: string;
    id?: string;
};
export const RunningText = ({ color, align }: props) => {
    return (
        <motion.p
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            className={`${
                color && align
                    ? `text-[${color}] text-[${align}]`
                    : "text-center text-gray-500"
            } mt-10 font-semibold`}
        >
            {Array.from("| Eka Ferdiyanto").map((letter, index) => (
                <motion.span key={index} variants={textVariant}>
                    {letter}
                </motion.span>
            ))}
        </motion.p>
    );
};

export const TitlePage = ({ title, color, align, id }: props) => {
    return (
        <motion.h2
            variants={textVariant}
            initial="hidden"
            id={id}
            whileInView="show"
            className={`${
                color && align
                    ? `text-[${color}] text-[${align}]`
                    : "text-center text-gray-700"
            }  font-semibold  uppercase tracking-[20px] text-primary text-2xl mt-10 m-30`}
        >
            {title}
        </motion.h2>
    );
};
