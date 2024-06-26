import Link from "next/link";
import React from "react";
import GetInTouch from "./button/GetInTouch";

export default function ContactMe() {
    return (
        <div title="Contact">
            <div className=" flex flex-col justify-center items-center">
                <div className="top-24 uppercase tracking-[2px] text-primary text-2xl flex justify-center items-center text-center m-10">
                    <p>Interested in working with me?</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-3xl md:text-7xl font-semibold">
                        {/* <Link href="/contactme">
                            <button>Lets Work Together</button>
                        </Link> */}
                    </p>
                    <GetInTouch />
                    <p className=" text-xs p-10 text-neutral text-center">
                        Feel free to reach out to me any time. I prefer to talk
                        over email, especially since we may be a few time zones
                        away.
                    </p>
                </div>
            </div>
        </div>
    );
}
