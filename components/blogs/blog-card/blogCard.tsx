import Image, { StaticImageData } from "next/image";
import React from "react";

interface BlogCardProps {
    user: string;
    date: string;
    image: StaticImageData; // Assuming Blog1, Blog2, etc. are imported as StaticImage type
    title: string;
    description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
    user,
    date,
    image,
    title,
    description,
}) => {
    return (
        <div className="blog-card  max-w-md border rounded-xl overflow-hidden  ">
            <div className="image-section border border-red-700 overflow-hidden transition-transform transform-gpu hover:scale-125">
                <Image src={image} alt={title} className=" cursor-pointer " />
            </div>
            <div className="content-section p-4 gap-3">
                <div className="info-bar flex justify-between ">
                    <div className="user-name">By {user}</div>
                    <div className="posted-date">{date}</div>
                </div>
                <h3 className="text-xl font-medium">{title}</h3>
                <p className="hihlight">{description}</p>
                <div className="readmore-cta">
                    <span className="text">Read More</span>
                    {/* <Arrow /> */}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
