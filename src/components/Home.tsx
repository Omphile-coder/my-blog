import { useState } from "react";
import { BlogList } from "./BlogList";

export const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "web dev tips", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);

  const handleDelete = (id: number) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />
    </div>
  );
};
