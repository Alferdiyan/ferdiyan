import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function BakgroundCircle({}: Props) {
    return (
        <div className="relative flex justify-center items-center text-center">
            <div className="rounded-full border border-[#333333] h-[250px] w-[250px] absolute mt-52" />
            <div className="rounded-full border border-[#333333] h-[550px] w-[550px] absolute mt-52 animate-pulse" />
            <div className="rounded-full border border-[#f7ab0a] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
        </div>
    );
}
