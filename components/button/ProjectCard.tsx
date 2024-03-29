import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
    cardTitle: string;
    description: string;
    images: StaticImageData;
};

export default function CardGlass({ cardTitle, description, images }: Props) {
    return (
        <div>
            <div className="card h-96 sm:h-[500px] w-[400px] sm:w-[500px] glass">
                <figure>
                    <Image src={images} alt="car!" className="min-h-fit" />
                </figure>

                <div className="card-body  ">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn more!</button>
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
