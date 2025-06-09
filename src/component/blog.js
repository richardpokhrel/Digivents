import { Link } from 'react-router-dom';
import { blogs } from './blogData';

const Article = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#510a3d] mb-8 text-center">Our Blogs</h1>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <span className="inline-block mb-2 text-xs font-semibold tracking-wider text-pink-600 uppercase">{blog.category}</span>
              <h3 className="text-lg font-bold text-[#510a3d] mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="group inline-flex items-center text-[#510a3d] hover:text-[#6b7280] text-[16px] font-semibold transition-colors"
              >
                Read More
                <i className="fas fa-chevron-right ml-2 text-sm transform group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <p className="mt-4 text-xs text-gray-400">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
