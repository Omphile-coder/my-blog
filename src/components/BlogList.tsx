export const BlogList = ({ blogs, title }: any) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog: any) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          
        </div>
      ))}
    </div>
  );
};
