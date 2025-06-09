import { useParams } from 'react-router-dom';
import { blogs } from './blogData';

const BlogArticlePage = () => {
  const { id } = useParams();
  console.log("id from url", id);
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Blog post not found</div>;
  }

  return (
    <div style={{ padding: "7rem",maxWidth: "700px", margin: "0 auto",  }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#510a3d" }}>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} style={{ width: "100%", marginBottom: "1rem" }} />
      <p style={{ color: "#777", fontSize: "0.9rem" }}>{blog.date} - {blog.category}</p>
      <p style={{ marginTop: "1rem", lineHeight: "1.6", whiteSpace: "pre-line" }}>{blog.content}</p>
    </div>
  );
};

export default BlogArticlePage;
