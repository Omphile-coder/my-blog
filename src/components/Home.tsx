import { useEffect, useState } from "react";
import { BlogList } from "./BlogList";

export const Home = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  const handleDelete = (id: number) => {
    const newBlogs = blogs.filter((blog) => blog !== null && blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  });

  return (
    <div className="home">
      {blogs && (
        <BlogList
          blogs={blogs}
          title={"All Blogs"}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};
