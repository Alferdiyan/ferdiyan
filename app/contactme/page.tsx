import React from 'react';

export default function ContactMe() {
  return (
    <div title="Contact">
      <div className="top-24 uppercase tracking-[2px] text-gray-400 text-2xl flex justify-center items-center text-center m-10">
        <p>need a front end developer</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className=" text-3xl md:text-7xl font-semibold">
          Lets Work Together
        </p>
        <p className=" text-xs p-10 text-white">
          Feel free to reach out to me any time. I prefer to talk over email,
          especially since we may be a few time zones away.
        </p>
      </div>
    </div>
  );
}
