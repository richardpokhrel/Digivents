import { Link } from 'react-router-dom';
import { blogs } from './blogData';

const LandingBlogs = () => {
  // Show only the first 3 blogs
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#510a3d] mb-8 text-center">Latest from Our Blog</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {featuredBlogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-2xl" />
            <div className="p-4">
              <span className="block text-xs text-pink-600 uppercase font-semibold mb-1">{blog.category}</span>
              <h3 className="text-lg font-bold text-[#510a3d] mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{blog.excerpt}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="inline-block mt-3 text-[#510a3d] hover:text-[#6b7280] font-medium text-sm"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Link to full blog page */}
      <div className="text-center mt-10">
        <Link to="/blog" className="text-[#510a3d] hover:text-[#6b7280] text-sm font-semibold underline">
          View All Blogs
        </Link>
      </div>
    </div>
  );
};

export default LandingBlogs;
