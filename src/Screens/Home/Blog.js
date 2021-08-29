import React from "react";
import BlogRow from "./BlogRow";

const Blog = () => {
  return (
    <div className="mx-4 sm:mx-8 sm:px-4 py-16 border-b border-gray-200">
      <h1 className="text-primary text-3xl sm:text-4xl font-medium">
        Blogs 📝
      </h1>
      <section className="mt-10 mx-4 sm:mx-6">
        <BlogRow />
      </section>
    </div>
  );
};

export default Blog;
