import { Carousel } from "flowbite-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    cardTitle: string;
    description: string;
    images: StaticImageData;
    href: string;
};

export default function CardGlass({
    cardTitle,
    description,
    images,
    href,
}: Props) {
    return (
        <div>
            <div className="card h-80 sm:h-[400px] w-[400px] sm:w-[500px] glass rounded-lg border">
                <figure>
                    <Image
                        src={images}
                        alt="car!"
                        className=" overflow-hidden h-64 object-cover"
                    />
                </figure>

                <div className="card-body  ">
                    <h2 className="card-title">{cardTitle}</h2>
                    {/* <p>{description}</p> */}
                    <div className="card-actions justify-end">
                        <Link href={href}>
                            <button className="btn btn-primary">
                                Learn more!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

// .card-body {
//   display: flex;
//   display: flex;
//   flex: 1 1 auto;
//   flex-direction: column;
//   flex-direction: column;
//   padding: var(--padding-card, 2rem/* 32px */);
//   gap: 0.5rem/* 8px */;
// }
// .card-body :where(p) {
//   flex-grow: 1;
// }
// .card.image-full > .card-body {
//   position: relative;
//   z-index: 20;
//   --tw-text-opacity: 1;
//   color: hsl(var(--nc) / var(--tw-text-opacity));
// }
// .card.compact .card-body {
//   padding: 1rem/* 16px */;
//   font-size: 0.875rem/* 14px */;
//   line-height: 1.25rem/* 20px */;
// }
// .card-compact .card-body {
//   padding: 1rem/* 16px */;
//   font-size: 0.875rem/* 14px */;
//   line-height: 1.25rem/* 20px */;
// }
// .card-normal .card-body {
//   padding: var(--padding-card, 2rem/* 32px */);
//   font-size: 1rem/* 16px */;
//   line-height: 1.5rem/* 24px */;
// }
