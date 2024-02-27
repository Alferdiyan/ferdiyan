import Link from "next/link";
import React, { Children } from "react";

export default function GetInTouch() {
    return (
        <div className="min-w-fit shadow-sm btn-accent text-black px-4 py-2 rounded-xl hover:bg-primary hover:text-accent">
            <Link
                href="https://www.upwork.com/freelancers/~01c9b953138197fad1"
                target="blank"
            >
                <button>Connect from Upwork</button>
            </Link>
        </div>
    );
}
