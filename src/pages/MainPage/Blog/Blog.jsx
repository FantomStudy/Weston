import React from "react";
import styles from "./Blog.module.css";
import Title from "../../../components/Title/Title";
import { Blogs } from "../data";
import BlogCard from "./BlogCard/BlogCard";

export default function Blog() {
  return (
    <section>
      <div className={styles.blog}>
        <Title
          title="OUR BLOGS"
          desc="Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus habitasse."
        />
        <div className={styles.blog_grid}>
          {Blogs.map((blog, index) => {
            return (
              <BlogCard
                key={index}
                title={blog.title}
                desc={blog.desc}
                photo={blog.photo}
                link={blog.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
