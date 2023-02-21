import React from 'react';
import Skill from './Skill';

type Props = {};

export default function Skills({}: Props) {
    return (
        <div className="h-screen  text-center flex flex-col md:text-left max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center ">
            <h1 className="align-center uppercase tracking-[20px] text-gray-500 text-2xl p-10">
                Skills
            </h1>
            <h3 className="top-36 uppercase tracking-[3px] text-gray-500 text-sm mb-10">
                Hover all skil for curency proficiency
            </h3>
            <div className="grid grid-cols-4 gap-5">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </div>
    );
}
