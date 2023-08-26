import React from "react";

import BlogCard from "./blog-card/blogCard";
import Blog1 from "@/public/images/blogs/blog-thumb-1.jpg";
import Blog2 from "@/public/images/blogs/blog-thumb-2.jpg";
import Blog3 from "@/public/images/blogs/blog-thumb-3.jpg";

const Blogs = () => {
    return (
        <section className="h-full" id="blogs" title="Blogs & Articles">
            <h3 className="flex justify-center uppercase tracking-[20px] text-primary text-2xl mt-10 mb-10">
                Blog & Article
            </h3>
            <div className="blogs-content-wrapper flex flex-wrap justify-center gap-4">
                <BlogCard
                    user="John Doe"
                    date="Mar 8 2022"
                    image={Blog1}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <BlogCard
                    user="John Doe"
                    date="Mar 8 2022"
                    image={Blog2}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <BlogCard
                    user="John Doe"
                    date="Mar 8 2022"
                    image={Blog3}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
            </div>
        </section>
    );
};

export default Blogs;
