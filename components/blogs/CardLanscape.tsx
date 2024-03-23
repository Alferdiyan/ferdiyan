import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    cardTitle: string;
    description: string;
    images: StaticImageData;
    href: string;
};

export default function CardLanscape({
    cardTitle,
    description,
    images,
    href,
}: Props) {
    return (
        <div>
            <div className="card h-96 sm:h-[500px] w-[400px] sm:w-[500px] glass">
                <figure>
                    <Image src={images} alt="car!" className="min-h-fit" />
                </figure>

                <div className="card-body  ">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{description}</p>
                    <Link href={href} className="card-actions justify-end">
                        <button className="btn btn-primary">Learn more!</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
