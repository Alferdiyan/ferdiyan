import Link from "next/link";
import React, { Children } from "react";

export default function GetInTouch() {
    return (
        <div className="min-w-fit shadow-sm btn-primary text-black px-4 py-2 rounded-xl hover:bg-secondary hover:text-primary">
            <Link href="/contactme">
                <button>Get In Touch</button>
            </Link>
        </div>
    );
}
