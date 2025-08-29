import React from 'react';
import { Calendar, ArrowRight, ChevronRight, BookOpen } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Precipitated Calcium Carbonate: Properties and Applications',
      excerpt: 'Explore the unique properties of PCC and how it differs from ground calcium carbonate, along with its wide range of industrial applications.',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'Technical',
      categoryColor: 'bg-red-100 text-red-800'
    },
    {
      id: 2,
      title: 'PCC in Paper Manufacturing: Enhancing Quality and Performance',
      excerpt: 'Discover how high-quality PCC improves paper brightness, opacity, and printability while reducing production costs.',
      image: 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg',
      date: 'January 10, 2025',
      readTime: '4 min read',
      category: 'Industry Insights',
      categoryColor: 'bg-green-100 text-green-800'
    },
    {
      id: 3,
      title: 'Sustainable Manufacturing: Our Environmental Commitment',
      excerpt: 'Learn about our eco-friendly production processes and commitment to sustainable manufacturing practices.',
      image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg',
      date: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Sustainability',
      categoryColor: 'bg-red-100 text-red-800'
    },
    {
      id: 4,
      title: 'Quality Control in PCC Manufacturing: ISO Standards and Best Practices',
      excerpt: 'An in-depth look at our quality control processes and how we maintain ISO 9001:2015 certification standards.',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg',
      date: 'December 28, 2024',
      readTime: '7 min read',
      category: 'Quality',
      categoryColor: 'bg-green-100 text-green-800'
    },
    {
      id: 5,
      title: 'PCC Applications in Pharmaceutical Industry: Safety and Compliance',
      excerpt: 'Understanding the critical role of pharmaceutical-grade PCC and regulatory compliance requirements.',
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg',
      date: 'December 20, 2024',
      readTime: '5 min read',
      category: 'Pharmaceutical',
      categoryColor: 'bg-red-100 text-red-800'
    },
    {
      id: 6,
      title: 'Future Trends in Calcium Carbonate Technology',
      excerpt: 'Exploring emerging trends and innovations in calcium carbonate production and applications.',
      image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'Innovation',
      categoryColor: 'bg-green-100 text-green-800'
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Industry Knowledge
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="text-green-600">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with industry knowledge, technical insights, and PCC applications
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className={`absolute top-6 left-6 px-3 py-1 ${featuredPost.categoryColor} rounded-full text-sm font-medium`}>
                  Featured
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className={`inline-flex px-3 py-1 ${featuredPost.categoryColor} rounded-full text-sm font-medium`}>
                    {featuredPost.category}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center group">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className={`absolute top-4 left-4 px-2 py-1 ${post.categoryColor} rounded-full text-xs font-medium`}>
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button className="text-red-600 hover:text-red-700 font-medium inline-flex items-center group">
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center">
            View All Articles
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;