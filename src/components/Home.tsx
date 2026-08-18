import { useEffect, useState } from "react";
import { BlogList } from "./BlogList";

export const Home = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isPending && <div>loading ... </div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
};
