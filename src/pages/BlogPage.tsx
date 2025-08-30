import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 'sustainable-manufacturing',
      title: 'Sustainable Manufacturing Practices in PCC Production',
      excerpt: 'Exploring eco-friendly approaches to precipitated calcium carbonate manufacturing while maintaining quality standards.',
      author: 'Padam Jain',
      date: '2025-01-15',
      readTime: '6 min read',
      category: 'Sustainability',
      image: '/factory/DJI_0014 (2).jpg',
      tags: ['Sustainability', 'Manufacturing', 'Environment']
    },
    {
      id: 'pcc-applications-guide',
      title: 'Complete Guide to PCC Applications Across Industries',
      excerpt: 'Understanding how different grades of precipitated calcium carbonate serve various industrial applications.',
      author: 'Technical Team',
      date: '2025-01-12',
      readTime: '8 min read',
      category: 'Technical',
      image: '/products/pcc sk-11 (2).jpg',
      tags: ['Applications', 'Industries', 'Technical']
    },
    {
      id: 'quality-control-standards',
      title: 'Quality Control Standards in PCC Manufacturing',
      excerpt: 'How rigorous quality control measures ensure consistent, high-grade precipitated calcium carbonate production.',
      author: 'Quality Team',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Quality',
      image: '/factory/SDS_7865.JPG',
      tags: ['Quality Control', 'Standards', 'Testing']
    },
    {
      id: 'industry-trends-2025',
      title: 'PCC Industry Trends and Future Outlook for 2025',
      excerpt: 'Analyzing market trends, technological advances, and growth opportunities in the precipitated calcium carbonate industry.',
      author: 'Market Research Team',
      date: '2025-01-08',
      readTime: '5 min read',
      category: 'Market Trends',
      image: '/factory/image from sky-1.jpg',
      tags: ['Trends', 'Market', 'Future', 'Growth']
    },
    {
      id: 'pharmaceutical-grade-importance',
      title: 'The Critical Importance of Pharmaceutical Grade PCC',
      excerpt: 'Why pharmaceutical applications demand the highest purity standards and how we achieve them.',
      author: 'Regulatory Team',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'Pharmaceutical',
      image: '/products/food precipitate calcium carbonate powder.jpg',
      tags: ['Pharmaceutical', 'Quality', 'Regulations', 'Purity']
    },
    {
      id: 'innovation-in-pcc-production',
      title: 'Innovation and Technology in Modern PCC Production',
      excerpt: 'How cutting-edge technology and innovative processes are revolutionizing calcium carbonate manufacturing.',
      author: 'R&D Team',
      date: '2025-01-03',
      readTime: '9 min read',
      category: 'Innovation',
      image: '/factory/DJI_0003 (2).jpg',
      tags: ['Innovation', 'Technology', 'R&D', 'Production']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Industry Insights & News</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest developments in PCC manufacturing, industry trends, 
            and technical insights from our team of experts.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link
            to={`/blog/${blogPosts[0].id}`}
            className="group block bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-red-500/20"
            tabIndex={0}
            role="button"
            aria-label={`Read featured article: ${blogPosts[0].title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.href = `/blog/${blogPosts[0].id}`;
              }
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  Featured
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900 shadow-lg">
                  {blogPosts[0].category}
                </div>
                
                {/* Click Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-lg">
                      Read Featured Article
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 text-gray-500 text-sm mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <div className="flex items-center text-red-600 font-medium group-hover:underline transition-all duration-300 group/link">
                  Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-red-500/20"
              tabIndex={0}
              role="button"
              aria-label={`Read article: ${post.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.location.href = `/blog/${post.id}`;
                }
              }}
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900 shadow-lg">
                  {post.category}
                </div>
                
                {/* Click Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-lg text-sm">
                      Read Full Article
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-red-600 group-hover:underline transition-all duration-300 inline-flex items-center group/link">
                    Read More 
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest industry insights, technical articles, and company updates.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-green-100 text-sm mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;